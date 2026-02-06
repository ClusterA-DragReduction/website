// src/components/honor.tsx
import React from 'react';

// 奖项数据类型
interface Award {
  id: number;
  title: string;
  image: string; // 图片路径（放在 public/images/ 下）
}

// 荣誉数据（请根据实际内容修改）
const awards: Award[] = [
  {
    id: 1,
    title: '2024年中国好设计奖金奖第一名',
    image: '/images/img-honor1.jpg',
  },
  {
    id: 2,
    title: '2022年陕西省技术发明一等奖',
    image: '/images/img-honor2.jpg',
  }
];

const Honor: React.FC = () => {
  return (
    <section
      id="honor"
      className="py-20 bg-white"
    >
      {/* 模块标题 */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          荣誉奖项
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          凭借技术创新与卓越成果，荣获多项荣誉与认证。
        </p>
      </div>

      {/* 奖项网格布局 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="grid grid-cols-[300px_300px] gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 h-full"
            >
              {/* 奖项图片：统一 16:9 宽高比 */}
              <div className="relative aspect-video w-full bg-gray-100">
                <img
                  src={award.image}
                  alt={`奖项：${award.title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement | null;
                    if (!img) return;
                    
                    // 隐藏图片
                    img.style.opacity = '0';
                    
                    // 显示备用文字
                    const fallback = img.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.opacity = '1';
                      fallback.style.visibility = 'visible';
                    }
                  }}
                />
                {/* 图片加载失败时的备用内容 */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 text-white text-sm font-medium opacity-0 visibility-hidden transition-all duration-300">
                  {award.title.substring(0, 12)}...
                </div>
              </div>

              {/* 奖项名称 */}
              <div className="p-4 text-center flex-shrink-0">
                <p className="text-base   text-gray-700 leading-tight line-clamp-2">
                  {award.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honor;