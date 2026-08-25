import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="text-center space-y-2 max-w-lg mx-auto">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3e2723]" id="faq-section-title">Perguntas Frequentes</h3>
        <p className="text-xs text-zinc-500 font-normal">Tire todas as suas dúvidas sobre o e-book, entrega do material e suporte.</p>
      </div>

      <div className="space-y-3 pt-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-cream-200 shadow-xs overflow-hidden transition duration-150"
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="w-full text-left px-5 py-4 font-bold text-[#3e2723] text-sm flex justify-between items-center bg-cream-50/50 hover:bg-cream-100/30 transition cursor-pointer"
              >
                <span className="pr-4">{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-amber-700 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 py-4 border-t border-zinc-100 bg-white text-xs text-[#5d4037] leading-relaxed font-normal animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
