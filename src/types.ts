export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'premium' | 'tradicional' | 'sucesso';
  description: string;
  prepTime: string;
  yield: string; // e.g. "10 potes de 250ml"
  image: string; // standard illustration reference or category icon
  ingredients: Ingredient[];
  instructions: string[];
  secrets: string[];
}

export interface CostItem {
  id: string;
  name: string;
  cost: number; // price paid
  purchasedAmount: number; // e.g. 1000
  unit: 'g' | 'ml' | 'un' | 'kg' | 'L';
  amountNeeded: number; // amount used in the recipe batch
}

export interface CalculationResult {
  totalBatchCost: number;
  costPerPot: number;
  suggestedPriceMin: number;
  suggestedPriceMax: number;
  selectedPrice: number;
  profitPerPot: number;
  totalBatchProfit: number;
}

export interface LabelData {
  title: string;
  subtitle: string;
  flavor: string;
  phone: string;
  instagram: string;
  madeDate: string;
  expiryDate: string;
  extraInfo: string;
  qtyToPrint: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  achievement: string;
  avatar: string;
  comment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
