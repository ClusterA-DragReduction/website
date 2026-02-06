// src/components/Menu.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// 定义菜单项类型
interface MenuItem {
  id: string;
  label: string;
  url: string;
  isExternal?: boolean;
}

// 菜单数据
const menuData: MenuItem[] = [
  {
    id: 'about',
    label: '首页',
    url: '/',
    isExternal: true,
  },
  {
    id: 'award',
    label: '关于我们',
    url: '/aboutus',
    isExternal: true,
  },
  {
    id: 'products',
    label: '核心产品',
    url: '#products',
  },
  {
    id: 'scenario',
    label: '应用领域',
    url: '#scenario',
  },
  {
    id: 'news',
    label: '新闻动态',
    url: '#news',
  },
  {
    id: 'contact',
    label: '联系我们',
    url: '/contactus',
    isExternal: true,
  },
];

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // 控制移动端菜单展开
  const [activeSection, setActiveSection] = useState<string>('about');

  const navigate = useNavigate();
  const location = useLocation();

  // 处理菜单点击
  const handleItemClick = (item: MenuItem) => {
    if (item.isExternal) {
      navigate(item.url);
    } else {
      if (location.pathname !== '/') {
        navigate('/' + item.url);
      } else {
        const targetId = item.url.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    }
    setActiveMenu(null);
    setMobileMenuOpen(false); // 点击后关闭移动端菜单
  };

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const item of menuData) {
        if (item.isExternal || !item.url.startsWith('#')) continue;
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);

  // 更新 activeSection
  useEffect(() => {
    if (location.pathname === '/aboutus') {
      setActiveSection('award');
    } else if (location.pathname === '/' && location.hash) {
      const hashId = location.hash.slice(1);
      const validIds = menuData.map((m) => m.id);
      if (validIds.includes(hashId)) {
        setActiveSection(hashId);
      }
    } else {
      setActiveSection('about');
    }
  }, [location]);

  // Logo 点击
  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm text-gray-800 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div onClick={handleLogoClick} className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center">
              <img
                src="/siro_logo.ico"
                alt="芯柔微纳 logo"
                style={{ maxWidth: '20%' }}
                className="scale-3 origin-center hover:scale-105 transition-transform duration-200"
              />
              <h1 className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mr-2 hover:scale-105 transition-transform duration-200">
                芯柔微纳
              </h1>
            </Link>
          </div>

          {/* 汉堡按钮（仅移动端显示） */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="切换菜单"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* 桌面端导航菜单（仅大屏显示） */}
          <nav className="hidden md:flex space-x-1">
            {menuData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                  ${
                    activeSection === item.id
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-700 hover:text-blue-600 hover:scale-105'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* 移动端下拉菜单 */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg mt-1 pb-3 animate-fadeIn">
            {menuData.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`block w-full text-left px-4 py-3 text-base font-medium
                  ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

// CSS 动画注入
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out;
}
`;

const StyleInjector: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};

// 默认导出
const App = () => {
  return (
    <>
      <StyleInjector />
      <Menu />
    </>
  );
};

export default App;