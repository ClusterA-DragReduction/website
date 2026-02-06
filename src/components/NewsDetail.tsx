// src/pages/NewsDetail.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { fetchNewsBySlug, fetchNewsById} from '../lib/newsApi';
import { NewsItem } from '../types/news';

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    
    // 尝试按 slug 加载
    fetchNewsBySlug(slug)
      .then(data => {
        if (data) {
          setNews(data);
        } else {
          // ❗ 降级：尝试按 ID 加载（兼容旧链接）
          const id = slug.match(/^\d+$/)?.[0]; // 仅当 slug 是纯数字时
          if (id) {
            return fetchNewsById(id);
          }
         setError('新闻不存在');
          throw new Error('Not found');
        }
      })
      .then(data => {
        if (data) {
          setNews(data);
          // ✅ 重定向到规范 slug（SEO 友好）
          if (data.slug !== slug) {
            navigate(`/news/${data.slug}`, { replace: true });
          }
        } else {
          throw new Error('Not found');
        }
      })
      .catch(err => {
        console.error('Failed to load news:', err);
        setError('新闻不存在或加载失败');
      })
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-red-500 mb-4">{error || '新闻不存在'}</div>
        <button 
          onClick={() => navigate('/news')}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          返回新闻中心
        </button>
      </div>
    );
  }

  // 安全渲染富文本
  const cleanHTML = DOMPurify.sanitize(news.content, {
    USE_PROFILES: { html: true },
    FORBID_TAGS: ['script', 'iframe'], // 额外禁用标签
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 面包屑 */}
      <nav className="mb-6 text-sm text-gray-600">
        <a href="/" className="hover:text-gray-900">首页</a>
        <span className="mx-2">/</span>
        <a href="/news" className="hover:text-gray-900">新闻中心</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{news.title}</span>
      </nav>

      {/* 标题区 */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {news.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
          <time className="ml-auto text-sm text-gray-500 whitespace-nowrap">
            {new Date(news.date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </time>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {news.title}
        </h1>
        
        {/* 公司标识（强化品牌） */}
        <div className="mt-3 flex items-center text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          西安芯柔微纳科技有限公司 · 技术原创
        </div>
      </header>

      {/* 封面图（若存在） */}
      {news.coverImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={news.coverImage} 
            alt={news.title}
            className="w-full h-auto object-contain"
          />
        </div>
      )}

      {/* 正文内容 */}
      <article 
        className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />

      {/* 底部操作 */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap gap-4">
        <button 
          onClick={() => navigate('/news')}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回列表
        </button>
        
        <button 
          onClick={() => window.print()}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
          </svg>
          打印
        </button>
      </div>
    </div>
  );
}