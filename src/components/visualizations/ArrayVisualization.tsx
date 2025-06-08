import React from 'react';

interface ArrayVisualizationProps {
  data?: number[];
}

const ArrayVisualization: React.FC<ArrayVisualizationProps> = ({ 
  data = [12, 45, 23, 67, 89, 34, 56] 
}) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Array Structure
      </h4>
      <div className="flex justify-center items-center space-x-1 overflow-x-auto">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-mono">
              [{index}]
            </div>
            <div className="w-12 h-12 bg-white dark:bg-gray-600 border-2 border-indigo-300 dark:border-indigo-500 rounded-lg flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shadow-md group-hover:scale-110 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-600 transition-all duration-200">
              {value}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Elements stored in contiguous memory locations with O(1) access by index
        </p>
      </div>
    </div>
  );
};

export default ArrayVisualization;