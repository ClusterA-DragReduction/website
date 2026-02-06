import React, { useState, useEffect } from 'react';
//import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './Navigation';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed w-full z-[999999] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md py-2' : 'bg-blue/80 backdrop-blur-lg py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          <div className="flex items-center z-[10000]">
            <Link href="#home" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <div className="flex items-center flex-shrink-0">
                <img 
                  src="/logo.png" 
                  alt="西安芯柔微纳科技" 
                  className="h-16 w-auto" 
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '首页' : <span className="text-white">首页</span>}</Link>
            <Link href="#services" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '产品' : <span className="text-white">服务</span>}</Link>
            <Link href="#services" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '应用领域' : <span className="text-white">服务</span>}</Link>
            <Link href="#about" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '研发' : <span className="text-white">关于我们</span>}</Link>
            <Link href="#team" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '客户案例' : <span className="text-white">团队</span>}</Link>
            <Link href="#testimonials" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '资料' : <span className="text-white">客户评价</span>}</Link>
            <Link href="#testimonials" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '服务与支持' : <span className="text-white">客户评价</span>}</Link>
            <Link href="#testimonials" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '新闻' : <span className="text-white">客户评价</span>}</Link>
            <Link href="#contact" className="text-gray-800 dark:text-white hover:text-primary-600 font-medium transition-all duration-200 hover:scale-105">{isScrolled ? '关于我们' : <span className="text-white">联系我们</span>}</Link>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-500 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="#home" onClick={toggleMenu} className="mobile-nav-link">首页</Link>
          <Link href="#services" onClick={toggleMenu} className="mobile-nav-link">核心技术</Link>
          <Link href="#services" onClick={toggleMenu} className="mobile-nav-link">应用领域</Link>
          <Link href="#services" onClick={toggleMenu} className="mobile-nav-link">应用领域</Link>
          <Link href="#services" onClick={toggleMenu} className="mobile-nav-link">服务</Link>
          <Link href="#about" onClick={toggleMenu} className="mobile-nav-link">关于我们</Link>
          <Link href="#team" onClick={toggleMenu} className="mobile-nav-link">团队</Link>
          <Link href="#testimonials" onClick={toggleMenu} className="mobile-nav-link">客户评价</Link>
          <Link href="#contact" onClick={toggleMenu} className="mobile-nav-link">联系我们</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;