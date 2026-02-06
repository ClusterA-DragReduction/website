import React from 'react';

const Culture: React.FC = () => {
  // 企业文化数据
  const values = [
    {
      title: '责任',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.165-2.052-.48-3.016z" />
        </svg>
      ),
      content: '以西北工业大学“为国铸剑”之精神作为企业每位成员的内驱力，敢于担当，攻坚克难。',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: '守信',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0h-8v0z" />
        </svg>
      ),
      content: '以契约精神约束自我，对自己或他人做出的承诺负责，言行一致，说到做到。',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: '协同',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      content: '以“共享、共担、共识”作为团队合作与企业发展的基石，每位成员要有协作意识、大局意识。',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: '共赢',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-8 8" />
        </svg>
      ),
      content: '构建股东、员工、上下游产业生态圈合作共赢的命运共同体。',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
    },
  ];

  return (
    <section id="culture" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* 标题 */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-700 mb-4">核心价值观</h2>
          <p className="text-xl text-gray-600">责任 · 守信 · 协同 · 共赢</p>
        </div>

        {/* 四项价值观卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${item.bg}`}
            >
              <div className={`p-3 rounded-xl w-fit mb-5 ${item.color} ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className={`text-2xl font-semibold ${item.color} mb-4`}>{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;