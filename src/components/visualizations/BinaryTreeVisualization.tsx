import React from 'react';

interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

interface BinaryTreeVisualizationProps {
  data?: TreeNode;
}

const BinaryTreeVisualization: React.FC<BinaryTreeVisualizationProps> = ({ 
  data = {
    value: 50,
    left: {
      value: 30,
      left: { value: 20 },
      right: { value: 40 }
    },
    right: {
      value: 70,
      left: { value: 60 },
      right: { value: 80 }
    }
  }
}) => {
  const renderNode = (node: TreeNode | undefined, level: number = 0): JSX.Element | null => {
    if (!node) return null;

    return (
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-white dark:bg-gray-600 border-2 border-green-400 dark:border-green-500 rounded-full flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white shadow-lg hover:scale-110 hover:bg-green-100 dark:hover:bg-green-600 transition-all duration-200 cursor-pointer">
          {node.value}
        </div>
        {(node.left || node.right) && (
          <div className="flex mt-4 space-x-8">
            <div className="flex flex-col items-center">
              {node.left && (
                <>
                  <div className="w-px h-6 bg-green-400 dark:bg-green-500"></div>
                  <div className="w-8 h-px bg-green-400 dark:bg-green-500 -ml-4"></div>
                  {renderNode(node.left, level + 1)}
                </>
              )}
            </div>
            <div className="flex flex-col items-center">
              {node.right && (
                <>
                  <div className="w-px h-6 bg-green-400 dark:bg-green-500"></div>
                  <div className="w-8 h-px bg-green-400 dark:bg-green-500 ml-4"></div>
                  {renderNode(node.right, level + 1)}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Binary Tree Structure
      </h4>
      <div className="flex justify-center overflow-x-auto">
        {renderNode(data)}
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Hierarchical structure with at most two children per node
        </p>
      </div>
    </div>
  );
};

export default BinaryTreeVisualization;