import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface QueueVisualizationProps {
  data?: number[];
}

const QueueVisualization: React.FC<QueueVisualizationProps> = ({ 
  data = [8, 16, 24, 32, 40] 
}) => {
  return (
    <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Queue Structure (FIFO)
      </h4>
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-1">
          <div className="flex flex-col items-center mr-4">
            <ArrowRight className="h-5 w-5 text-green-500 animate-pulse mb-1" />
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">ENQUEUE</span>
          </div>
          
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {index === 0 ? 'FRONT' : index === data.length - 1 ? 'REAR' : ''}
              </div>
              <div className="w-12 h-12 bg-white dark:bg-gray-600 border-2 border-yellow-300 dark:border-yellow-500 rounded-lg flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shadow-md group-hover:scale-110 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-600 transition-all duration-200">
                {value}
              </div>
            </div>
          ))}
          
          <div className="flex flex-col items-center ml-4">
            <ArrowLeft className="h-5 w-5 text-red-500 animate-pulse mb-1" />
            <span className="text-xs text-red-600 dark:text-red-400 font-medium">DEQUEUE</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          First In, First Out - Insert at rear, remove from front
        </p>
      </div>
    </div>
  );
};

export default QueueVisualization;