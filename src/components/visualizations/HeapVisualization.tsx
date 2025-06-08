import React from 'react';

interface HeapVisualizationProps {
  data?: number[];
  type?: 'max' | 'min';
}

const HeapVisualization: React.FC<HeapVisualizationProps> = ({ 
  data = [90, 80, 70, 60, 50, 40, 30],
  type = 'max'
}) => {
  const getLevel = (index: number): number => Math.floor(Math.log2(index + 1));
  const maxLevel = getLevel(data.length - 1);

  const renderHeapLevel = (level: number) => {
    const startIndex = Math.pow(2, level) - 1;
    const endIndex = Math.min(Math.pow(2, level + 1) - 1, data.length);
    const nodesInLevel = endIndex - startIndex;
    
    return (
      <div key={level} className="flex justify-center items-center space-x-4 mb-4">
        {Array.from({ length: nodesInLevel }, (_, i) => {
          const nodeIndex = startIndex + i;
          const value = data[nodeIndex];
          const isRoot = nodeIndex === 0;
          
          return (
            <div key={nodeIndex} className="flex flex-col items-center group">
              <div className={`w-12 h-12 ${isRoot ? 'bg-gradient-to-r from-red-500 to-pink-500' : type === 'max' ? 'bg-orange-500 dark:bg-orange-400' : 'bg-blue-500 dark:bg-blue-400'} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-all duration-200 cursor-pointer ${isRoot ? 'ring-2 ring-red-300 dark:ring-red-600' : ''}`}>
                {value}
              </div>
              {isRoot && (
                <div className="text-xs text-red-600 dark:text-red-400 font-medium mt-1">
                  ROOT
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        {type === 'max' ? 'Max' : 'Min'} Heap Structure
      </h4>
      <div className="flex flex-col items-center">
        {Array.from({ length: maxLevel + 1 }, (_, level) => renderHeapLevel(level))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Complete binary tree with {type === 'max' ? 'parent ≥ children' : 'parent ≤ children'} property
        </p>
      </div>
    </div>
  );
};

export default HeapVisualization;