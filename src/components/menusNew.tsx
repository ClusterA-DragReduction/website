
import React, { useState } from 'react';

// 定义菜单项类型
interface MenuItem {
  id: string;
  label: string;
  url?: string;
  children?: Omit<MenuItem, 'children'>[];
}

// 菜单数据
const menuData: MenuItem[] = [
   {
    id: 'about',
    label: '关于芯柔微纳',
    url:'#about'
    
  },
   {
    id: 'culture',
    label: '企业文化',
    url:'#culture'
    
  },
  // {
  //   id: 'products',
  //   label: '产品',
  //   children: [
  //     { id: 'product1', label: '减阻', url: '../products/Products.tsx' },
  //     { id: 'product2', label: '防除冰', url: '/products/2' },
  //     { id: 'product3', label: '传感器', url: '/products/3' },
  //   ],
  // },
  {
    id: 'products',
    label: '核心产品',
    url:'#product'
    
  },
  {
    id: 'teams',
    label: '核心团队',
    url: '#team',
  },
  {
    id: 'scenario',
    label: '应用领域',
    url: '#scenario',    
  },
  {
    id: 'award',
    label: '荣誉奖项',
    url: '#awards',   
  },
    {
    id: 'news',
    label: '新闻动态',
    url: '#news',   
  }
 
];

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');

  // 模拟页面跳转
  const navigate = (url: string) => {
    setCurrentPath(url);
    console.log('导航到:', url);
  };

  const handleItemClick = (item: Omit<MenuItem, 'children'>) => {
    if (item.url) {
      navigate(item.url);
      setActiveMenu(null); // 点击后关闭下拉菜单
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const isCurrentPath = (url?: string) => {
    if (!url) return false;
    return currentPath === url;
  };

  return (
    <div className="flex flex-col">
      {/* 顶部导航栏 - 透明背景 */}
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm text-gray-800 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 网站 Logo/名称 - 可点击跳转首页 */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <img 
                src='/siro_logo.ico' 
                alt="芯柔微纳 logo" 
                style={{ maxWidth: '20%' }} 
                className="scale-3 origin-center hover:scale-105 transition-transform duration-200" 
              />
              <h1 className="text-x2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mr-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
                芯柔微纳
              </h1>
            </div>

            {/* 导航菜单 */}
            <nav className="flex space-x-1">
              {menuData.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveMenu(item.id)}
                  onMouseLeave={() => item.children && setActiveMenu(null)}
                >
                  {item.children ? (
                    // 有子菜单的项 - 下拉菜单
                    <div className="relative">
                      <button
                        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 ${
                          isCurrentPath(item.children[0]?.url) ? 'text-blue-600 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                            activeMenu === item.id ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* 二级菜单下拉 */}
                      {activeMenu === item.id && (
                        <div 
                          className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 animate-slideDown"
                        >
                          <div className="py-1">
                            {item.children.map((child) => (
                              <button
                                key={child.id}
                                onClick={() => handleItemClick(child)}
                                className={`flex items-center w-full text-left px-4 py-2 text-sm transition-all duration-200 ${
                                  isCurrentPath(child.url)
                                    ? 'text-blue-600 font-medium border-r-2 border-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                              >
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0"></span>
                                {child.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // 没有子菜单的项
                    <button
                      onClick={() => handleItemClick(item)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 ${
                        isCurrentPath(item.url)
                          ? 'text-gray-700 '
                          : 'text-gray-700 hover:scale-105'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

// 添加CSS动画
const styles = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slideDown {
  animation: slideDown 0.2s ease-out;
}
`;

// 样式注入组件
const StyleInjector: React.FC = () => {
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

// 默认导出组件
const App = () => {
  return (
    <>
      <StyleInjector />
      <Menu />
      
    </>
  );
};

export default App;
