
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // 客户案例数据 - 添加背景图片URL
  const customerCases = [
    {
      industry: "高铁",
      logo: "https://zgh.com/wp-content/uploads/zgh_new_logo_2.jpg",
      name: "中国中车",
      quote: "该系统显著提升了列车运行的安全性和维护效率，故障预警准确率达到98%以上。",
      title: "技术总监 张伟",
      rating: 5,
      bgImage: "https://placehold.co/600x400/1e40af/ffffff?text=High-Speed+Rail+Technology",
    },
    {
      industry: "航空",
      logo: "https://placehold.co/120x40/059669/ffffff?text=AVIC&font=montserrat",
      name: "中国航空工业集团",
      quote: "在极端环境下依然保持稳定监测，为飞行安全提供了强有力的技术支撑。",
      title: "研发主管 李强",
      rating: 5,
      bgImage: "https://placehold.co/600x400/047857/ffffff?text=Aerospace+Engineering",
    },
    {
      industry: "汽车",
      logo: "https://placehold.co/120x40/9333ea/ffffff?text=BYD&font=montserrat",
      name: "吉利汽车",
      quote: "智能感知系统帮助我们实现了车辆状态的实时监控，大幅降低了运维成本。",
      title: "智能网联负责人 王芳",
      rating: 4,
      bgImage: "https://placehold.co/600x400/7c3aed/ffffff?text=Smart+Automotive",
    },
    {
      industry: "船舶",
      logo: "https://placehold.co/120x40/ea580c/ffffff?text=CSIC&font=montserrat",
      name: "中国船舶集团",
      quote: "海洋环境下的长期稳定性表现优异，是我们选择该系统的重要原因。",
      title: "项目总工程师 刘明",
      rating: 5,
      bgImage: "https://placehold.co/600x400/ea580c/ffffff?text=Marine+Engineering",
    },
  ];

  // Logo 墙数据
  const logoWall = [
    "https://ts2.tc.mm.bing.net/th/id/OIP-C.QQ3UZ9tILzySMsQpgSMxUQHaFF?w=200&h=200&c=12&rs=1&p=0&o=6&dpr=2&pid=23.1",
    "https://ts2.tc.mm.bing.net/th/id/OIP-C.QQ3UZ9tILzySMsQpgSMxUQHaFF?w=200&h=200&c=12&rs=1&p=0&o=6&dpr=2&pid=23.1",
    "https://ts2.tc.mm.bing.net/th/id/OIP-C.QQ3UZ9tILzySMsQpgSMxUQHaFF?w=200&h=200&c=12&rs=1&p=0&o=6&dpr=2&pid=23.1",
    "https://ts2.tc.mm.bing.net/th/id/OIP-C.QQ3UZ9tILzySMsQpgSMxUQHaFF?w=200&h=200&c=12&rs=1&p=0&o=6&dpr=2&pid=23.1",
    "https://ts2.tc.mm.bing.net/th/id/OIP-C.QQ3UZ9tILzySMsQpgSMxUQHaFF?w=200&h=200&c=12&rs=1&p=0&o=6&dpr=2&pid=23.1",
    "https://ts1.tc.mm.bing.net/th/id/OIP-C.FyRPrqTrXv84J2ge0l2ZVQHaFj?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    "https://ts1.tc.mm.bing.net/th/id/OIP-C.FyRPrqTrXv84J2ge0l2ZVQHaFj?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    "https://ts1.tc.mm.bing.net/th/id/OIP-C.FyRPrqTrXv84J2ge0l2ZVQHaFj?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    "https://ts1.tc.mm.bing.net/th/id/OIP-C.FyRPrqTrXv84J2ge0l2ZVQHaFj?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
    "https://ts1.tc.mm.bing.net/th/id/OIP-C.FyRPrqTrXv84J2ge0l2ZVQHaFj?w=242&h=211&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
  ];

  const itemWidth = 140;
  const totalWidth = logoWall.length * itemWidth;

  // 启动自动滚动（无缝从左向右）
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        let newPos = prev + 1;
        if (newPos >= totalWidth) {
          newPos = -totalWidth;
        }
        return newPos;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [totalWidth]);

  return (
    <div className="min-h-screen bg-white">
      {/* 客户案例模块 */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">客户案例</h2>
            <p className="text-gray-600 text-lg">来自行业领军企业的认可与信赖</p>
          </div>

          {/* 四个客户块，使用背景图片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {customerCases.map((customer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 overflow-hidden"
              >
                {/* 背景图片 */}
                <div 
                  className="h-20 bg-cover bg-center bg-no-repeat rounded-t-lg mb-4"
                  
                >
                  
                </div>

                {/* 客户Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={customer.logo}
                    alt={`${customer.name} Logo`}
                    className="h-10 object-contain"
                  />
                </div>

                {/* 客户名称 */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{customer.name}</h3>

                {/* 评价 */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-gray-300 mb-2 mx-auto" />
                  <p className="text-gray-600 text-sm leading-relaxed text-center italic">
                    "{customer.quote}"
                  </p>
                </div>

                {/* 用户title */}
                <p className="text-gray-500 text-xs text-center">{customer.title}</p>
              </div>
            ))}
          </div>

          {/* 滚动Logo墙 */}
          <div className="bg-gray-50 py-8 px-4 rounded-xl">
            <div className="overflow-hidden whitespace-nowrap">
              <div
                className="inline-block"
                style={{
                  transform: `translateX(${scrollPosition}px)`,
                  whiteSpace: 'nowrap',
                }}
              >
                {logoWall.concat(logoWall).map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt="partner logo"
                    className="inline-block h-12 mx-8 grayscale hover:grayscale-0 transition-all duration-300 align-top"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
