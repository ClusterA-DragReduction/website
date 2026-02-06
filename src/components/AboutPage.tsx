// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* ========== 1. Banner - 企业愿景 ========== */}
      <section
        className="relative w-full h-[500px] bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-vision.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* 遮罩层 */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* 内容 */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Global Leading</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            致力于成为交通运输和新能源产业背后的隐形冠军
          </p>
        </div>

        {/* 装饰元素（可选） */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
      </section>



 


      {/* ========== 页脚预留 ========== */}
      <div className="h-1 bg-gray-200"></div>
    </div>
  );
};

export default About;