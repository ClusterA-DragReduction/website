import { useState, useRef } from "react";

export default function NewsTab() {
  const [activeTab, setActiveTab] = useState<"公司新闻" | "行业动态" | "技术前沿" | "媒体报道">("公司新闻");

   const newsData = {
    "公司新闻": [
      {
        id: 0,
        title: "2026年1月16日双喜同庆！",
        date: "2026-01-16",
        imageUrl: "https://placehold.co/400x300/9333ea/ffffff?text=News",
        URL:"https://mp.weixin.qq.com/s/5pbfqaW1xeoMkrBlVptVZQ",
        excerpt: "双喜同庆！“极端环境微纳制造与测试平台”正式揭牌！西安芯柔微纳科技有限公司盛大启航！"
      },
      {
        id: 1,
        title: "11月22日受邀参加结冰与防除冰分会年度会议",
        date: "2025-11-22",
        imageUrl: "https://placehold.co/400x300/1e40af/ffffff?text=News",
        URL:"https://mp.weixin.qq.com/s/yPSNhIjI50tvH0Lf6twV5Q",
        excerpt: "中国航空学会结冰与防除冰分会2025年度工作会议在西北工业大学友谊校区东会议室顺利召开"
      },
      {
        id: 2,
        title: "2025延安团建主题活动：追寻红色足迹 凝聚奋进力量",
        date: "2025-11-07",
        imageUrl: "https://placehold.co/400x300/059669/ffffff?text=News",
        URL:"https://mp.weixin.qq.com/s/GbHmZGl3qktD25FJgAWgEg",
        excerpt: "2025年11月7日—9日，西安芯柔微纳科技有限公司组织全体员工赴革命圣地延安，开展团建活动"
      },
      {
        id: 3,
        title: "芯柔微纳公司完成数千万天使轮投资",
        date: "2025-07-03",
        imageUrl: "https://placehold.co/400x300/9333ea/ffffff?text=News",
        URL:"https://mp.weixin.qq.com/s/bAnwzo3wmd5Iqa-DSRd7-Q",
        excerpt: "2025年7月3日上，陈建平先生与西安芯柔微纳科技有限公司投资签"
      },
      {
        id: 4,
        title: "芯柔微纳科技组织全体员工观看阅兵仪式",
        date: "2025-09-03",
        imageUrl: "https://placehold.co/400x300/1e40af/ffffff?text=News",
        URL:"https://mp.weixin.qq.com/s/mCFhR6d3E9krYjfde_AFZg",
        excerpt: "芯柔微纳科技有限公司组织全体员工今日上午观看阅兵仪式直播"
      },
      {
        id: 5,
        title: "媒体报道：被主流媒体报道，产生了广泛的影响",
        date: "2025-05-31",
        imageUrl: "https://placehold.co/400x300/9333ea/ffffff?text=News",
        excerpt: "媒体报道：被人民日报、央视新闻网等媒体报道，产生了广泛的社会影响"
      }
    ],
   
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (delta: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="mc_section mc_a1s1 py-12">
      <div className="mc_cont100 max-w-7xl mx-auto px-4">
        <div className="mc_a1s1_wrap">
          <div className="mc_a1_hd flex justify-between items-center mb-6 md:mb-8">
            <h3 className="mc_title40 mc_a1s1_title text-2xl font-bold text-gray-800">
              新闻动态
            </h3>
            {/* 可选：添加左右导航按钮（桌面端显示） */}
            <div className="hidden md:flex space-x-2">
              <button
                onClick={() => scroll(-320)}
                className="p-2 rounded-full bg-white border hover:bg-gray-50 shadow-sm"
                aria-label="上一条"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll(320)}
                className="p-2 rounded-full bg-white border hover:bg-gray-50 shadow-sm"
                aria-label="下一条"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mc_a1_bd overflow-x-auto scrollbar-hide" ref={scrollRef}>
            <div className="mc_a1s1_list flex gap-6 pb-2 w-max"> {/* 关键：flex + w-max */}
              {newsData[activeTab].map((news) => (
                <div
                  key={news.id}
                  className="mc_a1s1_li group flex-shrink-0 w-80 md:w-96" // 固定宽度，禁止 shrink
                >
                  <a
                    href={news.URL || "#"}
                    target={news.URL ? "_blank" : undefined}
                    rel={news.URL ? "noopener noreferrer" : undefined}
                    className="mc_a1s1_a block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 h-full"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="mc_a1s1_txtbox p-5 flex-1">
                        <div className="mc_a1s1_date flex items-center text-gray-500 text-sm mb-3">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{news.date}</span>
                        </div>
                        <h4 className="mc_a1s1_txt text-gray-800 font-medium mb-3 leading-relaxed line-clamp-2">
                          {news.title}
                        </h4>
                        {news.excerpt && (
                          <p className="text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                        )}
                      </div>
                      <div className="mc_a1s1_imgbox mc_list_imgbox md:w-32 lg:w-40 flex-shrink-0">
                        <div className="relative h-full min-h-24"> {/* 保证最小高度 */}
                          <img 
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LWZhbWlseT0iQXJpYWwsIGhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2QzZDNkMyI+SW1hZ2U8L3RleHQ+PC9zdmc+" 
                            alt="" 
                            className="mc_list_png absolute inset-0 w-full h-full object-cover opacity-0"
                          />
                          <img 
                            src={news.imageUrl} 
                            alt={news.title} 
                            className="mc_list_img w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* 移动端提示（可选） */}
          <p className="mt-4 text-gray-500 text-sm text-center md:hidden">
            ← 左右滑动查看更多 →
          </p>
        </div>
      </div>

      {/* 隐藏滚动条（兼容主流浏览器） */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE/Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;           /* Chrome/Safari */
        }
      `}</style>
    </section>
  );
}