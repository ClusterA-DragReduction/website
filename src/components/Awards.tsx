import React from 'react';
import { Award, Star } from 'lucide-react';

const Awards: React.FC = () => {
  return (
    <section id="award" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-700 mb-6">荣誉与成就</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们的创新成果获得了业界的广泛认可，持续为行业发展做出贡献
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-primary-100 hover:border-primary-300">
            <div className="relative">
              <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2">
                <Star size={20} />
                <span>2024年度最佳</span>
              </div>
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="减阻疏冰蒙皮项目" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <Award size={40} className="text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-800">中国好设计奖金奖第一名</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  我们的减阻疏冰蒙皮项目凭借其创新性和实用价值，在2024年中国好设计评选中脱颖而出，荣获金奖第一名。该项目通过先进的仿生微纳材料技术，有效解决了航空航天领域的关键技术难题。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">技术创新</h4>
                    <p className="text-gray-600">突破性的仿生微纳材料设计，实现了优异的减阻和防除冰性能</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">实际应用</h4>
                    <p className="text-gray-600">已成功应用于多个高铁和航空项目，显著提升设备性能和能源效率</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;