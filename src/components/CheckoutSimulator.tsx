import React, { useState } from 'react';
import { CreditCard, QrCode, ClipboardCheck, Sparkles, CheckCircle2, Lock, ShieldCheck, Heart } from 'lucide-react';

interface CheckoutSimulatorProps {
  onPurchaseSuccess: () => void;
}

type PaymentMethod = 'pix' | 'card' | 'boleto';

export default function CheckoutSimulator({ onPurchaseSuccess }: CheckoutSimulatorProps) {
  const [method, setMethod] = useState<PaymentMethod>('pix');
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');

  // Form states
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const pixKey = "00020126420014br.gov.bcb.pix0120klebsuchan@ebook.com.br520400005303986540537.005802BR5915KLEBER_CAMARGO6009Sao_Paulo62070503***6304D18E";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setStep('success');
      // Trigger success event after 1.5s so they can see the confetti/success state
      setTimeout(() => {
        onPurchaseSuccess();
      }, 1800);
    }, 1500);
  };

  const fillMockCardData = () => {
    setCardName('Mariana de Sousa Santos');
    setCardNumber('4000 1234 5678 9010');
    setCardExpiry('12/31');
    setCardCvv('999');
  };

  return (
    <div id="checkout" className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-cream-200 overflow-hidden">
      {/* Top Banner */}
      <div className="bg-[#3e2723] px-6 py-5 text-white flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-amber-400" />
          <span className="font-semibold tracking-wider text-xs uppercase text-amber-200">Checkout Seguro e Criptografado</span>
        </div>
        <div className="flex items-center gap-1 bg-amber-500/20 px-2 py-0.5 rounded text-amber-300 font-bold text-xs">
          SSL SECURE
        </div>
      </div>

      <div className="p-6 md:p-8">
        {step === 'form' ? (
          <div>
            {/* Header Product Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-zinc-100 pb-5 mb-6 gap-3">
              <div>
                <h3 className="text-xl font-bold text-[#3e2723]" id="checkout-title">E-book Bolo de Pote Premium + Bônus</h3>
                <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                  <span>Acesso vitalício instantâneo</span> • <span>Área de membros liberada</span>
                </p>
              </div>
              
              <div className="text-right sm:text-right flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0">
                <span className="text-xs text-zinc-400 line-through">R$ 97,00</span>
                <span className="text-2xl font-extrabold text-emerald-600 font-serif">R$ 37,00</span>
              </div>
            </div>

            {/* Payment Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              <button
                type="button"
                id="tab-pix"
                onClick={() => setMethod('pix')}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center gap-1.5 font-bold text-xs transition duration-150 cursor-pointer ${
                  method === 'pix'
                    ? 'border-emerald-500 bg-emerald-50/50 text-emerald-950'
                    : 'border-zinc-200 hover:bg-zinc-50 text-zinc-500'
                }`}
              >
                <QrCode className="w-5 h-5" />
                <span>PIX</span>
              </button>

              <button
                type="button"
                id="tab-card"
                onClick={() => setMethod('card')}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center gap-1.5 font-bold text-xs transition duration-150 cursor-pointer ${
                  method === 'card'
                    ? 'border-amber-600 bg-amber-50/50 text-[#3e2723]'
                    : 'border-zinc-200 hover:bg-zinc-50 text-zinc-500'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>Cartão</span>
              </button>

              <button
                type="button"
                id="tab-demo-fast"
                onClick={onPurchaseSuccess}
                className="py-3 px-2 rounded-xl border border-dashed border-amber-400 hover:bg-amber-50/50 text-amber-800 flex flex-col items-center justify-center gap-1.5 font-extrabold text-xs cursor-pointer transition"
              >
                <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                <span>Atalho Aluno</span>
              </button>
            </div>

            {/* Simulated Payment Area */}
            {method === 'pix' && (
              <div id="payment-pix-box" className="space-y-5 animate-fade-in text-center sm:text-left">
                <div className="bg-zinc-50 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-6 border border-zinc-100">
                  {/* Mock QR Code */}
                  <div className="bg-white p-3 rounded-xl shadow-xs border border-zinc-200 shrink-0 relative">
                    <div className="w-32 h-32 flex flex-col items-center justify-center gap-1 text-emerald-600 font-mono text-[9px] font-bold">
                      {/* Fake stylized scan square */}
                      <div className="grid grid-cols-4 gap-1 w-24 h-24 p-1 border-2 border-emerald-500 relative bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:6px_6px]">
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-4 border-l-4 border-emerald-700 bg-white" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-4 border-r-4 border-emerald-700 bg-white" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-4 border-l-4 border-emerald-700 bg-white" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-4 border-r-4 border-emerald-700 bg-white" />
                      </div>
                      <span className="text-[8px] text-zinc-400 mt-1 uppercase font-sans">Qr Code Simulado</span>
                    </div>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <h4 className="font-bold text-[#3e2723] text-sm">Escaneie o QR Code ou Use o Pix Copia e Cola</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      Este é um formulário de teste educativo. Copie o código abaixo e clique em "Simular Confirmação" para liberar o acesso ao E-book e às ferramentas.
                    </p>
                    
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-200 hover:bg-zinc-300 rounded-lg text-zinc-800 font-bold text-xs transition cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Código Copiado!</span>
                        </>
                      ) : (
                        <>
                          <ClipboardCheck className="w-3.5 h-3.5" />
                          <span>Copiar Código Pix</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  id="btn-confirm-pix"
                  onClick={handleSimulatePayment}
                  disabled={isLoading}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-md transition duration-150 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>Simular Confirmação do Pagamento Pix</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {method === 'card' && (
              <form onSubmit={handleSimulatePayment} id="payment-card-form" className="space-y-4 animate-fade-in">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#5d4037] font-bold">Preencha com dados de mentirinha:</span>
                  <button
                    type="button"
                    onClick={fillMockCardData}
                    className="text-xs text-amber-700 font-semibold hover:underline cursor-pointer"
                  >
                    ✦ Auto-Preencher Dados de Teste
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3e2723] block">Nome Impresso no Cartão</label>
                  <input
                    type="text"
                    required
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="ALINE S COSTA"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-stone-850"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#3e2723] block">Número do Cartão</label>
                  <input
                    type="text"
                    required
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="4000 1234 5678 9010"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-stone-850"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] block">Validade</label>
                    <input
                      type="text"
                      required
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      placeholder="MM/AA"
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-stone-850"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#3e2723] block">CVV (Código)</label>
                    <input
                      type="text"
                      required
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="123"
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/40 text-stone-850"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#3e2723] hover:bg-zinc-800 text-white rounded-xl font-bold text-sm shadow-md transition duration-150 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Simular Compra Segura por R$ 37,00</span>
                  )}
                </button>
              </form>
            )}

            {/* Trusted Badges */}
            <div className="grid grid-cols-3 gap-2 border-t border-zinc-100 pt-6 mt-6 text-center text-zinc-500 select-none">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-5 h-5 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-700">Satisfação 100%</span>
                <span className="text-[8px]">Seu risco é ZERO</span>
              </div>
              <div className="flex flex-col items-center gap-1 border-x border-zinc-100">
                <Lock className="w-5 h-5 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-700">Site Blindado</span>
                <span className="text-[8px]">Protegido por SSL</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Heart className="w-5 h-5 text-zinc-400" />
                <span className="text-[10px] font-bold text-zinc-700">Confeitaria Ativa</span>
                <span className="text-[8px]">Suporte VIP diário</span>
              </div>
            </div>
          </div>
        ) : (
          /* Success Transience View */
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-1.5Packed">
              <h3 className="text-2xl font-serif text-[#3e2723] font-bold">Pagamento Aprovado!</h3>
              <p className="text-sm text-zinc-500">
                Parabéns! Sua transação simulada foi confirmada pela operadora.
              </p>
            </div>

            <div className="bg-emerald-50 text-emerald-950 px-4 py-3 rounded-xl inline-flex items-center gap-2 border border-emerald-100 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" style={{ animationDuration: '3s' }} />
              <span>Redirecionando você para a Área de Membros...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
