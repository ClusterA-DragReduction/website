// src/components/BackToTop.tsx
import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        // 当页面向下滚动超过 300px 时显示按钮
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // 返回顶部函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滚动
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-3 right-6
            w-12 h-12
            bg-blue-600 hover:bg-blue-700
            text-white
            rounded-full
            shadow-lg hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300 ease-in-out
            transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            z-50
          "
          aria-label="返回顶部"
        >
          {/* 向上箭头 SVG 图标 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;