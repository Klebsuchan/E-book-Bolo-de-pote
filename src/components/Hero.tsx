import React from 'react';
import { BookOpen, Sparkles, TrendingUp, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onUnlockClick: () => void;
  onBrowseDemoClick: () => void;
  isUnlocked: boolean;
}

export default function Hero({ onUnlockClick, onBrowseDemoClick, isUnlocked }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-cream-100 to-cream-50">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Section */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-semibold text-xs tracking-wider uppercase shadow-xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span>O Guia Secreto de Confeitaria em Casa</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#3e2723] font-bold leading-tight tracking-tight">
              Aprenda a Faturar <br className="hidden sm:inline" />
              <span className="text-amber-700 underline decoration-amber-300 decoration-wavy underline-offset-4">R$ 2.000 a R$ 5.000</span> <br />
              com Bolos de Pote Gourmet
            </h1>
            
            <p className="text-base sm:text-lg text-[#5d4037] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              O manual completo passo-a-passo para você conquistar sua independência financeira produzindo as receitas mais vendidas do Brasil diretamente do conforto da sua própria cozinha.
            </p>

            {/* Feature Cards Grid (Mini) */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-2">
              <div className="flex items-start gap-2.5 text-left bg-white p-3 rounded-xl border border-cream-200 shadow-xs">
                <div className="p-1.5 bg-red-50 text-red-600 rounded-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3e2723]">Massas Úmidas</h4>
                  <p className="text-[10px] text-zinc-500">O segredo que derrete na boca.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-left bg-white p-3 rounded-xl border border-cream-200 shadow-xs">
                <div className="p-1.5 bg-amber-50 text-amber-600 rounded-md">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3e2723]">Calculadora Integrada</h4>
                  <p className="text-[10px] text-zinc-500">Lucros exatos por pote.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-left bg-white p-3 rounded-xl border border-cream-200 shadow-xs">
                <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3e2723]">Receitas de Ouro</h4>
                  <p className="text-[10px] text-zinc-500">Morangos, Ninho e mais.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-left bg-white p-3 rounded-xl border border-cream-200 shadow-xs">
                <div className="p-1.5 bg-teal-50 text-teal-600 rounded-md">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3e2723]">Etiquetas Prontas</h4>
                  <p className="text-[10px] text-zinc-500">Pronto para imprimir.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                id="btn-hero-unlock"
                onClick={onUnlockClick}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold shadow-md transition duration-200 cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                {isUnlocked ? 'Ir para Área do Aluno' : 'Garantir Acesso (Simulação Gratuita)'}
              </button>
              
              <button
                id="btn-hero-demo"
                onClick={onBrowseDemoClick}
                className="px-6 py-4 bg-white hover:bg-cream-100 text-amber-950 border border-cream-300 rounded-xl font-bold transition duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                Ver Grade de Receitas
              </button>
            </div>

            {/* Social Trust */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-zinc-500">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=64&h=64" alt="user" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" alt="user" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="user" referrerPolicy="no-referrer" />
              </div>
              <p className="font-medium text-[#5d4037]">
                Mais de <span className="font-bold text-amber-700">1.200 alunos</span> felizes no Brasil!
              </p>
            </div>
          </div>
          
          {/* Visual Book Section */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full px-4">
              {/* Splurge effect */}
              <div className="absolute inset-0 bg-radial-gradient from-amber-300/40 via-transparent to-transparent opacity-70 blur-2xl group-hover:scale-110 transition duration-300" />
              
              {/* E-book 3D Cover */}
              <div className="relative flex justify-center perspective-[1000px]">
                <div 
                  className="w-64 h-96 bg-amber-700 rounded-lg shadow-2xl relative select-none transform rotate-y-[-18deg] rotate-x-[5deg] hover:rotate-y-[-5deg] duration-500 origin-left border border-amber-800 flex flex-col justify-between p-6 text-white overflow-hidden"
                  style={{
                    boxShadow: '15px 15px 40px rgba(62,39,35,0.45), inset -5px 0px 20px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Gold margin/spine decoration on the side */}
                  <div className="absolute top-0 left-0 w-2.5 h-full bg-amber-900 border-r border-amber-500/30 shadow-inner" />
                  
                  {/* Cover Design */}
                  <div className="relative pl-3 flex flex-col h-full justify-between">
                    <div>
                      <p className="text-[10px] tracking-widest font-bold text-amber-300 uppercase">Guia de Negócio Lucrativo</p>
                      <h2 className="text-3xl font-serif text-amber-100 font-bold leading-tight mt-1.5 drop-shadow-sm">
                        BOLO DE POTE
                      </h2>
                      <p className="text-base font-medium text-cream-200 mt-1 italic tracking-wide">
                        Supremo Gourmet
                      </p>
                    </div>

                    <div className="my-auto self-center select-none text-7xl transform group-hover:scale-110 transition duration-300 py-4 filter drop-shadow-md">
                      🍰
                    </div>

                    <div className="border-t border-cream-200/20 pt-3 mt-auto">
                      <p className="text-[11px] text-cream-100 tracking-wide font-medium">Bônus Inclusos:</p>
                      <p className="text-[9px] text-cream-200 leading-snug">Calculadora Financeira & Etiquetas</p>
                      <p className="text-[9px] text-amber-300 font-bold mt-1 uppercase tracking-wider text-right">Por Kleber Camargo</p>
                    </div>
                  </div>
                </div>

                {/* Simulated book page edges (underneath) */}
                <div 
                  className="absolute right-0 top-1.5 w-6 h-[23.4rem] bg-zinc-100 rounded-r-sm z-[-1] border-y border-r border-zinc-300"
                  style={{
                    transform: 'translateX(5px) rotateY(15deg) translateZ(-8px)',
                    backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 40%, rgba(200,200,200,1) 100%)',
                    backgroundSize: '3px 100%',
                  }}
                />

                {/* Back of the book shadow */}
                <div className="absolute inset-0 bg-transparent shadow-neutral-700/60 shadow-xl blur-lg rounded-lg z-[-2] transform rotate-y-[-18deg] translate-x-3 pointer-events-none" />
              </div>

              {/* Floating review tags of gourmet products */}
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg border border-cream-100 max-w-[130px] hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="text-xs text-amber-900 font-bold block flex items-center gap-1">🌟 5.0 Estrelas</span>
                <span className="text-[10px] text-zinc-500">Massa fofa de verdade!</span>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-white px-3.5 py-2.5 rounded-lg shadow-lg border border-cream-100 hidden sm:block">
                <span className="text-xl font-bold text-amber-700 block">R$ 5.000 /mês</span>
                <span className="text-[10px] text-zinc-500">Potencial de Ganhos Reais</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
