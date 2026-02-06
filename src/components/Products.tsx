import React from 'react';
import { Plane, Train, Wind, MapPin } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, benefits, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-primary-300">
      <div className="text-primary-500 mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      {image && (
        <div className="mb-6 overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110" />
        </div>
      )}
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-500 mr-2">•</span>
            <span className="text-gray-600">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const products = [
  {
    title: "航空航天",
    description: "为飞机和航天器提供先进的减阻和防除冰解决方案",
    icon: <Plane size={32} />,
    image: "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      "提高飞行效率，降低燃油消耗",
      "增强飞行安全性，有效防止结冰",
      "减少维护成本和停机时间"
    ]
  },
  {
    title: "高铁交通",
    description: "为高速列车提供创新的空气动力学优化方案",
    icon: <Train size={32} />,
    image: "https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      "显著降低运行能耗",
      "提升列车运行稳定性",
      "延长设备使用寿命"
    ]
  },
  {
    title: "风力发电",
    description: "为风力发电设备提供高效的防除冰和性能优化解决方案",
    icon: <Wind size={32} />,
    image: "https://images.pexels.com/photos/8961151/pexels-photo-8961151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      "提高发电效率",
      "防止叶片结冰损坏",
      "降低维护难度和成本"
    ]
  },
  {
    title: "极地环境应用",
    description: "为库布塔沙漠地区提供特殊的仿生微纳材料解决方案",
    icon: <MapPin size={32} />,
    image: "https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    benefits: [
      "适应极端温差环境",
      "有效防止沙尘积累",
      "提高设备运行效率"
    ]
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">产品应用</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的仿生微纳功能材料产品，为多个重要领域提供创新的解决方案，显著提升设备性能和能源效率。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;