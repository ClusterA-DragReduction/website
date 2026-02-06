import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
  image: string;
}

const testimonials = [
  {
    content: "芯柔微纳的仿生微纳功能薄膜材料在我们的高铁项目中表现出色，显著降低了空气阻力，为我们的节能减排目标做出了重要贡献。他们的技术创新能力令人印象深刻。",
    author: "张总",
    company: "中国铁路科技创新中心",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "作为无人机制造商，我们一直在寻找高效的防除冰解决方案。芯柔微纳的产品完美解决了我们在极寒环境下的运营难题，大大提升了我们的产品竞争力。",
    author: "李工程师",
    company: "航空科技有限公司",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    content: "芯柔微纳的技术团队专业性强，产品性能优异。他们的微纳结构技术在我们的风电设备上的应用，有效提升了设备效率，降低了维护成本。",
    author: "王总监",
    company: "新能源科技集团",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ content, author, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative">
      <div className="absolute top-6 left-6 text-primary-200">
        <Quote size={48} />
      </div>
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 text-lg italic">{content}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={author} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{author}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">客户评价</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说，这些真实的反馈是我们成长的动力。
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <Testimonial
                    content={testimonial.content}
                    author={testimonial.author}
                    company={testimonial.company}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-primary-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -left-4 sm:-left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 sm:-right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;