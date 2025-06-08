export interface DataStructure {
  id: string;
  name: string;
  description: string;
  category: 'Linear' | 'Non-Linear' | 'Tree' | 'Graph' | 'Hash';
  complexity: {
    timeInsert: string;
    timeSearch: string;
    timeDelete: string;
    space: string;
  };
  keywords: string[];
  icon: string;
}

export interface SearchSuggestion {
  id: string;
  text: string;
  type: 'structure' | 'category' | 'operation';
}