// src/components/Section.tsx （更语义化的名字）
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string;         // 背景色类名
  paddingY?: string;        // 垂直间距（可选）
  id?: string;              // 锚点跳转用
}

const Section: React.FC<SectionProps> = ({
  children,
  bgColor = 'bg-white',     // 默认白色背景
  paddingY = '',
  id
}) => {
  return (
    <section
      id={id}
      className={`${paddingY} relative overflow-hidden ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;