import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* 背景渐变层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 标题部分 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-700 mb-6">关于我们</h2>
          <h4 className="text-xl font-normal text-gray-600">仿生微纳功能薄膜材料方案商</h4>
        </div>

        {/* 左右布局：7:3 比例 */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* 左侧：文字内容 - 占 70% */}
          <div className="lg:w-7/12 w-full ">
            <div className="text-lg bg-white/90  rounded-2xl p-8   transition-all duration-300 h-full">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6 ">
                  西安芯柔微纳科技有限公司成立于2025年5月，是西北工业大学科技成果转化的高科技企业，依托西北工业大学空天微纳系统教育部重点实验室。
                </p>
                <p className="text-gray-600 mb-6">
                  公司致力于仿生微纳功能薄膜材料的研发、生产和销售，所研发产品将广泛应用于高铁、飞机、风电及无人机的减阻和防除冰等领域，并与多个机构及企业达成合作意向。
                </p>
                <p className="text-gray-600 mb-0">
                  芯柔微纳将以“科技创新助力全球节能减排事业”为使命，以“责任 守信 协同 共赢”为核心价值观，努力成为国际领先、客户信赖的交通运输和新能源产业背后的隐形冠军。
                </p>
                
               
              </div>
            </div>
          </div>

          {/* 右侧：图片 - 占 30% */}
          <div className="lg:w-4/12 w-full mt-6 lg:mt-0 h-3">
            <div className="rounded-1xl overflow-hidden ">
              <img 
                src="../images/img-aboutus.jpg" 
                alt="公司技术应用场景" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;