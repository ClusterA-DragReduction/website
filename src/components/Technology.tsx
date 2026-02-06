// src/components/technology.tsx
import React from 'react';

const Technology: React.FC = () => {
  return (
    <section
      id="technology"
      className="py-20 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 模块标题 */}
        <div className="text-center mb-16">
          <p className="text-2xl md:text-4xl  text-gray-700 mb-4">
            核心技术
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            从大自然千万年进化中获得的形态结构灵感，研发具有减阻、疏冰防冰等优异性能的仿生微纳功能材料。
          </p>
        </div>

        {/* 技术内容 - 图文混排 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 技术一：舌形气动减阻分形微纳结构 */}
          <div className="flex flex-col order-2 lg:order-1">
            <p className="text-2xl  text-blue-600 mb-4">
            仿库姆塔格沙漠舌形减阻微纳结构
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
            以新疆库姆塔格沙漠独特舌形肋结构的沙垄减阻形态为减阻模仿对象，发明了舌形气动减阻分形微纳结构，建立了小肋微纳结构分层破涡减阻模型，提出了基于多层混合掩模的三重光刻方法，实现了仿沙垄分形微纳结构精确制造。空气流道测试结果表明，仿沙垄分形微纳结构最大减阻率16.67%，减阻性能比国际上报道最高水平提升了52%，为“新一代”高铁、民机等提供了全新减阻手段
            </p>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/img-pro1.jpg" // 替换为实际图片路径
                alt="库姆塔格沙漠舌形沙垄结构示意图"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3', objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
          
            </div>
          </div>
        </div>

        {/* 分隔线 */}
        <div className="my-16  border-gray-200"></div>

        {/* 技术二：多层不等高微纳结构（疏冰雪） */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src="/images/img-pro2.jpg" // 替换为实际图片路径
                alt="秦岭箭竹叶表面多层微纳结构"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3', objectPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              
               
            
            </div>
          </div>

          <div>
            <p className="text-2xl  text-green-600 mb-4">
              仿秦岭箭竹叶疏冰雪微纳结构
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
             仿秦岭箭竹叶表面独特的多层不等高微纳结构具有优异的疏冰雪特征，具有“疏冰-防冰”效果。依此发明多层不等高疏冰微纳结构，建立多尺度过冷水滴疏冰模型，攻克了多层异构微纳结构制造难题，开发出跨尺度柔性微纳结构制造工艺。
     所研发产品可广泛应用于高铁、飞机、汽车、风电及无人机的减阻和防除冰等领域，可大大降低交通运输领域的能耗，助力国家双碳发展战略。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;