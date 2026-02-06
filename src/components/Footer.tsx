// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 四列布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-sm">
          
          {/* 第一列：关于我们 */}
          <div>
            <h3 className=" font-semibold mb-4 text-black">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  公司简介
                </a>
              </li>
              <li>
                <a href="#culture" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  企业文化
                </a>
              </li>
              <li>
                <a href="/aboutus" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  核心团队
                </a>
              </li>
            </ul>
          </div>

          {/* 第二列：产品与应用 */}
          <div>
            <h3 className=" font-semibold mb-4 text-black">产品与应用</h3>
            <ul className="space-y-2">
              <li>
                <a href="#bio-mimic-film" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  仿生减阻薄膜
                </a>
              </li>
              <li>
                <a href="#ice-repellent-film" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  微纳疏冰薄膜
                </a>
              </li>
              <li>
                <a href="#applications" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  应用场景
                </a>
              </li>
            </ul>
          </div>

          {/* 第三列：联系方式 */}
          <div>
            <h3 className="font-semibold mb-4 text-black">联系我们</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p>陕西省西安市碑林区友谊西路127号 611 幢</p>
              <p>西工大创新科技大楼B座 4505 室</p>
              <p className="mt-2">📞 <span className="hover:underline">+86 186 0155 6375</span></p>
              <p>✉️ <a href="mailto:kevin.pan@siromems.com" className="hover:underline hover:text-blue-600">kevin.pan@siromems.com</a></p>
            </div>
          </div>

          {/* 第四列：关注我们 */}
          <div>
            <h3 className=" font-semibold mb-4 text-black text-center">关注我们</h3>
            <div className="text-center">
              <div className="inline-block p-1 bg-white border border-gray-300 rounded-lg mb-2 shadow-sm">
                <img 
                  src="../images/wechatcode.jpg" 
                  alt="微信公众号二维码" 
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
              <p className="text-gray-500 text-xs">扫码关注微信公众号</p>
            </div>
          </div>

        </div>

        {/* 版权信息 */}
        <div className="pt-8 border-t border-gray-200 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {currentYear} 西安芯柔微纳科技. 保留所有权利.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    使用条款
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    网站地图
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;