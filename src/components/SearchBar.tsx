import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { dataStructures } from '../data/dataStructures';
import { SearchSuggestion } from '../types';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  selectedCategory: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilter, selectedCategory }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Linear', 'Non-Linear', 'Tree', 'Graph', 'Hash'];

  useEffect(() => {
    if (query.length > 1) {
      const filteredSuggestions: SearchSuggestion[] = [];
      
      // Add matching data structures
      dataStructures.forEach(ds => {
        if (ds.name.toLowerCase().includes(query.toLowerCase())) {
          filteredSuggestions.push({
            id: `structure-${ds.id}`,
            text: ds.name,
            type: 'structure'
          });
        }
        
        // Add matching keywords
        ds.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(query.toLowerCase()) && 
              !filteredSuggestions.some(s => s.text.toLowerCase() === keyword.toLowerCase())) {
            filteredSuggestions.push({
              id: `keyword-${keyword}`,
              text: keyword,
              type: 'operation'
            });
          }
        });
      });

      // Add matching categories
      categories.forEach(category => {
        if (category.toLowerCase().includes(query.toLowerCase()) && category !== 'All') {
          filteredSuggestions.push({
            id: `category-${category}`,
            text: category,
            type: 'category'
          });
        }
      });

      setSuggestions(filteredSuggestions.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setShowFilters(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    onSearch(suggestion.text);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div ref={searchRef} className="relative">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => query.length > 1 && setShowSuggestions(true)}
            placeholder="Search data structures, operations, or concepts..."
            className="w-full pl-12 pr-20 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg transition-all duration-200"
          />
          <div className="absolute inset-y-0 right-0 flex items-center space-x-2 pr-4">
            {query && (
              <button
                onClick={clearSearch}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2 rounded-lg transition-colors ${
                selectedCategory !== 'All' || showFilters
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400'
              }`}
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-10 overflow-hidden">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3"
              >
                <div className={`w-2 h-2 rounded-full ${
                  suggestion.type === 'structure' ? 'bg-indigo-500' :
                  suggestion.type === 'category' ? 'bg-emerald-500' : 'bg-orange-500'
                }`} />
                <span className="text-gray-900 dark:text-white">{suggestion.text}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                  {suggestion.type}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Filter Dropdown */}
        {showFilters && (
          <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-10 overflow-hidden min-w-48">
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Filter by Category</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onFilter(category);
                  setShowFilters(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters */}
      {selectedCategory !== 'All' && (
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Active filter:</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
            {selectedCategory}
            <button
              onClick={() => onFilter('All')}
              className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;