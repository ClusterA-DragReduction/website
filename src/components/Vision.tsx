import React from 'react';
import { Award, Briefcase, Users, Target, Rocket, LeafyGreen } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-primary-100 hover:border-primary-300">
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const achievements = [
  {
    title: "技术创新",
    description: "获得国家发明专利30余项，建立完整的知识产权保护体系",
    icon: <Rocket size={32} />
  },
  {
    title: "节能减排",
    description: "累计为客户节省运营成本超过10亿元，减少碳排放200万吨以上",
    icon: <LeafyGreen size={32} />
  },
  {
    title: "行业认可",
    description: "减阻疏冰蒙皮项目荣获2024年中国好设计奖金奖第一名",
    icon: <Award size={32} />
  }
];

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-gray-50 opacity-80"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">成效与愿景</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们致力于成为全球领先的仿生微纳材料解决方案提供商，推动产业创新发展。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">未来五年发展规划</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Target size={24} className="text-primary-500" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  计划投资2亿元建设新型仿生材料研发中心，重点突破新一代智能仿生材料技术。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Target size={24} className="text-primary-500" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  到2030年成为全球领先的仿生微纳材料解决方案提供商。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <Target size={24} className="text-primary-500" />
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed">
                  推动产品在航空航天、新能源、智能交通等战略性新兴产业实现规模化应用。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="text-primary-500 mb-2"><Briefcase size={32} /></div>
            <div className="text-3xl font-bold mb-1 text-gray-800">8+</div>
            <div className="text-sm text-gray-600">年行业经验</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="text-primary-500 mb-2"><Users size={32} /></div>
            <div className="text-3xl font-bold mb-1 text-gray-800">100+</div>
            <div className="text-sm text-gray-600">企业客户</div>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-lg">
            <div className="text-primary-500 mb-2"><Award size={32} /></div>
            <div className="text-3xl font-bold mb-1 text-gray-800">200+</div>
            <div className="text-sm text-gray-600">成功项目</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;