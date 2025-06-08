import React from 'react';

interface GraphVisualizationProps {
  data?: {
    nodes: { id: string; label: string; x: number; y: number }[];
    edges: { from: string; to: string }[];
  };
}

const GraphVisualization: React.FC<GraphVisualizationProps> = ({ 
  data = {
    nodes: [
      { id: 'A', label: 'A', x: 50, y: 20 },
      { id: 'B', label: 'B', x: 20, y: 60 },
      { id: 'C', label: 'C', x: 80, y: 60 },
      { id: 'D', label: 'D', x: 50, y: 100 }
    ],
    edges: [
      { from: 'A', to: 'B' },
      { from: 'A', to: 'C' },
      { from: 'B', to: 'D' },
      { from: 'C', to: 'D' }
    ]
  }
}) => {
  const getNodePosition = (nodeId: string) => {
    const node = data.nodes.find(n => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
        Graph Structure
      </h4>
      <div className="relative w-full h-40 bg-white dark:bg-gray-600 rounded-lg border-2 border-purple-200 dark:border-purple-500 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full">
          {/* Render edges */}
          {data.edges.map((edge, index) => {
            const fromPos = getNodePosition(edge.from);
            const toPos = getNodePosition(edge.to);
            return (
              <line
                key={index}
                x1={`${fromPos.x}%`}
                y1={`${fromPos.y}%`}
                x2={`${toPos.x}%`}
                y2={`${toPos.y}%`}
                stroke="rgb(147 51 234)"
                strokeWidth="2"
                className="animate-pulse"
              />
            );
          })}
        </svg>
        
        {/* Render nodes */}
        {data.nodes.map((node) => (
          <div
            key={node.id}
            className="absolute w-8 h-8 bg-purple-500 dark:bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg hover:scale-125 hover:bg-purple-600 dark:hover:bg-purple-300 transition-all duration-200 cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Vertices connected by edges representing relationships
        </p>
      </div>
    </div>
  );
};

export default GraphVisualization;