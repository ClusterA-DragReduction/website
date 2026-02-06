import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface KnowledgeBase {
  responses: { [key: string]: string };
  defaultResponse: string;
  welcomeMessage: string; // 新增：欢迎语
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [knowledgeBase, setKnowledgeBase] = useState<KnowledgeBase | null>(null);

  // 加载知识库
  useEffect(() => {
    fetch('/data/knowledgeBase.json')
      .then((response) => response.json())
      .then((data) => {
        setKnowledgeBase(data);
        // 注意：此时不要在这里发欢迎语，因为 isOpen 还没 true
      })
      .catch((error) => console.error('Error loading knowledge base:', error));
  }, []);

  // 当聊天框打开 && 有知识库 && 尚未发送过欢迎语时，发送欢迎语
  useEffect(() => {
    if (isOpen && knowledgeBase && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now(),
        text: knowledgeBase.welcomeMessage || '您好！欢迎咨询芯柔微纳科技，请问有什么可以帮您？',
        isBot: true,
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, knowledgeBase, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || !knowledgeBase) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
    };
    setMessages((prev) => [...prev, userMessage]);

    // 模拟机器人回复
    const botResponse = await simulateBotResponse(input);
    const botMessage: Message = {
      id: Date.now() + 1,
      text: botResponse,
      isBot: true,
    };
    setMessages((prev) => [...prev, botMessage]);
    setInput('');
  };

  const simulateBotResponse = async (userInput: string): Promise<string> => {
    if (!knowledgeBase) return '系统正在初始化，请稍后再试...';

    await new Promise((resolve) => setTimeout(resolve, 1000)); // 模拟延迟

    for (const [keyword, response] of Object.entries(knowledgeBase.responses)) {
      if (userInput.includes(keyword)) {
        return response;
      }
    }

    return knowledgeBase.defaultResponse;
  };

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="打开聊天机器人"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-full">
          {/* 聊天头部 */}
          <div className="bg-primary-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">智能助手</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="关闭聊天窗口"
            >
              <X size={20} />
            </button>
          </div>

          {/* 消息列表 */}
          <div className="h-96 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-primary-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* 输入区域 */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="请输入您的问题..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSend}
                className="bg-primary-600 hover:bg-primary-700 text-white rounded-lg px-4 py-2 transition-colors"
                aria-label="发送消息"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;