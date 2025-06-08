import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LinkedListVisualizationProps {
  data?: number[];
}

const LinkedListVisualization: React.FC<LinkedListVisualizationProps> = ({ 
  data = [10, 20, 30, 40, 50] 
}) => {
  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Linked List Structure
      </h4>
      <div className="flex justify-center items-center space-x-2 overflow-x-auto">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center group">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Node {index + 1}
              </div>
              <div className="bg-white dark:bg-gray-600 border-2 border-green-300 dark:border-green-500 rounded-lg p-3 shadow-md group-hover:scale-105 transition-all duration-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-700 rounded flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white">
                    {value}
                  </div>
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-500 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            {index < data.length - 1 && (
              <ArrowRight className="h-5 w-5 text-green-500 dark:text-green-400 animate-pulse" />
            )}
          </React.Fragment>
        ))}
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">NULL</div>
          <div className="w-8 h-8 bg-red-100 dark:bg-red-900 border-2 border-red-300 dark:border-red-500 rounded flex items-center justify-center">
            <span className="text-xs text-red-600 dark:text-red-400">∅</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Dynamic structure with nodes containing data and pointer to next node
        </p>
      </div>
    </div>
  );
};

export default LinkedListVisualization;