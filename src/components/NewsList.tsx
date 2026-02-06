// src/pages/NewsList.tsx
import { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNewsList } from '../lib/newsApi';
import { NewsItem } from '../types/news';

export default function NewsList() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchNewsList()
      .then(setNewsList)
      .catch(err => {
        console.error('Failed to load news:', err);
        setError('新闻加载失败，请稍后重试');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-4 border border-gray-200 rounded-lg p-4">
              <div className="w-48 h-32 bg-gray-200 rounded"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          重试
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">新闻中心</h1>
        <p className="mt-2 text-gray-600">
          了解芯柔微纳在微纳减阻、防除冰领域的最新动态与技术突破
        </p>
      </div>

      {newsList.length === 0 ? (
        <div className="text-center py-12 text-gray-500">暂无新闻</div>
      ) : (
        <div className="space-y-6">
          {newsList.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}
    </div>
  );
}