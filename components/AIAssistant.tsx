
  import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, Sparkles } from 'lucide-react';
import { chatWithShivamAI } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hello! I'm Shivam's Neural Agent. Ask me anything about his projects, skills, or career journey from Mechatronics to CSE." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await chatWithShivamAI(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-8 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-110 transition-all group"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-darker-bg animate-pulse" />
        </button>
      ) : (
        <div className="w-80 md:w-96 glass-card rounded-2xl overflow-hidden shadow-2xl flex flex-col border-primary/40 animate-in fade-in zoom-in duration-300">
          <div className="bg-primary/10 p-4 border-b border-primary/20 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Sparkles className="text-primary w-5 h-5" />
              <span className="font-heading font-bold text-sm tracking-widest text-primary">NEURAL_AGENT_v3</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white"><X size={20}/></button>
          </div>

          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 font-body text-sm bg-darker-bg/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl ${m.role === 'user' ? 'bg-primary text-darker-bg font-medium rounded-tr-none' : 'glass-card border-white/5 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-card p-3 rounded-xl rounded-tl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span className="text-[10px] font-code opacity-50">PROCESSING...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 bg-dark-bg flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-primary text-darker-bg rounded-lg hover:bg-primary/80 transition-colors disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
