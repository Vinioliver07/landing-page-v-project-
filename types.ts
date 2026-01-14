
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  tier: 'express' | 'standard' | 'premium' | 'enterprise';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
