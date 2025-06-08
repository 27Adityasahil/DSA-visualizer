import React from 'react';

interface TrieNode {
  char: string;
  isEnd: boolean;
  children: TrieNode[];
}

interface TrieVisualizationProps {
  data?: TrieNode;
}

const TrieVisualization: React.FC<TrieVisualizationProps> = ({ 
  data = {
    char: '',
    isEnd: false,
    children: [
      {
        char: 'C',
        isEnd: false,
        children: [
          {
            char: 'A',
            isEnd: false,
            children: [
              { char: 'T', isEnd: true, children: [] },
              { char: 'R', isEnd: true, children: [] }
            ]
          }
        ]
      },
      {
        char: 'D',
        isEnd: false,
        children: [
          {
            char: 'O',
            isEnd: false,
            children: [
              { char: 'G', isEnd: true, children: [] }
            ]
          }
        ]
      }
    ]
  }
}) => {
  const renderNode = (node: TrieNode, level: number = 0): JSX.Element => {
    return (
      <div className="flex flex-col items-center">
        {node.char && (
          <div className={`w-8 h-8 ${node.isEnd ? 'bg-green-500 dark:bg-green-400' : 'bg-blue-500 dark:bg-blue-400'} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg hover:scale-110 transition-all duration-200 cursor-pointer ${node.isEnd ? 'ring-2 ring-green-300 dark:ring-green-600' : ''}`}>
            {node.char}
          </div>
        )}
        {node.children.length > 0 && (
          <div className="flex mt-4 space-x-4">
            {node.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center">
                {node.char && <div className="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>}
                {renderNode(child, level + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Trie Structure
      </h4>
      <div className="flex justify-center overflow-x-auto">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-400 dark:bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            ∅
          </div>
          <div className="flex mt-4 space-x-8">
            {data.children.map((child, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>
                {renderNode(child)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Character</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded-full ring-1 ring-green-300"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Word End</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Prefix tree for efficient string storage and retrieval
        </p>
      </div>
    </div>
  );
};

export default TrieVisualization;