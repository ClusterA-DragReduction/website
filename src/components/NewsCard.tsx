// src/components/NewsCard.tsx
import { NewsItem } from '../types/news';
import { Link } from 'react-router-dom';

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article 
      className="group flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
    >
      {news.coverImage && (
        <Link 
          to={`/news/${news.slug}`} 
          className="flex-shrink-0 w-full md:w-48 h-32 overflow-hidden rounded"
        >
          <img 
            src={news.coverImage} 
            alt={news.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      )}
      
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap gap-2 mb-2">
          {news.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded"
            >
              {tag}
            </span>
          ))}
          <time className="text-sm text-gray-500 ml-auto whitespace-nowrap">
            {new Date(news.date).toLocaleDateString('zh-CN')}
          </time>
        </div>
        
        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 line-clamp-2">
          <Link to={`/news/${news.slug}`} className="hover:underline">
            {news.title}
          </Link>
        </h2>
        
        <p className="text-gray-700 mt-2 text-sm line-clamp-3">
          {news.excerpt}
        </p>
        
        <Link 
          to={`/news/${news.slug}`} 
          className="mt-3 inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
        >
          查看详情
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}