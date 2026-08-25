import React, { useState } from 'react';
import { LabelData } from '../types';
import { Printer, Calendar, ShieldAlert, Check, Phone, Instagram, Layers } from 'lucide-react';

export default function LabelGenerator() {
  const todayStr = new Date().toISOString().split('T')[0];
  
  // Calculate default expire date (+3 days)
  const calculateDefaultExpire = (baseDateStr: string, daysOffset: number) => {
    const d = new Date(baseDateStr + 'T12:00:00');
    d.setDate(d.getDate() + daysOffset);
    return d.toISOString().split('T')[0];
  };

  const [brand, setBrand] = useState('Bolo de Pote Supreme');
  const [slogan, setSlogan] = useState('Feito com amor e carinho');
  const [flavor, setFlavor] = useState('Ninho com Morango');
  const [phone, setPhone] = useState('(11) 98765-4321');
  const [insta, setInsta] = useState('@seuinstadebolos');
  const [madeDate, setMadeDate] = useState(todayStr);
  const [expiryDays, setExpiryDays] = useState(3);
  const [expiryDate, setExpiryDate] = useState(() => calculateDefaultExpire(todayStr, 3));
  const [extraInfo, setExtraInfo] = useState('Contém Glúten e Lactose. Manter sob refrigeração!');
  const [qtyToPrint, setQtyToPrint] = useState(6);
  const [theme, setTheme] = useState<'pink' | 'kraft' | 'black'>('pink');

  const handleMadeDateChange = (val: string) => {
    setMadeDate(val);
    setExpiryDate(calculateDefaultExpire(val, expiryDays));
  };

  const handleExpiryDaysChange = (days: number) => {
    setExpiryDays(days);
    setExpiryDate(calculateDefaultExpire(madeDate, days));
  };

  const handlePrint = () => {
    window.print();
  };

  // Build temporary printable sticker components
  const renderStickers = (isForScreen: boolean) => {
    const stickersArray = Array.from({ length: qtyToPrint });
    
    // Theme colors
    const themeStyles = {
      pink: {
        bg: 'bg-[#fffcfc]',
        border: 'border-rose-300',
        brandText: 'text-rose-700',
        flavorBg: 'bg-rose-50',
        flavorText: 'text-rose-800 border-rose-200',
        borderStyle: 'border-2 border-dashed',
      },
      kraft: {
        bg: 'bg-[#f7ebe1]',
        border: 'border-[#a58668]',
        brandText: 'text-[#5d4037]',
        flavorBg: 'bg-white/60',
        flavorText: 'text-[#3e2723] border-[#a58668]/30',
        borderStyle: 'border-2 border-solid',
      },
      black: {
        bg: 'bg-white',
        border: 'border-zinc-800',
        brandText: 'text-zinc-900',
        flavorBg: 'bg-zinc-50',
        flavorText: 'text-zinc-900 border-zinc-200',
        borderStyle: 'border-2 border-dashed',
      }
    };

    const activeTheme = themeStyles[theme];

    // Split-safe helper for printing dates on a sticker
    const formatDateBr = (dateStr: string) => {
      if (!dateStr) return '';
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}`;
      }
      return dateStr;
    };

    return (
      <div className={`grid grid-cols-2 ${isForScreen ? 'sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-2'} gap-4 p-4`}>
        {stickersArray.map((_, idx) => (
          <div
            key={idx}
            className={`relative p-4 rounded-3xl ${activeTheme.bg} ${activeTheme.borderStyle} ${activeTheme.border} flex flex-col justify-between text-center aspect-[1.1] shadow-xs cursor-default`}
            style={{ minHeight: '190px' }}
          >
            {/* Header decoration */}
            <div className="space-y-0.5">
              <span className="text-[14px] select-none">🍰</span>
              <h5 className={`text-[11px] font-extrabold uppercase tracking-wide truncate ${activeTheme.brandText}`}>{brand}</h5>
              <p className="text-[8px] text-zinc-500 italic truncate">{slogan}</p>
            </div>

            {/* Core Flavor Badge */}
            <div className={`my-2 p-1 px-2.5 rounded-lg border leading-tight ${activeTheme.flavorBg} ${activeTheme.flavorText}`}>
              <span className="text-[10px] font-bold uppercase tracking-wider block truncate">{flavor}</span>
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-2 gap-1 border-y border-dashed border-zinc-300/60 py-1 mb-2 text-[9px] text-[#3e2723] font-semibold">
              <div className="text-left">
                <span className="text-[8px] text-zinc-400 font-normal block">Fabricação:</span>
                <span>{formatDateBr(madeDate)}</span>
              </div>
              <div className="text-right border-l border-zinc-200 pl-1">
                <span className="text-[8px] text-zinc-400 font-normal block">Validade:</span>
                <span className="text-rose-700">{formatDateBr(expiryDate)}</span>
              </div>
            </div>

            {/* Footer with contacts */}
            <div className="space-y-1">
              <div className="flex justify-center items-center gap-2.5 text-[8px] text-zinc-600 font-medium">
                {phone && (
                  <span className="flex items-center gap-0.5">
                    <b>W</b>: {phone}
                  </span>
                )}
                {insta && (
                  <span className="flex items-center gap-0.5">
                    <b>I</b>: {insta}
                  </span>
                )}
              </div>
              
              <span className="text-[7px] text-zinc-400 block truncate font-normal leading-tight">
                {extraInfo}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* Configuration Column */}
      <div className="lg:col-span-5 bg-white rounded-2xl border border-cream-200 p-5 space-y-4">
        <div>
          <h3 className="font-bold text-base text-[#3e2723]">Configurar Minhas Etiquetas</h3>
          <p className="text-xs text-zinc-500">Insira as informações do seu negócio de doces para imprimir.</p>
        </div>

        <div className="space-y-3.5">
          {/* Brand & Slogan */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Nome da Marca</label>
              <input
                type="text"
                value={brand}
                maxLength={24}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Ex: Pote Doce Gourmet"
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Slogan da Marca</label>
              <input
                type="text"
                value={slogan}
                maxLength={26}
                onChange={(e) => setSlogan(e.target.value)}
                placeholder="Ex: Delícia em pedaços"
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>
          </div>

          {/* Sabor e telefone */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Sabor do Bolo</label>
              <input
                type="text"
                value={flavor}
                maxLength={22}
                onChange={(e) => setFlavor(e.target.value)}
                placeholder="Ex: Ninho com Morango"
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">WhatsApp p/ Encomendas</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: (11) 98888-8888"
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>
          </div>

          {/* Instagram and Warnings */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Instagram</label>
              <input
                type="text"
                value={insta}
                onChange={(e) => setInsta(e.target.value)}
                placeholder="@seunome.confeitaria"
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Aviso de Alergia/Consumo</label>
              <input
                type="text"
                value={extraInfo}
                maxLength={50}
                onChange={(e) => setExtraInfo(e.target.value)}
                placeholder="Contém lactose. Conserve na geladeira."
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>
          </div>

          {/* Dates Controls */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Fabricação</label>
              <input
                type="date"
                value={madeDate}
                onChange={(e) => handleMadeDateChange(e.target.value)}
                className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Dias Validade</label>
              <select
                value={expiryDays}
                onChange={(e) => handleExpiryDaysChange(Number(e.target.value))}
                className="w-full py-2 px-3 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
              >
                <option value={2}>2 dias (Morangos In natura)</option>
                <option value={3}>3 dias (Ideal refrigeração)</option>
                <option value={5}>5 dias (Cremes cozidos)</option>
                <option value={7}>7 dias (Geleias acidificadas)</option>
              </select>
            </div>
          </div>

          <div className="border-t border-zinc-100 pt-4 space-y-3.5">
            {/* Visual themes selector */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#3e2723] block uppercase tracking-wider">Estilo Visual do Adesivo</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'pink', label: 'Rosinha Doce', color: 'bg-rose-100 border-rose-300' },
                  { id: 'kraft', label: 'Rústico Kraft', color: 'bg-[#f7ebe1] border-[#a58668]' },
                  { id: 'black', label: 'Economia Tinta', color: 'bg-white border-zinc-800' }
                ].map(th => {
                  const isActive = theme === th.id;
                  return (
                    <button
                      key={th.id}
                      onClick={() => setTheme(th.id as any)}
                      className={`p-2 rounded-xl border text-center cursor-pointer transition ${
                        isActive ? 'border-2 border-stone-800' : 'border-zinc-200'
                      }`}
                    >
                      <div className={`w-full h-4 rounded-sm mb-1 ${th.color} border border-dashed`} />
                      <span className="text-[10px] font-bold block">{th.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Grid display selectors */}
            <div className="flex justify-between items-center bg-zinc-50 p-3 rounded-lg border border-zinc-100">
              <span className="text-[11px] font-semibold text-[#3e2723] flex items-center gap-1">
                <Layers className="w-4 h-4 text-zinc-500" />
                <span>Etiquetas na Folha:</span>
              </span>
              
              <select
                value={qtyToPrint}
                onChange={(e) => setQtyToPrint(Number(e.target.value))}
                className="bg-white border border-zinc-300 rounded text-xs px-2 py-0.5 text-stone-850 font-bold"
              >
                <option value={2}>2 Etiquetas</option>
                <option value={4}>4 Etiquetas</option>
                <option value={6}>6 Etiquetas</option>
                <option value={8}>8 Etiquetas</option>
                <option value={12}>12 Etiquetas</option>
              </select>
            </div>

            {/* Print Action! */}
            <button
              onClick={handlePrint}
              className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar PDF de Adesivos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Screen Preview Column */}
      <div className="lg:col-span-7 space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-bold text-[#5d4037] uppercase tracking-wider flex items-center gap-1.5">
            <span>🖥️ Visualização Prévia na Tela</span>
          </h4>
          <span className="text-[10px] text-zinc-400">Total: {qtyToPrint} unid.</span>
        </div>

        {/* Screen Preview container */}
        <div className="bg-zinc-100/50 rounded-2xl border border-zinc-350/50 p-4 min-h-[400px] overflow-y-auto">
          {renderStickers(true)}
        </div>
      </div>

      {/* Real Printable Node mapped to CSS standard @media print */}
      <div id="print-area" className="hidden">
        {renderStickers(false)}
      </div>

    </div>
  );
}
