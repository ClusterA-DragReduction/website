import React from 'react';
import { NavButton } from './Navigation';
import { ChevronDown } from 'lucide-react';
import ChatBot from './ChatBot';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary-500 bg-opacity-20 rounded-full text-primary-300 text-sm font-semibold mb-4">引领微纳技术创新</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            创新科技
            <span className="relative inline-block text-primary-400 ml-2">
              引领未来
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-400 transform origin-left animate-scale-x"></div>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl mb-12 text-gray-200 leading-relaxed animate-fade-in-delay max-w-3xl mx-auto">
            我们致力于高铁、飞机、汽车、风电及无人机的减阻和防除冰等领域，通过创新的仿生微纳功能材料，显著降低交通运输领域的能耗，为全球节能减排贡献力量。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-delay-2">
            <NavButton href="#services" className="text-lg px-8 py-4 bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              了解我们的服务
            </NavButton>
            <NavButton href="#contact" className="text-lg px-8 py-4 bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              联系我们
            </NavButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <NavButton href="#services" className="bg-transparent hover:bg-transparent p-2 rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300">
          <ChevronDown size={32} className="text-white" />
        </NavButton>
      </div>

      <ChatBot />
    </section>
  );
};

export default Hero;