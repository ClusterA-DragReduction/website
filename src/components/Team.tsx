import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: '何洋',
      title: '董事长',
      description: '西北工业大学教授，在微纳功能材料领域拥有深厚的研究积累和创新成果。主持多项国家级科研项目，发表高水平学术论文数十篇，为团队提供强大的技术支持和学术指导。',
      image: '../team/img-team.png'
    },
    {
      name: '机电学院研发团队',
      title: '技术研发核心',
      description: '由多位博士、硕士研究生组成的专业研发团队，专注于微纳功能材料的开发与应用研究。团队成员均具有扎实的理论基础和丰富的实践经验，致力于前沿技术的突破和创新。',
      image: '../team/img-dev.png'
    },
    {
      name: '西工大校友经管团队',
      title: '运营管理专家',
      description: '由西北工业大学优秀校友组成的经营管理团队，拥有丰富的市场运营和企业管理经验。团队成员具备深厚的行业洞察力，致力于将创新技术转化为市场价值。',
      image: '../team/img-hezuo.png'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-700 mb-6">核心团队</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
         专业创新的技术团队与丰富管理经验的经管团队
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {member.name === '何洋' ? (
                    <a
                      href="https://baike.baidu.com/item/%E4%BD%95%E6%B4%8B/19435256?fromModule=search-result_lemma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 transition-colors duration-300"
                    >
                      {member.name}
                    </a>
                  ) : (
                    member.name
                  )}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;