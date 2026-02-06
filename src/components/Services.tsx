import React from 'react';
import { Plane, Wind, Car, Zap } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-primary-300 border-2 border-transparent group">
      <div className="mb-6 text-primary-500 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-600">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "航空航天减阻技术",
      description: "采用仿生微纳功能材料，显著降低飞机表面摩擦阻力，减少燃油消耗15-20%。已成功应用于大型客机机翼、机身等部位，有效提升飞行性能和经济性。我们的技术已在多家航空公司的商用客机上得到验证，帮助客户每年节省数千万元燃油成本。",
      icon: <Plane size={48} />
    },
    {
      title: "风电设备防除冰",
      description: "特殊表面处理技术使风电叶片表面具有优异的防除冰性能，显著降低冰雪附着，保证设备在极寒天气下的正常运转。我们的产品已在内蒙古、黑龙江等地区的大型风电场成功应用，帮助客户提升发电效率30%以上，年增收益超过500万元。",
      icon: <Wind size={48} />
    },
    {
      title: "高铁动车减阻系统",
      description: "应用于高铁车头、车身等关键部位，减少空气阻力20%以上，降低运行能耗，提升列车运行稳定性。目前已在京沪高铁等多条重点线路的时速350公里级别高铁列车上实现规模化应用，单列车年节约电能超过100万度。",
      icon: <Car size={48} />
    },
    {
      title: "无人机智能蒙皮",
      description: "为军用、民用无人机提供智能减阻防除冰蒙皮系统，延长续航时间25%，提升全天候作业能力。该技术荣获2024年中国好设计奖金奖第一名，已成功应用于多家领先无人机制造商的中大型无人机产品，帮助客户产品性能提升30%以上。",
      icon: <Zap size={48} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">我们的服务</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过持续的技术创新和专业服务，为客户提供高效、可靠的仿生微纳功能材料解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;