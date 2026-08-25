import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ChevronDown, 
  CheckCircle, 
  ChefHat, 
  TrendingUp, 
  Clock, 
  Award,
  ShieldCheck,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

import InteractiveCakeImage from './components/InteractiveCakeImage';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`${theme} min-h-screen text-gray-900 bg-white dark:bg-[#050505] dark:text-white font-sans selection:bg-[#D4AF37] selection:text-black transition-colors duration-300`}>
      {/* Header Container */}
      <div className="fixed top-0 w-full z-[60] flex flex-col shadow-sm">
        {/* Top Banner */}
        <div className="bg-[#D4AF37] text-black text-center py-2 px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <Clock className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
          <span>Faltam apenas 37 vagas com os bônus exclusivos!</span>
        </div>

        {/* Navigation */}
        <nav className="w-full bg-gray-50 dark:bg-[#0a0a0a] border-b border-[#D4AF37]/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37] to-[#F9E498] rounded-full flex items-center justify-center">
                <ChefHat className="w-4 h-4 text-black" />
              </div>
              <span className="font-serif italic text-xl tracking-tighter text-[#D4AF37]">Lucro no Pote</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#beneficios" className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-[#D4AF37] transition-colors font-bold">Benefícios</a>
              <div className="h-4 w-[1px] bg-white/10 dark:bg-white/10 bg-black/10"></div>
              <a href="#conteudo" className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-[#D4AF37] transition-colors font-bold">Conteúdo</a>
              <div className="h-4 w-[1px] bg-white/10 dark:bg-white/10 bg-black/10"></div>
              <a href="#faq" className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-[#D4AF37] transition-colors font-bold">Dúvidas</a>
              
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme} 
                className="ml-2 p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <a href="#checkout" className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-black font-bold uppercase tracking-widest text-[10px] rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(212,175,55,0.3)] ml-2">
                Comprar Agora
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button 
                className="text-[#D4AF37]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-gray-50 dark:bg-[#0a0a0a] border-t border-[#D4AF37]/10 overflow-hidden"
            >
              <div className="flex flex-col px-8 py-6 space-y-4">
                <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-[#D4AF37] font-bold">Benefícios</a>
                <a href="#conteudo" onClick={() => setIsMenuOpen(false)} className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-[#D4AF37] font-bold">Conteúdo</a>
                <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-[11px] uppercase tracking-[0.2em] text-gray-500 dark:text-white/50 hover:text-[#D4AF37] font-bold">Dúvidas</a>
                <a href="#checkout" onClick={() => setIsMenuOpen(false)} className="text-center px-6 py-3 justify-center bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-black font-bold uppercase tracking-widest text-[10px] rounded-lg mt-4 flex items-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  Garantir Meu E-book
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 border-b border-[#D4AF37]/10 overflow-hidden bg-white dark:bg-[#050505]">
        {/* Abstract luxury background blur */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left lg:col-span-7 flex flex-col justify-center"
            >
              <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">O Segredo Das Confeitarias</span>
                      <h1 className="text-[40px] md:text-[56px] lg:text-[64px] font-serif leading-[1.05] mb-6 font-light italic tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Transforme sua <br className="hidden lg:block"/> cozinha em uma <br className="hidden lg:block"/>
                <span className="text-[#D4AF37] not-italic font-bold underline decoration-1 underline-offset-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Máquina de Lucros</span>
              </h1>
              
              <p className="text-sm md:text-lg text-gray-700 dark:text-white/80 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Descubra as receitas secretas do Lucro no Pote que vendem sozinhas e conquiste sua liberdade financeira sem sair de casa.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#checkout" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-[#050505] font-bold uppercase tracking-widest text-[11px] md:text-[12px] rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  Sim, Quero Lucrar Hoje <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-full lg:col-span-5 flex justify-center perspective-[1200px] mt-10 lg:mt-0"
            >
              <InteractiveCakeImage />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-[#0a0a0a] border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-[32px] md:text-[40px] font-light italic tracking-tight mb-4 text-gray-900 dark:text-white">
              Para quem é o <span className="text-[#D4AF37] font-bold not-italic underline decoration-1 underline-offset-8">Lucro no Pote?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
             <div className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/5 p-8 rounded-[1.5rem] text-center transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)]">
               <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="w-6 h-6 text-[#D4AF37]" />
               </div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg leading-tight">Para você que está desempregada</h3>
               <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed font-medium">E quer uma fonte de renda rápida, montando um negócio na própria cozinha sem precisar de muito dinheiro para começar.</p>
             </div>
             <div className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/5 p-8 rounded-[1.5rem] text-center transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)]">
               <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
               </div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg leading-tight">Para você que já faz bolos</h3>
               <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed font-medium">E quer profissionalizar, escalar suas vendas, ter lucro de verdade e parar de perder dinheiro com precificação errada.</p>
             </div>
             <div className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/5 p-8 rounded-[1.5rem] text-center transition-all hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)]">
               <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <ChefHat className="w-6 h-6 text-[#D4AF37]" />
               </div>
               <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg leading-tight">Para quem nunca fez bolo na vida</h3>
               <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed font-medium">Nosso método vai do zero. É perfeito para iniciantes, com um passo a passo simples, prático e totalmente à prova de falhas.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits / Features */}
      <section id="beneficios" className="py-16 md:py-20 relative bg-white dark:bg-[#050505] border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-light italic tracking-tight mb-4">
              A sua <span className="text-[#D4AF37] not-italic font-bold underline decoration-1 underline-offset-8">chave de ouro</span>
            </h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-white/60 leading-relaxed font-light">
              Esqueça tudo que você já viu sobre bolos de pote. Nós desenvolvemos um método 
              à prova de falhas focado puramente em alta margem de lucro e desejo incontrolável.
            </p>
          </div>

          <div className="grid grid-cols-1 flex-col sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<TrendingUp className="w-5 h-5 text-[#D4AF37]" />}
              title="Margem de Lucro de até 300%"
              description="Aprenda a precificar corretamente. Com ingredientes simples transformados em premium, sua margem de lucro será explosiva."
            />
            <FeatureCard 
              icon={<ChefHat className="w-5 h-5 text-[#D4AF37]" />}
              title="Receitas 'Guarda-Costas'"
              description="Você receberá o manual de receitas de alto padrão que vendem em qualquer estação do ano, garantindo previsibilidade."
            />
            <FeatureCard 
              icon={<Clock className="w-5 h-5 text-[#D4AF37]" />}
              title="Produção Otimizada"
              description="Método de produção em esteira na sua própria cozinha. Faça dezenas de bolos em menos de 2 horas."
            />
          </div>
        </div>
      </section>

      {/* Inside the Book / Modules */}
      <section id="conteudo" className="py-16 md:py-20 bg-gray-50 dark:bg-[#0a0a0a] relative border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">Conteúdo Premium</span>
                <h2 className="font-serif text-[32px] md:text-[48px] font-light tracking-tight italic mb-10">O que você vai descobrir</h2>
                
                <div className="space-y-4">
                  <ModuleItem 
                    number="01" 
                    title="A Base Perfeita"
                    desc="Massas úmidas, fofinhas e que não ressecam na geladeira. O maior erro das iniciantes resolvido."
                  />
                  <ModuleItem 
                    number="02" 
                    title="Recheios de Elite"
                    desc="Brigadeiros gourmet, mousses aeradas e caldas secretas. Sabores que viciam o cliente na primeira colherada."
                  />
                  <ModuleItem 
                    number="03" 
                    title="Gestão de Ouro"
                    desc="Planilha automática de precificação. Saiba exatamente quanto você ganha em cada pote vendido."
                  />
                </div>
              </div>

              <div className="relative">
                 <div className="p-1 border border-[#D4AF37]/20 rounded-2xl bg-gradient-to-b from-white/5 to-transparent">
                   <img 
                      src="/regenerated_image_1777319958902.png" 
                      alt="Demonstração" 
                      className="rounded-xl w-full object-cover aspect-[4/3] filter contrast-125 saturate-150 opacity-90"
                    />
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[radial-gradient(circle,rgba(212,175,55,0.2)_0%,transparent_70%)] rounded-full pointer-events-none"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#050505] border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">Inspiração Gourmet</span>
            <h2 className="font-serif text-[32px] md:text-[40px] font-light italic tracking-tight text-gray-900 dark:text-white mb-4">O Padrão de Qualidade</h2>
            <p className="text-gray-600 dark:text-white/60 text-sm max-w-lg mx-auto">
              Descubra a arte da confeitaria de luxo em potes. Encante seus clientes com visual e sabor inigualáveis.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319960089.png" alt="Bolo de Pote Gourmet" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319962665.png" alt="Bolo de Pote Chocolate" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6 md:pt-12">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319960879.png" alt="Bolo em Pote" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319963470.png" alt="Bolo Gourmet" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319961639.png" alt="Sobremesa em Pote" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319964442.png" alt="Doce Gourmet" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 md:pt-12">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319962072.png" alt="Bolo de Pote" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group">
                <img src="/regenerated_image_1777319965525.png" alt="Confeitaria Gourmet" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout / Pricing CTA Section */}
      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-gradient-to-tr from-[#AA8822] to-[#F9E498] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl relative">
             <div className="absolute inset-2 border-2 border-[#D4AF37] rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
             <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37] relative z-10" />
          </div>
          <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-black mb-6 leading-tight max-w-2xl mx-auto">
            Garantia Incondicional de 7 Dias. Seu Risco é Zero.
          </h2>
          <p className="text-black/80 text-base md:text-lg max-w-2xl mx-auto font-bold leading-relaxed mb-8">
            Nós confiamos tanto na qualidade do E-book que tiramos todo o peso das suas costas. Se em até 7 dias você achar que o material não é para você, basta solicitar a devolução do produto diretamente na Hotmart e devolveremos 100% do seu dinheiro. Simples assim.
          </p>
          <div className="inline-flex items-center gap-2 bg-black text-[#D4AF37] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl border border-white/10">
             <CheckCircle className="w-4 h-4" /> Dinheiro Devolvido na Hora
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="py-16 md:py-20 relative bg-gray-50 dark:bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-[#050505] border border-[#D4AF37]/20 rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(212,175,55,0.05)] grid lg:grid-cols-5 gap-10 lg:gap-12">
            
            {/* Product Info */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="text-[#D4AF37] font-bold tracking-widest text-[10px] uppercase mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" /> Oferta Especial Limitada
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] font-light italic tracking-tight mb-4">
                Seu Novo Negócio por uma <span className="font-bold underline decoration-[#D4AF37] decoration-1 underline-offset-4 not-italic">Fração do Valor</span>
              </h2>
              <p className="text-xs md:text-sm text-gray-500 dark:text-white/50 mb-8 leading-relaxed">
                Você gasta mais em um lanche do que o investimento necessário para aprender a construir sua independência financeira hoje.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4 text-sm text-gray-700 dark:text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" /> 
                  <span><strong className="text-gray-900 dark:text-white">E-book Completo</strong> (PDF alta qualidade)</span>
                </li>
                <li className="flex items-start gap-4 text-sm text-gray-700 dark:text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" /> 
                  <span><strong className="text-gray-900 dark:text-white">Bônus:</strong> Planilha de Precificação</span>
                </li>
                <li className="flex items-start gap-4 text-sm text-gray-700 dark:text-white/80">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" /> 
                  <span><strong className="text-gray-900 dark:text-white">Acesso Vitalício</strong> + Bônus E-book Bolo Fitness</span>
                </li>
              </ul>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 dark:text-white/40 line-through text-sm">De R$ 97,99</span>
                  <span className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest border border-[#D4AF37]/30 px-2 py-0.5 rounded bg-[#D4AF37]/10">Por Apenas</span>
                </div>
                <div className="font-serif text-[48px] md:text-[56px] font-bold text-gray-900 dark:text-white tracking-tighter">R$ 17,50</div>
                <p className="text-[11px] text-gray-400 dark:text-white/40 uppercase tracking-widest">À vista ou em até 2x no cartão</p>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8 rounded-[1.5rem] border border-gray-200 dark:border-white/10 shadow-2xl relative h-full flex flex-col justify-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 md:left-6 md:-translate-x-0 bg-[#D4AF37] text-black text-[9px] sm:text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(212,175,55,0.5)] flex-nowrap whitespace-nowrap">
                  <ShieldCheck className="w-3 h-3" /> Pagamento Seguro
                </div>
                
                <h3 className="font-serif italic text-xl mb-1 text-gray-900 dark:text-white">Garanta sua Vaga</h3>
                <p className="text-[10px] text-gray-500 dark:text-white/50 mb-6 uppercase tracking-widest">Acesso liberado imediatamente</p>
                
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name') as string;
                  const email = formData.get('email') as string;
                  const phone = formData.get('phone') as string;
                  
                  const url = new URL('https://pay.hotmart.com/G106050670N');
                  if (name) url.searchParams.set('name', name);
                  if (email) url.searchParams.set('email', email);
                  if (phone) url.searchParams.set('phonenumber', phone);
                  
                  window.location.href = url.toString();
                }}>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold">Nome Completo</label>
                    <input type="text" name="name" className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg px-4 py-3 text-xs md:text-sm focus:border-[#D4AF37] outline-none text-gray-900 dark:text-white transition-colors" placeholder="Ex: Maria Silva" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold">E-mail para Acesso</label>
                    <input type="email" name="email" required className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg px-4 py-3 text-xs md:text-sm focus:border-[#D4AF37] outline-none text-gray-900 dark:text-white transition-colors" placeholder="Para receber o acesso" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-[#D4AF37] mb-1 font-bold">WhatsApp</label>
                    <input type="text" name="phone" className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg px-4 py-3 text-xs md:text-sm focus:border-[#D4AF37] outline-none text-gray-900 dark:text-white transition-colors" placeholder="(00) 00000-0000" />
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F9E498] text-black font-bold uppercase tracking-widest text-[11px] rounded-lg py-4 transition-all hover:scale-[1.02] shadow-[0_10px_20px_rgba(212,175,55,0.3)] mt-4">
                    Quero Meu Acesso Agora
                  </button>
                  
                  <div className="text-center mt-4 flex items-center justify-center gap-2 text-[9px] uppercase tracking-widest text-gray-400 dark:text-white/40">
                     <ShieldCheck className="w-3 h-3 text-green-500" />
                     Garantia de 7 dias ou seu dinheiro de volta
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-white dark:bg-[#050505] border-y border-[#D4AF37]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">Transparência Total</span>
            <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-light italic tracking-tight text-gray-900 dark:text-white mb-4">Dúvidas Frequentes</h2>
          </div>

          <div className="space-y-3">
            <FAQItem 
              question="É para quem nunca fez bolo na vida?" 
              answer="Com certeza. O e-book foi focado do absoluto zero. Você vai aprender os princípios básicos de confeitaria até a finalização do pote como uma profissional."
            />
            <FAQItem 
              question="Como vou receber o meu e-book?" 
              answer="Assim que o pagamento for aprovado, você receberá automaticamente em seu e-mail um link para baixar o E-book e todos os bônus."
            />
            <FAQItem 
              question="Quais as formas de pagamento aceitas?" 
              answer="Aceitamos PIX, Cartão de Crédito em até 2x e Boleto Bancário. Compras no PIX e Cartão têm liberação imediata."
            />
            <FAQItem 
              question="E se eu não gostar?" 
              answer="Você tem 7 dias de garantia incondicional. Se você acessar o material, não gostar ou achar que não é para você, devolvemos 100% do seu dinheiro. Sem burocracias."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#050505] relative pb-20 pt-16 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37] to-[#F9E498] rounded-full flex items-center justify-center mb-4">
            <ChefHat className="w-4 h-4 text-black" />
          </div>
          <span className="font-serif italic text-xl tracking-tighter text-[#D4AF37] mb-4">Lucro no Pote</span>
          <p className="text-gray-400 dark:text-white/30 text-[10px] uppercase tracking-widest mb-6 text-center max-w-lg leading-relaxed">
            Este site não é afiliado ao Facebook. A responsabilidade do conteúdo é exclusivamente da nossa equipe.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-white/50 mb-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Políticas de Privacidade</a>
          </div>
          <p className="mt-8 text-xs text-gray-700">© 2026 Lucro no Pote. Todos os direitos reservados.</p>
        </div>

        {/* Dense info bar at absolute bottom */}
        <div className="absolute bottom-0 w-full min-h-[40px] py-2 border-t border-[#D4AF37]/20 bg-gray-50 dark:bg-[#0a0a0a] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:gap-8 overflow-hidden px-4">
          <span className="text-[#D4AF37] text-[8px] md:text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">Checkout Seguro</span>
          <span className="text-gray-300 dark:text-white/20 hidden md:block">•</span>
          <span className="text-gray-600 dark:text-white/60 text-[8px] md:text-[9px] font-bold uppercase tracking-widest whitespace-nowrap">Aprovado por Chefs</span>
          <span className="text-gray-300 dark:text-white/20 hidden md:block">•</span>
          <span className="text-[#D4AF37] text-[8px] md:text-[9px] font-bold uppercase tracking-widest whitespace-nowrap animate-pulse">+152 Vendas hoje</span>
        </div>
      </footer>
    </div>
  );
}

// Components

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 hover:border-[#D4AF37]/30 transition-all hover:-translate-y-1 group duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-serif italic mb-3 text-gray-900 dark:text-white tracking-tight">{title}</h3>
      <p className="text-gray-600 dark:text-white/60 text-sm font-light leading-relaxed">{description}</p>
    </div>
  );
}

function ModuleItem({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="flex gap-4 md:gap-6 relative group p-4 border border-transparent hover:border-[#D4AF37]/10 rounded-xl transition-colors dark:hover:bg-white/5">
      <div className="text-[32px] md:text-[40px] font-serif font-light italic text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors pt-1">
        {number}
      </div>
      <div>
        <h4 className="text-base md:text-lg font-bold mb-1 tracking-wider uppercase text-gray-900 dark:text-white">
           {title}
        </h4>
        <p className="text-gray-600 dark:text-white/60 text-xs md:text-sm font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-white/5 rounded-xl overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left dark:hover:bg-white/5 transition-colors"
      >
        <span className="font-serif italic text-lg pr-8 text-gray-900 dark:text-white">{question}</span>
        <ChevronDown className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-5 pt-0 text-gray-500 dark:text-white/50 text-sm font-light leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
