import React, { useState } from 'react';
import { Recipe } from '../types';
import { RECIPES } from '../data';
import { Search, Clock, Award, CheckSquare, Square, Lightbulb, Users, ListFilter } from 'lucide-react';

export default function InteractiveBook() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(RECIPES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Ingredient scaling state: multipliers for recipes
  const [recipeMultipliers, setRecipeMultipliers] = useState<Record<string, number>>({
    'ninho-morango': 1,
    'prestigio': 1,
    'brigadeiro-belga': 1,
    'limao-gourmet': 1,
    'red-velvet': 1,
  });

  // Checked items state
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const selectedRecipe = RECIPES.find(r => r.id === selectedRecipeId) || RECIPES[0];

  const handleScaleChange = (recipeId: string, amount: number) => {
    setRecipeMultipliers(prev => {
      const current = prev[recipeId] || 1;
      const next = Math.max(1, Math.min(10, current + amount));
      return { ...prev, [recipeId]: next };
    });
  };

  const toggleIngredient = (id: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleStep = (stepIndex: number, recipeId: string) => {
    const key = `${recipeId}-${stepIndex}`;
    setCompletedSteps(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetRecipeToggles = (recipeId: string) => {
    // Clear check states relative to recipe's ingredients and steps
    const updatedIngredients = { ...checkedIngredients };
    const updatedSteps = { ...completedSteps };
    
    selectedRecipe.ingredients.forEach(ing => {
      delete updatedIngredients[`${recipeId}-${ing.id}`];
    });
    
    selectedRecipe.instructions.forEach((_, idx) => {
      delete updatedSteps[`${recipeId}-${idx}`];
    });

    setCheckedIngredients(updatedIngredients);
    setCompletedSteps(updatedSteps);
  };

  const multiplier = recipeMultipliers[selectedRecipe.id] || 1;

  // Filter recipes
  const filteredRecipes = RECIPES.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'all' || recipe.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  // Helper to extract base number from yield string
  const baseYieldVal = parseInt(selectedRecipe.yield.match(/\d+/)?.[0] || '10', 10);
  const scaledYield = baseYieldVal * multiplier;
  const yieldUnit = selectedRecipe.yield.replace(/^\d+/, '').trim();

  return (
    <div className="space-y-6">
      {/* Search & Filter Header */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-cream-200">
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar receita..."
            className="w-full pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-stone-850 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
          />
        </div>
        
        {/* Category Toggles */}
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'Todas' },
            { id: 'sucesso', label: 'Mais Vendidas' },
            { id: 'premium', label: 'Premium' },
            { id: 'tradicional', label: 'Tradicionais' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition ${
                activeCategory === cat.id
                  ? 'bg-[#3e2723] text-white shadow-xs'
                  : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Recipe Selector List */}
        <div className="lg:col-span-4 space-y-3 max-h-[600px] overflow-y-auto pr-1">
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-2xl border border-zinc-200 text-zinc-400 text-xs">
              Nenhuma receita encontrada com esse filtro.
            </div>
          ) : (
            filteredRecipes.map(recipe => {
              const isSelected = recipe.id === selectedRecipeId;
              return (
                <button
                  key={recipe.id}
                  id={`recipe-card-${recipe.id}`}
                  onClick={() => setSelectedRecipeId(recipe.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition duration-150 cursor-pointer flex gap-4 ${
                    isSelected
                      ? 'border-[#3e2723] bg-amber-50/20 shadow-xs'
                      : 'border-zinc-100 hover:border-zinc-300 bg-white'
                  }`}
                >
                  <span className="text-3xl shrink-0 p-2.5 bg-cream-100 rounded-xl select-none flex items-center justify-center">
                    {recipe.image}
                  </span>
                  <div className="space-y-1 overflow-hidden">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                        recipe.category === 'sucesso' ? 'bg-rose-100 text-rose-700' :
                        recipe.category === 'premium' ? 'bg-amber-100 text-amber-800' :
                        'bg-zinc-100 text-zinc-700'
                      }`}>
                        {recipe.category === 'sucesso' ? 'Bestseller' : recipe.category}
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-[#3e2723] text-sm truncate">{recipe.title}</h4>
                    
                    <div className="flex gap-3 text-[10px] text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {recipe.prepTime}
                      </span>
                      <span>•</span>
                      <span>{recipe.yield}</span>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Right Side: Active Recipe Workspace */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-cream-200 p-5 sm:p-6 space-y-6 shadow-sm">
          {selectedRecipe ? (
            <div className="space-y-6">
              {/* Recipe Meta Header */}
              <div className="border-b border-zinc-100 pb-5 space-y-3">
                <div className="flex items-center justify-between gap-1 flex-wrap">
                  <span className="text-xs font-semibold text-amber-700 flex items-center gap-1">
                    <Award className="w-4 h-4" /> Receita Oficial Kleber Camargo
                  </span>
                  <button
                    onClick={() => resetRecipeToggles(selectedRecipe.id)}
                    className="text-xs text-zinc-400 hover:text-zinc-600 transition underline cursor-pointer"
                  >
                    Resetar Progresso
                  </button>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-4xl p-3 bg-rose-50 rounded-2xl select-none inline-block">
                    {selectedRecipe.image}
                  </span>
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#3e2723]">{selectedRecipe.title}</h2>
                    <p className="text-xs text-zinc-500 leading-relaxed font-normal">{selectedRecipe.description}</p>
                  </div>
                </div>

                {/* Scaling block */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-zinc-50 p-3 rounded-xl gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#3e2723]">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    <span>Preparo: <b className="font-bold">{selectedRecipe.prepTime}</b></span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-500 flex items-center gap-1 font-semibold">
                      <Users className="w-4 h-4" /> Porções sugeridas:
                    </span>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-zinc-200">
                      <button
                        onClick={() => handleScaleChange(selectedRecipe.id, -1)}
                        className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center font-bold text-xs text-zinc-600 hover:bg-zinc-200 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-[#3e2723] w-12 text-center">
                        {scaledYield} {yieldUnit.replace('potes de', 'potes')}
                      </span>
                      <button
                        onClick={() => handleScaleChange(selectedRecipe.id, 1)}
                        className="w-5 h-5 bg-zinc-100 rounded flex items-center justify-center font-bold text-xs text-zinc-600 hover:bg-zinc-200 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ingredients Shopping Checklist */}
              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#3e2723] flex items-center gap-2">
                  <ListFilter className="w-4.5 h-4.5 text-amber-700 font-bold" />
                  <span>Ingredientes Necessários <span className="text-xs text-zinc-400 font-normal">(Clique para riscar o que já comprou)</span></span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedRecipe.ingredients.map(ing => {
                    const uniqueKey = `${selectedRecipe.id}-${ing.id}`;
                    const isChecked = !!checkedIngredients[uniqueKey];
                    // Multiplied amount
                    const calculatedAmount = ing.amount * multiplier;
                    
                    return (
                      <button
                        key={ing.id}
                        type="button"
                        onClick={() => toggleIngredient(uniqueKey)}
                        className={`flex items-center gap-3 p-2.5 rounded-xl border text-left cursor-pointer transition duration-100 ${
                          isChecked
                            ? 'bg-zinc-50 border-zinc-200 text-zinc-400 line-through'
                            : 'bg-white border-zinc-100 hover:border-zinc-300 text-stone-850'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <Square className="w-4 h-4 text-zinc-300 shrink-0" />
                        )}
                        <span className="text-xs">
                          <b className="font-semibold text-[#5d4037]">
                            {calculatedAmount} {ing.unit}
                          </b>{' '}
                          of {ing.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Steps To Produce */}
              <div className="space-y-3">
                <h3 className="font-bold text-base text-[#3e2723]">Modo de Preparo</h3>
                <div className="space-y-2.5">
                  {selectedRecipe.instructions.map((step, idx) => {
                    const completedKey = `${selectedRecipe.id}-${idx}`;
                    const isDone = !!completedSteps[completedKey];
                    
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleStep(idx, selectedRecipe.id)}
                        className={`flex gap-3.5 p-3 rounded-2xl border transition cursor-pointer ${
                          isDone
                            ? 'bg-zinc-50 border-zinc-200 text-zinc-400 line-through opacity-75'
                            : 'bg-cream-100/20 border-cream-200/50 hover:bg-cream-100/40 text-stone-850'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs ${
                          isDone ? 'bg-zinc-200 text-zinc-500' : 'bg-amber-600 text-white'
                        }`}>
                          {idx + 1}
                        </span>
                        
                        <p className="text-xs leading-relaxed font-normal pt-0.5">{step}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Secrets Card */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200/80 p-4 space-y-2.5">
                <h4 className="text-xs font-extrabold text-[#3e2723] uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Segredinhos Importantes do Chefe</span>
                </h4>
                <ul className="space-y-1.5 pr-2">
                  {selectedRecipe.secrets.map((secret, idx) => (
                    <li key={idx} className="text-xs text-amber-950 font-normal leading-relaxed list-disc list-inside">
                      {secret}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-zinc-400">
              Selecione uma receita ao lado para ver os detalhes.
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
