// src/lib/newsApi.ts
import { apiFetch } from './apiClient';
import { 
  StrapiNewsResponse, 
  StrapiPaginatedResponse, 
  NewsItem 
} from '../types/news';

// 🔁 数据转换函数：Strapi 响应 → 前端模型
function transformNewsItem(item: StrapiNewsResponse): NewsItem {
  const attrs = item.attributes;
  
  // 处理 tags：Strapi 单选枚举是 string，转为数组
  const tags = attrs.tags ? [attrs.tags] : [];
  
  // 处理封面图 URL
  const coverUrl = attrs.cover?.data?.attributes.url;
  const fullCoverUrl = coverUrl 
    ? `${import.meta.env.VITE_API_BASE?.replace('/api', '') || ''}${coverUrl}`
    : undefined;

  return {
    id: item.id.toString(),
    slug: attrs.slug,
    author: attrs.author,
    publishedTime: attrs.Time,
    category: attrs.category,
    Time:attrs.Time,
    newsID:attrs.newsID,    
    title: attrs.title,
    date: attrs.Time || attrs.publishedAt || attrs.createdAt,
    excerpt: attrs.excerpt || '',
    coverImage: fullCoverUrl,
    tags:attrs.tags ? [attrs.tags] : [],
    content: attrs.content || '',
  };
}

// ✅ 获取新闻列表 '/news-reports?populate=cover&sort=date:desc'
export async function fetchNewsList(): Promise<NewsItem[]> {
  const response = await apiFetch<StrapiPaginatedResponse<StrapiNewsResponse>>(
    '/news-reports?populate=cover&sort=date:desc'
  );
  return response.data.map(transformNewsItem);
}

// ✅ 通过 slug 获取详情
export async function fetchNewsBySlug(slug: string): Promise<NewsItem | null> {
  const response = await apiFetch<StrapiPaginatedResponse<StrapiNewsResponse>>(
    `/news-reports?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=cover`
  );
  
  if (!response.data || response.data.length === 0) return null;
  
  return transformNewsItem(response.data[0]);
}

// ✅ 新增：通过 ID 获取（仅用于重定向兼容）
export async function fetchNewsById(id: string | number): Promise<NewsItem | null> {
  try {
    const response = await apiFetch<any>(
      `/news-reports/${encodeURIComponent(id)}?populate=cover`
    );
    
    if (!response.data) return null;
    return transformNewsItem(response.data);
  } catch (error) {
    console.warn(`News ID ${id} not found:`, error);
    return null;
  }
}