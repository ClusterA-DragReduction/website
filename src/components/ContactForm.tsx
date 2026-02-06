import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { sendToDingTalk } from '../lib/dingTalkService';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const name = watch('name', '');
  const email = watch('email', '');
  const phone = watch('phone', '');
  const message = watch('message', '');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const success = await sendToDingTalk(data);

      if (success) {
        setSubmitStatus('success');
        setSubmitMessage('提交成功！您的信息已发送到钉钉群。');
        reset();
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('提交失败，请稍后再试或直接联系我们。');
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('提交错误:', error);
      setSubmitStatus('error');
      setSubmitMessage('提交失败，请稍后再试或直接联系我们。');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl"
    >
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            联系我们
          </h2>
          <p className="text-white/70 text-lg">
            我们期待与您的每一次交流
          </p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-green-100">{submitMessage}</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <span className="text-red-100">{submitMessage}</span>
          </div>
        )}

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white/90 text-sm font-medium">
                姓名 <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-white/50" />
                </div>
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: '请输入您的姓名',
                    minLength: { value: 2, message: '姓名至少需要2个字符' }
                  })}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-white/20'
                  }`}
                  placeholder="请输入您的姓名"
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-white/90 text-sm font-medium">
                邮箱 <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-white/50" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: '请输入您的邮箱',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: '请输入有效的邮箱地址'
                    }
                  })}
                  className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500/50 focus:ring-red-500' : 'border-white/20'
                  }`}
                  placeholder="请输入您的邮箱"
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-white/90 text-sm font-medium">
              电话 <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-white/50" />
              </div>
              <input
                id="phone"
                type="tel"
                {...register('phone', {
                  required: '请输入您的电话号码',
                  pattern: {
                    value: /^[\d\s\-+]{7,20}$/,
                    message: '请输入有效的电话号码'
                  }
                })}
                className={`w-full pl-10 pr-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500/50 focus:ring-red-500' : 'border-white/20'
                }`}
                placeholder="请输入您的电话号码"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-white/90 text-sm font-medium">
              留言内容 <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <textarea
                id="message"
                rows={5}
                {...register('message', {
                  required: '请输入留言内容',
                  minLength: { value: 10, message: '留言内容至少需要10个字符' }
                })}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                  errors.message ? 'border-red-500/50 focus:ring-red-500' : 'border-white/20'
                }`}
                placeholder="请输入您的留言内容..."
              />
            </div>
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              isSubmitting
                ? 'bg-white/10 text-white/50 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25'
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                提交中...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                提交留言
              </>
            )}
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Mail className="w-4 h-4 text-blue-400" />
              </div>
              <span>support@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Phone className="w-4 h-4 text-purple-400" />
              </div>
              <span>+86 123 4567 8900</span>
            </div>
          </div>
        </div>
      </form>
  );
};

export default ContactForm;
