import React, { useState } from 'react';

// 定义产品类型
interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  backgroundImage: string;
}

// 精简为两个产品
const products: Product[] = [
  {
    id: 'reduction',
    title: '仿生微纳减阻薄膜',
    description:
      '基于仿生微纳结构设计，应用于高铁、飞机、无人机等高速交通工具表面，显著降低空气阻力，提升能效，节能减排。',
    features: [
      '仿沙垄结构舌形特征，微纳米结构',
      '小肋微纳结构分层破涡减阻模型',
      '耐候性强，适应极端环境',
    
    ],
    backgroundImage:
      '../images/img-pro1.png',
  },
  {
    id: 'deicing',
    title: '仿生微纳疏冰蒙皮',
    description:
      '面向航空、风电、高铁等领域的智能防除冰解决方案，利用微纳结构降低冰附着力，结合低功耗加热系统，实现高效节能防冰。',
    features: [
      '仿秦岭箭竹叶疏冰的多层不等高微纳结构',
      '适用于高寒、高湿、冻雨等复杂气候条件',    
      '可适用于机翼、叶片等复杂外形',
    ],
    backgroundImage:
      '../images/img-pro2.png',
  },
];

const CoreProducts: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('reduction');

  const activeProduct = products.find((p) => p.id === activeId) || products[0];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal text-gray-700 mb-6">核心产品</h2>
          <p className="text-xl text-gray-600">仿生微纳功能薄膜材料</p>
        </div>

        {/* Tab 内容区域 */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl">
           {/* Tab 标签（底部） */}
          <div className="flex bg-white border-t">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveId(product.id)}
                className={`flex-1 py-4 text-center font-medium transition-all duration-300 relative ${
                  activeId === product.id
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {product.title}
                {activeId === product.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></span>
                )}
              </button>
            ))}
          </div>
          {/* 内容区：左侧文字 + 右侧图片 */}
          <div className="flex flex-col lg:flex-row items-stretch h-auto lg:h-96">
            {/* 左侧：文字内容 */}
            <div className="lg:w-1/2 w-full p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{activeProduct.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{activeProduct.description}</p>

              <ul className="space-y-2">
                {activeProduct.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* 右侧：产品图片 */}
            <div className="lg:w-1/2 w-full h-64 lg:h-auto">
              <img
                src={activeProduct.backgroundImage}
                alt={activeProduct.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default CoreProducts;