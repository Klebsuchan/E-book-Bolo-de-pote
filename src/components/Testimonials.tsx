import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2 max-w-lg mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 rounded-full font-bold text-[10px] uppercase tracking-wider">
          <Star className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
          <span>Transformação Real</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3e2723]" id="testimonials-title">Quem provou, aprovou!</h3>
        <p className="text-sm text-zinc-500 font-normal">Veja como pessoas comuns saíram do zero para criar negócios de sucesso em casa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl border border-cream-200 p-5 shadow-xs relative flex flex-col justify-between space-y-4 hover:border-amber-300 transition"
          >
            {/* Top decorative quote */}
            <MessageSquareQuote className="absolute top-4 right-4 w-10 h-10 text-cream-100/60 z-0 pointer-events-none" />

            <div className="space-y-3 relative z-10">
              {/* Star line */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-[#5d4037] leading-relaxed italic font-normal">
                "{t.comment}"
              </p>
            </div>

            {/* Profile info footer */}
            <div className="flex items-center gap-3 pt-3 border-t border-zinc-100 relative z-10">
              <img
                src={t.avatar}
                alt={t.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border-2 border-amber-100 shrink-0"
              />
              <div className="space-y-1">
                <h5 className="font-extrabold text-xs text-[#3e2723]">{t.name}</h5>
                <p className="text-[10px] text-zinc-400 font-medium">{t.location} • {t.role}</p>
                <span className="inline-block text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  {t.achievement}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
