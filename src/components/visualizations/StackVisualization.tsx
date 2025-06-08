import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StackVisualizationProps {
  data?: number[];
}

const StackVisualization: React.FC<StackVisualizationProps> = ({ 
  data = [15, 25, 35, 45] 
}) => {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Stack Structure (LIFO)
      </h4>
      <div className="flex justify-center">
        <div className="relative">
          <div className="flex flex-col-reverse space-y-reverse space-y-1">
            {data.map((value, index) => (
              <div key={index} className="relative group">
                <div className="w-24 h-12 bg-white dark:bg-gray-600 border-2 border-purple-300 dark:border-purple-500 rounded-lg flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shadow-md group-hover:scale-105 group-hover:bg-purple-100 dark:group-hover:bg-purple-600 transition-all duration-200">
                  {value}
                </div>
                {index === data.length - 1 && (
                  <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <ArrowUp className="h-4 w-4 text-purple-500 animate-bounce" />
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">TOP</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-center space-x-4">
            <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-300">
              <ArrowUp className="h-3 w-3 text-green-500" />
              <span>PUSH</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-300">
              <ArrowDown className="h-3 w-3 text-red-500" />
              <span>POP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Last In, First Out - Operations only at the top
        </p>
      </div>
    </div>
  );
};

export default StackVisualization;