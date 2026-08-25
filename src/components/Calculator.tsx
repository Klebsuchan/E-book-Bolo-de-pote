import React, { useState, useEffect } from 'react';
import { CostItem, CalculationResult } from '../types';
import { DEFAULT_COSTS } from '../data';
import { Plus, Trash2, RotateCcw, DollarSign, PieChart, Info, HelpCircle } from 'lucide-react';

export default function Calculator() {
  const [costs, setCosts] = useState<CostItem[]>(() => {
    const saved = localStorage.getItem('pote_calculator_costs');
    return saved ? JSON.parse(saved) : DEFAULT_COSTS;
  });

  const [overheadPercentage, setOverheadPercentage] = useState<number>(15); // e.g. 15% for gas, water, light
  const [markupPercentage, setMarkupPercentage] = useState<number>(120); // 120% margin
  const [customPrice, setCustomPrice] = useState<number | null>(null);

  // Quick inputs for creating new ingredient row
  const [newRowName, setNewRowName] = useState('');
  const [newRowCost, setNewRowCost] = useState<number>(0);
  const [newRowPurchasedAmt, setNewRowPurchasedAmt] = useState<number>(0);
  const [newRowUnit, setNewRowUnit] = useState<'g' | 'ml' | 'un' | 'kg' | 'L'>('g');
  const [newRowUsedAmt, setNewRowUsedAmt] = useState<number>(0);

  // Sync costs to localStorage
  useEffect(() => {
    localStorage.setItem('pote_calculator_costs', JSON.stringify(costs));
  }, [costs]);

  // Recalculate financial breakdown
  const calculateFinance = (): CalculationResult => {
    let rawBatchCost = 0;
    
    costs.forEach(item => {
      if (item.purchasedAmount > 0) {
        const itemCost = (item.cost / item.purchasedAmount) * item.amountNeeded;
        rawBatchCost += itemCost;
      }
    });

    // Add overhead factor (gas, electrics, water, etc.)
    const totalBatchCost = rawBatchCost * (1 + overheadPercentage / 100);

    // Yield is governed by either the number of cups/pots listed in ingredients OR defaults to 10
    const packagingItem = costs.find(item => item.name.toLowerCase().includes('pote') || item.name.toLowerCase().includes('copo'));
    const totalYield = packagingItem ? packagingItem.amountNeeded : 10;

    const costPerPot = totalYield > 0 ? totalBatchCost / totalYield : 0;

    // Markup suggestion
    const suggestedPriceMin = costPerPot * (1 + 1.0); // 100% margin
    const suggestedPriceMax = costPerPot * (1 + 2.0); // 200% margin

    const selectedPrice = customPrice !== null ? customPrice : costPerPot * (1 + markupPercentage / 100);
    const profitPerPot = selectedPrice - costPerPot;
    const totalBatchProfit = profitPerPot * totalYield;

    return {
      totalBatchCost,
      costPerPot,
      suggestedPriceMin,
      suggestedPriceMax,
      selectedPrice,
      profitPerPot,
      totalBatchProfit
    };
  };

  const handleUpdateItemField = (id: string, field: keyof CostItem, val: any) => {
    setCosts(prev => prev.map(item => {
      if (item.id === id) {
        // Reset custom price if details change to preserve auto suggested equations
        setCustomPrice(null);
        return { ...item, [field]: val };
      }
      return item;
    }));
  };

  const handleAddCostRow = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRowName) return;

    const newItem: CostItem = {
      id: Date.now().toString(),
      name: newRowName,
      cost: Number(newRowCost) || 0,
      purchasedAmount: Number(newRowPurchasedAmt) || 1,
      unit: newRowUnit,
      amountNeeded: Number(newRowUsedAmt) || 0,
    };

    setCosts(prev => [...prev, newItem]);
    setCustomPrice(null);

    // Reset inputs
    setNewRowName('');
    setNewRowCost(0);
    setNewRowPurchasedAmt(0);
    setNewRowUsedAmt(0);
  };

  const handleDeleteCostRow = (id: string) => {
    setCosts(prev => prev.filter(item => item.id !== id));
    setCustomPrice(null);
  };

  const handleResetToDefault = () => {
    if (window.confirm('Deseja realmente redefinir todos os custos para os valores originais da receita de exemplo?')) {
      setCosts(DEFAULT_COSTS);
      setOverheadPercentage(15);
      setMarkupPercentage(120);
      setCustomPrice(null);
    }
  };

  const finances = calculateFinance();
  const packagingItem = costs.find(item => item.name.toLowerCase().includes('pote') || item.name.toLowerCase().includes('copo'));
  const currentYield = packagingItem ? packagingItem.amountNeeded : 10;
  const realROI = finances.costPerPot > 0 ? (finances.profitPerPot / finances.costPerPot) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Overview stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-white p-4 rounded-xl border border-cream-200 shadow-xs">
          <span className="text-[10px] text-zinc-500 uppercase font-bold block">Custo total fornada</span>
          <span className="text-xl font-bold text-[#3e2723] block mt-1">
            R$ {finances.totalBatchCost.toFixed(2)}
          </span>
          <span className="text-[9px] text-amber-700 block mt-1">Com {overheadPercentage}% custos invisíveis</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-cream-200 shadow-xs">
          <span className="text-[10px] text-zinc-500 uppercase font-bold block">Custo unitário (Pote)</span>
          <span className="text-xl font-semibold text-rose-700 block mt-1">
            R$ {finances.costPerPot.toFixed(2)}
          </span>
          <span className="text-[9px] text-zinc-500 block mt-1">{currentYield} potes produzidos</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-cream-200 shadow-xs bg-emerald-50/20">
          <span className="text-[10px] text-emerald-900 uppercase font-bold block">Preço de Venda</span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-xl font-extrabold text-emerald-600 block">
              R$ {finances.selectedPrice.toFixed(2)}
            </span>
          </div>
          <span className="text-[9px] text-emerald-700 block mt-1">ROI real de {realROI.toFixed(0)}%</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-200 shadow-xs bg-emerald-50">
          <span className="text-[10px] text-emerald-950 uppercase font-bold block">Lucro Fornada</span>
          <span className="text-xl font-extrabold text-[#115e59] block mt-1">
            R$ {finances.totalBatchProfit.toFixed(2)}
          </span>
          <span className="text-[9px] text-emerald-750 block mt-1">R$ {finances.profitPerPot.toFixed(2)} de lucro por pote</span>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Ingredient Cost Sheet Table */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-cream-200 p-5 space-y-6">
          <div className="flex justify-between items-center flex-wrap gap-2 pb-2">
            <div>
              <h3 className="font-bold text-base text-[#3e2723]" id="calc-table-title">Tabela de Custos de Insumos</h3>
              <p className="text-xs text-zinc-500">Mude os preços reais para calcular o custo exato do Bolo de Pote de Ninho com Morango.</p>
            </div>
            
            <button
              onClick={handleResetToDefault}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs text-zinc-500 hover:text-amber-800 hover:bg-zinc-100 rounded-lg border border-zinc-200 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Resetar</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-zinc-100 text-[11px] font-bold text-zinc-600 uppercase tracking-wider">
                  <th className="py-2.5">Ingrediente / Pote</th>
                  <th className="py-2.5 w-24">Pago (R$)</th>
                  <th className="py-2.5 w-24">Vol. Comprado</th>
                  <th className="py-2.5 w-16">Unidade</th>
                  <th className="py-2.5 w-24">Vol. Usado</th>
                  <th className="py-2.5 w-24 text-right">Custo Proporcional</th>
                  <th className="py-2.5 w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {costs.map(item => {
                  const proportionalCost = item.purchasedAmount > 0
                    ? (item.cost / item.purchasedAmount) * item.amountNeeded
                    : 0;
                  
                  return (
                    <tr key={item.id} className="text-xs hover:bg-zinc-50/50">
                      <td className="py-3 font-semibold text-[#3e2723]">{item.name}</td>
                      
                      <td className="py-2">
                        <div className="relative max-w-[80px]">
                          <span className="absolute left-1.5 top-2 text-[10px] text-zinc-400">R$</span>
                          <input
                            type="number"
                            step="0.01"
                            value={item.cost}
                            onChange={(e) => handleUpdateItemField(item.id, 'cost', Number(e.target.value))}
                            className="w-full pl-6 pr-1 py-1 bg-zinc-50 text-stone-850 hover:bg-zinc-100 select-all border border-zinc-200/50 text-xs rounded-lg"
                          />
                        </div>
                      </td>

                      <td className="py-2">
                        <input
                          type="number"
                          value={item.purchasedAmount}
                          onChange={(e) => handleUpdateItemField(item.id, 'purchasedAmount', Number(e.target.value))}
                          className="w-16 px-1.5 py-1 bg-zinc-50 text-stone-850 hover:bg-zinc-100 select-all border border-zinc-200/50 text-xs rounded-lg"
                        />
                      </td>

                      <td className="py-2 text-zinc-500 font-medium">{item.unit}</td>

                      <td className="py-2">
                        <input
                          type="number"
                          value={item.amountNeeded}
                          onChange={(e) => handleUpdateItemField(item.id, 'amountNeeded', Number(e.target.value))}
                          className="w-16 px-1.5 py-1 bg-zinc-50 text-stone-850 hover:bg-zinc-100 select-all border border-zinc-200/50 text-xs rounded-lg animate-pulse"
                        />
                      </td>

                      <td className="py-3 text-right font-semibold text-[#5d4037]">
                        R$ {proportionalCost.toFixed(2)}
                      </td>

                      <td className="py-2 text-right">
                        <button
                          onClick={() => handleDeleteCostRow(item.id)}
                          className="p-1 text-zinc-300 hover:text-red-600 transition hover:bg-zinc-100 rounded cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Form to insert quick item */}
          <form onSubmit={handleAddCostRow} className="border-t border-zinc-100 pt-4 space-y-3">
            <h4 className="text-xs font-bold text-[#3e2723]">Adicionar custo extra (Insumos, coberturas especiais, tags extras):</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
              <div className="sm:col-span-4">
                <input
                  type="text"
                  required
                  placeholder="Ex: Brigadeiro ou Colher extra"
                  value={newRowName}
                  onChange={(e) => setNewRowName(e.target.value)}
                  className="w-full px-3 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
                />
              </div>

              <div className="sm:col-span-2 relative">
                <span className="absolute left-1.5 top-2 text-[10px] text-zinc-400">R$</span>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Valor"
                  value={newRowCost || ''}
                  onChange={(e) => setNewRowCost(Number(e.target.value))}
                  className="w-full pl-6 pr-1 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
                />
              </div>

              <div className="sm:col-span-2">
                <input
                  type="number"
                  placeholder="Comprado"
                  value={newRowPurchasedAmt || ''}
                  onChange={(e) => setNewRowPurchasedAmt(Number(e.target.value))}
                  className="w-full px-2 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
                />
              </div>

              <div className="sm:col-span-1.5">
                <select
                  value={newRowUnit}
                  onChange={(e: any) => setNewRowUnit(e.target.value)}
                  className="w-full py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
                >
                  <option value="g">g</option>
                  <option value="ml">ml</option>
                  <option value="un">un</option>
                  <option value="kg">kg</option>
                  <option value="L">L</option>
                </select>
              </div>

              <div className="sm:col-span-1.5">
                <input
                  type="number"
                  placeholder="Usado"
                  value={newRowUsedAmt || ''}
                  onChange={(e) => setNewRowUsedAmt(Number(e.target.value))}
                  className="w-full px-2 py-1.5 bg-zinc-50 text-stone-850 border border-zinc-200 rounded-lg text-xs"
                />
              </div>

              <div className="sm:col-span-1">
                <button
                  type="submit"
                  className="w-full py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Pricing Adjustments & Strategy */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-cream-200 p-5 space-y-6">
          <h3 className="font-bold text-base text-[#3e2723] flex items-center gap-1.5 border-b border-zinc-100 pb-3">
            <PieChart className="w-4.5 h-4.5 text-amber-700 font-bold" />
            <span>Minhas Margens</span>
          </h3>

          {/* Overhead Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#3e2723] flex items-center gap-1">
                Gastos Invisíveis (Gás/Luz)
                <span className="group relative">
                  <HelpCircle className="w-3.5 h-3.5 text-zinc-400 cursor-pointer" />
                  <span className="absolute z-10 bottom-5 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[9px] p-2 rounded shadow-md invisible group-hover:visible w-40 font-normal leading-tight">
                    Gastos elétricos, lavagem de louça e gás. Recomendado somar de 10% a 20%.
                  </span>
                </span>
              </span>
              <span className="font-bold text-amber-700">{overheadPercentage}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={overheadPercentage}
              onChange={(e) => setOverheadPercentage(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          {/* Desired Markup Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#3e2723]">Margem de Lucro Desejada</span>
              <span className="font-bold text-[#115e59]">{markupPercentage}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="300"
              value={markupPercentage}
              onChange={(e) => {
                setMarkupPercentage(Number(e.target.value));
                setCustomPrice(null); // Clear custom manual price
              }}
              className="w-full accent-[#115e59]"
            />
          </div>

          <hr className="border-zinc-100" />

          {/* Cost/Pricing simulator */}
          <div className="space-y-4">
            <div className="space-y-1 bg-zinc-50 p-3 rounded-xl border border-zinc-100">
              <span className="text-[10px] text-zinc-400 font-bold block uppercase">Margens Sugeridas p/ o Pote</span>
              <div className="flex justify-between text-xs text-zinc-600 pt-1">
                <span>Mínima (100% markup):</span>
                <span className="font-semibold text-[#3e2723]">R$ {finances.suggestedPriceMin.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-600">
                <span>Máxima (200% markup):</span>
                <span className="font-semibold text-[#3e2723]">R$ {finances.suggestedPriceMax.toFixed(2)}</span>
              </div>
            </div>

            {/* Custom pricing override */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-[#3e2723] block">Defina seu Preço Final de Venda:</span>
              <div className="flex gap-2.5">
                <div className="relative flex-1">
                  <span className="absolute left-2.5 top-2.5 text-xs text-zinc-400">R$</span>
                  <input
                    type="number"
                    step="0.10"
                    value={finances.selectedPrice.toFixed(2)}
                    onChange={(e) => setCustomPrice(Number(e.target.value))}
                    className="w-full pl-8 pr-2 py-2 bg-zinc-50 text-stone-850 hover:bg-zinc-100 select-all border border-zinc-200 text-xs rounded-xl focus:bg-white focus:outline-none"
                  />
                </div>
                {customPrice !== null && (
                  <button
                    onClick={() => setCustomPrice(null)}
                    className="text-xs px-2.5 py-1.5 text-zinc-500 border border-zinc-200 hover:text-[#3e2723] hover:bg-zinc-50 rounded-xl"
                  >
                    Restaurar Auto
                  </button>
                )}
              </div>
            </div>

            {/* Strategy feedback badge */}
            <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-3 flex gap-2">
              <Info className="w-5 h-5 text-[#115e59] shrink-0 mt-0.5" />
              <div className="space-y-0.5 text-emerald-950 text-[11px] font-normal leading-relaxed">
                <span><b>Sugestão de Mercado:</b></span>
                <p>Bolos de pote premium com morangos frescos vendem muito bem entre <b>R$ 8,00</b> e <b>R$ 12,00</b> dependendo da região e público.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
