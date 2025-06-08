import React from 'react';
import { X, Clock, Space, TrendingUp, TrendingDown, Info } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { DataStructure } from '../types';
import ArrayVisualization from './visualizations/ArrayVisualization';
import LinkedListVisualization from './visualizations/LinkedListVisualization';
import StackVisualization from './visualizations/StackVisualization';
import QueueVisualization from './visualizations/QueueVisualization';
import BinaryTreeVisualization from './visualizations/BinaryTreeVisualization';
import HashTableVisualization from './visualizations/HashTableVisualization';
import GraphVisualization from './visualizations/GraphVisualization';
import TrieVisualization from './visualizations/TrieVisualization';
import HeapVisualization from './visualizations/HeapVisualization';

interface DataStructureModalProps {
  dataStructure: DataStructure | null;
  isOpen: boolean;
  onClose: () => void;
}

const DataStructureModal: React.FC<DataStructureModalProps> = ({ dataStructure, isOpen, onClose }) => {
  if (!isOpen || !dataStructure) return null;

  const IconComponent = (LucideIcons as any)[dataStructure.icon] || LucideIcons.Box;

  const getComplexityColor = (complexity: string) => {
    if (complexity.includes('1')) return 'text-green-500';
    if (complexity.includes('log')) return 'text-yellow-500';
    if (complexity.includes('n²') || complexity.includes('n^2')) return 'text-red-500';
    return 'text-orange-500';
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

  const renderVisualization = () => {
    switch (dataStructure.id) {
      case 'array':
        return <ArrayVisualization />;
      case 'linked-list':
        return <LinkedListVisualization />;
      case 'stack':
        return <StackVisualization />;
      case 'queue':
        return <QueueVisualization />;
      case 'binary-tree':
      case 'binary-search-tree':
        return <BinaryTreeVisualization />;
      case 'heap':
        return <HeapVisualization />;
      case 'hash-table':
        return <HashTableVisualization />;
      case 'graph':
        return <GraphVisualization />;
      case 'trie':
        return <TrieVisualization />;
      default:
        return (
          <div className="flex items-center justify-center h-32 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
            <div className="text-center">
              <IconComponent className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Visualization coming soon
              </p>
            </div>
          </div>
        );
    }
  };

  const useCases = {
    array: ['Static data storage', 'Mathematical operations', 'Image processing', 'Database indexing'],
    'linked-list': ['Dynamic memory allocation', 'Undo functionality', 'Music playlists', 'Browser history'],
    stack: ['Function call management', 'Expression evaluation', 'Undo/Redo operations', 'Browser back button'],
    queue: ['Process scheduling', 'Breadth-first search', 'Print job management', 'Handling requests'],
    'binary-tree': ['File systems', 'Expression parsing', 'Huffman coding', 'Decision trees'],
    'binary-search-tree': ['Database indexing', 'File compression', 'Expression trees', 'Priority queues'],
    heap: ['Priority queues', 'Heap sort algorithm', 'Graph algorithms', 'Job scheduling'],
    'hash-table': ['Database indexing', 'Caching systems', 'Symbol tables', 'Password storage'],
    graph: ['Social networks', 'GPS navigation', 'Web crawling', 'Network routing'],
    trie: ['Autocomplete systems', 'Spell checkers', 'IP routing', 'Dictionary lookups']
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="inline-block w-full max-w-6xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl animate-slide-up">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
                <IconComponent className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {dataStructure.name}
                </h2>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(dataStructure.category)}`}>
                  {dataStructure.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Left Column - Description and Visualization */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-indigo-500" />
                  Description
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {dataStructure.description}
                </p>
              </div>

              {/* Interactive Visualization */}
              <div>
                <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
                  Interactive Visualization
                </h4>
                {renderVisualization()}
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Time Complexity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-indigo-500" />
                  Time Complexity
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: 'Insertion', value: dataStructure.complexity.timeInsert, icon: TrendingUp },
                    { label: 'Search', value: dataStructure.complexity.timeSearch, icon: Clock },
                    { label: 'Deletion', value: dataStructure.complexity.timeDelete, icon: TrendingDown }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.label}
                        </span>
                      </div>
                      <span className={`text-sm font-mono font-bold ${getComplexityColor(item.value)}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Space Complexity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Space className="h-5 w-5 mr-2 text-indigo-500" />
                  Space Complexity
                </h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <span className={`text-xl font-mono font-bold ${getComplexityColor(dataStructure.complexity.space)}`}>
                    {dataStructure.complexity.space}
                  </span>
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Common Use Cases
                </h3>
                <div className="space-y-2">
                  {(useCases[dataStructure.id as keyof typeof useCases] || ['General purpose data storage']).map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Keywords & Concepts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {dataStructure.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors cursor-default"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructureModal;