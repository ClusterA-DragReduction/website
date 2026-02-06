import { useState } from "react";
import { Train, Plane, Car, Ship } from "lucide-react";

export default function App() {
  const applicationAreas = [
    {
      title: "高铁交通",
      description: "为高速铁路系统提供智能减阻降噪，实现节能减排的经济效益。",
      icon: <Train className="w-7 h-7 text-blue-600" />,
      color: "bg-blue-500",
      image: "../images/img-sc1.png"
    },
    {
      title: "航空航天",
      description: "应用于航空器进行极端天气防除冰应用，保护安全飞行及绿色出行。",
      icon: <Plane className="w-7 h-7 text-emerald-600" />,
      color: "bg-emerald-500",
      image: "../images/img-sc2.png",
    },
    {
      title: "汽车",
      description: "赋能汽车，实现汽车节能，隔热，从而打造舒适驾乘体验。",
      icon: <Car className="w-7 h-7 text-purple-600" />,
      color: "bg-purple-500",
      image: "../images/img-sc4.png",
    },
    {
      title: "船舶",
      description: "用于远洋船舶设备防止被腐蚀等，保障航行安全与设备可靠性。",
      icon: <Ship className="w-7 h-7 text-orange-600" />,
      color: "bg-orange-500",
      image: "../images/img-sc3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" ">
      {/* Hero Section */}
      <section id="scenario" className="py-8 px-6">
        <h2 className="text-4xl font-normal text-gray-700 mb-6 text-center">
          应用领域
        </h2>
        
        <div className="max-w-7xl mx-auto  overflow-hidden shadow">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Tabs */}
            <div className="w-full md:w-1/3 bg-gray-50 flex flex-col">
              {applicationAreas.map((area, index) => (
                <button
                  key={index}
                  className={`flex-1 p-5 flex items-center space-x-4 border-b border-gray-200 transition-all duration-200 hover:bg-white text-center ${
                    activeIndex === index
                      ? "bg-white border-r-2 border-r-gray-800 border-b-0 md:border-b"
                      : "hover:opacity-90"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* 只保留 icon，移除背景色和外边框 */}
                  <div className="flex-shrink-0">
                    {area.icon}
                  </div>
                  <h3
                    className={`text-lg font-normal ${
                      activeIndex === index ? "text-gray-800" : "text-gray-600"
                    }`}
                  >
                    {area.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Right Side - Content & Image */}
            <div className="w-full md:w-2/3 p-8 flex flex-col">
              <div className="space-y-6 flex-1 flex flex-col">
                <p className="text-xl font-normal text-gray-800">
                  {applicationAreas[activeIndex].title}
                </p>

                <p className="text-gray-600 text-base md:text-lg flex-1 leading-relaxed">
                  {applicationAreas[activeIndex].description}
                </p>

                {/* Image - 增加高度 */}
                <div className="mt-6 h-80 md:h-96 rounded-none overflow-hidden shadow">
                  <img
                    src={applicationAreas[activeIndex].image}
                    alt={applicationAreas[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}