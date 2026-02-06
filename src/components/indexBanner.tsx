import React, { useState, useEffect } from 'react';

// Banner 模块支持的媒体类型
type BannerMedia = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  caption?: string;
};

// Banner 数据配置
const bannerSlides: BannerMedia[] = [
  {
    type: 'image',
    src: '../images/bg-chr.png',
    alt: '我们的愿景',
    caption: '致力于成为交通运输和新能源产业背后的隐形冠军',
  },
    {
    type: 'image',
    src: '../images/bg-leaf.png',
    alt: '我们的使命',
    caption: '以科技创新助力全球节能减排事业',
  },
  {
    type: 'image',
    src: '../images/img-banner3.jpg',
    alt: '核心价值观',
    caption: '责任 · 守信 · 协同 · 共赢',
  }  

];

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const currentMedia = bannerSlides[currentSlide];

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  // 图片加载完成
  useEffect(() => {
    if (currentMedia.type === 'image') {
      const img = new Image();
      img.src = currentMedia.src;
      img.onload = () => setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    setIsVideoPlaying(true);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
    setIsVideoPlaying(true);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsVideoPlaying(false);
  };

  return (
    <div className="relative w-full h-[650px] overflow-hidden bg-black">
      {/* 背景媒体 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.src}
            alt={currentMedia.alt}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <video
            src={currentMedia.src}
            className="w-full h-full object-cover"
            autoPlay={isVideoPlaying}
            loop
            muted
            playsInline
          />
        )}
      </div>

      {/* 视频控制层（仅视频时显示） */}
      {currentMedia.type === 'video' && !isVideoPlaying && (
        <div
          className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer z-20"
          onClick={() => setIsVideoPlaying(true)}
        >
          <div className="text-white text-center">
            <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4 inline-block">
              <svg
                className="w-12 h-12"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-lg"></p>
          </div>
        </div>
      )}

      {/*遮罩层*/}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

     {/*内容区域 */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-2">
        <p className="text-5xl md:text-5xl mb-4 drop-shadow-lg">
           {currentMedia.alt}
           </p>
           <p className="text-4xl md:text-4xl mb-4 drop-shadow-lg">
          {currentMedia.caption}
        </p>
        {/* <p className="text-lg md:text-xl max-w-3xl drop-shadow-md">
          西安芯柔微纳科技有限公司致力于为高铁、航空、汽车等领域提供先进的微纳材料解决方案
        </p> */}
      </div>

      {/* 轮播指示器 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`跳到第 ${index + 1} 张`}
          />
        ))}
      </div>

      {/* 轮播导航按钮 */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        onClick={prevSlide}
        aria-label="上一张"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        onClick={nextSlide}
        aria-label="下一张"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 进度条 */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white bg-opacity-20">
        <div
          className="absolute top-0 left-0 h-full bg-white transition-all duration-1000 ease-linear"
          style={{
            width: `${((currentSlide % bannerSlides.length) / bannerSlides.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;