import React from 'react';
import { BookOpen, Sparkles, ShieldCheck, HelpCircle, GraduationCap, Percent, ShoppingBag, Send } from 'lucide-react';

export default function Features() {
  const steps = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'A Massa Perfeita',
      desc: 'Como assar pão de ló super aerado e pão de chocolate úmidos na medida certa. Esqueça bolos duros.'
    },
    {
      icon: <Percent className="w-5 h-5" />,
      title: 'Precificação Científica',
      desc: 'Inclui nossa planilha exclusiva de custos. Saiba até o último centavo de lucro líquido por unidade.'
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: 'Guia de Embalagens',
      desc: 'Os potes de vidro ou plástico que dão elegância e valorizam o seu trabalho para venda instantânea.'
    },
    {
      icon: <Send className="w-5 h-5" />,
      title: 'Atendimento do WhatsApp',
      desc: 'Roteiros de mensagens prontos para você mandar no WhatsApp de condomínios e receber pilhas de pedidos.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2 max-w-lg mx-auto">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#3e2723]" id="features-title">
          Tudo que você precisa em um só lugar
        </h3>
        <p className="text-sm text-zinc-500 font-normal">
          Criamos um método abrangente para garantir o seu sucesso mesmo se você for iniciante absoluta.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
        {steps.map((st, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-cream-200 shadow-xs flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition duration-200"
          >
            <div className="space-y-3">
              <div className="p-3 bg-rose-50 text-rose-700 rounded-xl w-fit">
                {st.icon}
              </div>
              <h4 className="font-extrabold text-[#3e2723] text-sm leading-tight">{st.title}</h4>
              <p className="text-xs text-[#5d4037] leading-relaxed font-normal">{st.desc}</p>
            </div>
            
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#e04b73] block mt-4">
              Módulo {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
