// src/types/news.ts

// src/types/news.ts

export interface NewsItem {
  id: string;
  title: string;
  author: string;
  Time:string;
  excerpt: string;
  content: string;
  coverImage?: string; 
  slug: string;     // 完整 URL  
  tags: string[];    
  category: string;
  publishedTime: string;
  newsID:string;       // 富文本 HTML
}



// 🔹 Strapi 原始响应结构（API 层用）
export interface StrapiNewsResponse {
  id: number; // Strapi ID 是 number
  attributes: {
    slug: string;
    title: string;
    author: string;
    Time: string; // ISO string
    excerpt: string;
    tags?: string; // 注意：枚举字段在 Strapi 中是 string，不是 string[]
    content: string;
    category: string;
    cover?: {
      data: {
        id: number;
        attributes: {
          url: string; // "/uploads/xxx.webp"
          alternativeText?: string;
          caption?: string;
        };
      } | null;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    newsID:string; 
  };
}

export interface StrapiPaginatedResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// 🔹 前端统一模型（组件层用）
export interface NewsItem {
  id: string;       // 前端统一用 string（兼容未来 CMS 迁移）
  slug: string;
  title: string;
  date: string;     // 建议保持 ISO string，由组件层格式化
  excerpt: string;
  coverImage?: string; // 完整 URL
  tags: string[];   // 统一为数组，方便渲染
  content: string;
}


