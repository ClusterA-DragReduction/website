import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
    if (onClick) onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`text-gray-800 hover:text-primary-600 font-medium transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export const NavButton: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};