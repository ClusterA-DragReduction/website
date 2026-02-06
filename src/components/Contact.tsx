import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/50 to-purple-900/50" />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            与我们联系
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            无论您有什么问题或需求，我们都随时准备为您提供专业支持和解决方案
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default Contact;
