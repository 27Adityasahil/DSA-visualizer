import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HashTableVisualizationProps {
  data?: { key: string; value: number }[];
}

const HashTableVisualization: React.FC<HashTableVisualizationProps> = ({ 
  data = [
    { key: 'apple', value: 5 },
    { key: 'banana', value: 3 },
    { key: 'orange', value: 8 },
    { key: 'grape', value: 12 }
  ]
}) => {
  const hashFunction = (key: string): number => {
    return key.length % 5;
  };

  const buckets = Array(5).fill(null).map(() => [] as typeof data);
  
  data.forEach(item => {
    const index = hashFunction(item.key);
    buckets[index].push(item);
  });

  return (
    <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Hash Table Structure
      </h4>
      <div className="space-y-3">
        {buckets.map((bucket, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-12 h-10 bg-orange-200 dark:bg-orange-800 border-2 border-orange-400 dark:border-orange-500 rounded-lg flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white">
              {index}
            </div>
            <ArrowRight className="h-4 w-4 text-orange-500" />
            <div className="flex space-x-2 flex-1">
              {bucket.length > 0 ? (
                bucket.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white dark:bg-gray-600 border border-orange-300 dark:border-orange-500 rounded-lg p-2 shadow-sm hover:scale-105 transition-transform duration-200">
                    <div className="text-xs text-gray-600 dark:text-gray-300">{item.key}</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{item.value}</div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-400 dark:text-gray-500 italic">empty</div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Hash function maps keys to array indices for O(1) average access
        </p>
      </div>
    </div>
  );
};

export default HashTableVisualization;