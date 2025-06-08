import React from 'react';
import { Clock, Space, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { DataStructure } from '../types';

interface DataStructureCardProps {
  dataStructure: DataStructure;
  onClick: () => void;
}

const DataStructureCard: React.FC<DataStructureCardProps> = ({ dataStructure, onClick }) => {
  const IconComponent = (LucideIcons as any)[dataStructure.icon] || LucideIcons.Box;

  const getComplexityColor = (complexity: string) => {
    if (complexity.includes('1')) return 'text-green-500';
    if (complexity.includes('log')) return 'text-yellow-500';
    if (complexity.includes('n²') || complexity.includes('n^2')) return 'text-red-500';
    return 'text-orange-500';
  };

  const getComplexityIcon = (complexity: string) => {
    if (complexity.includes('1')) return TrendingDown;
    if (complexity.includes('log')) return Minus;
    return TrendingUp;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Linear': return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case 'Tree': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Graph': return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      case 'Hash': return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
      default: return 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden hover:scale-105"
    >
      
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform duration-200">
              <IconComponent className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {dataStructure.name}
              </h3>
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(dataStructure.category)}`}>
                {dataStructure.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {dataStructure.description}
        </p>

        {/* Complexity Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Insert', value: dataStructure.complexity.timeInsert, icon: TrendingUp },
            { label: 'Search', value: dataStructure.complexity.timeSearch, icon: Clock },
            { label: 'Delete', value: dataStructure.complexity.timeDelete, icon: TrendingDown },
            { label: 'Space', value: dataStructure.complexity.space, icon: Space }
          ].map((item) => {
            const ComplexityIcon = getComplexityIcon(item.value);
            return (
              <div key={item.label} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <item.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 dark:text-gray-400">{item.label}</div>
                  <div className={`text-sm font-mono font-semibold ${getComplexityColor(item.value)}`}>
                    {item.value}
                  </div>
                </div>
                <ComplexityIcon className={`h-3 w-3 ${getComplexityColor(item.value)}`} />
              </div>
            );
          })}
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-1">
          {dataStructure.keywords.slice(0, 4).map((keyword) => (
            <span
              key={keyword}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              {keyword}
            </span>
          ))}
          {dataStructure.keywords.length > 4 && (
            <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
              +{dataStructure.keywords.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default DataStructureCard;