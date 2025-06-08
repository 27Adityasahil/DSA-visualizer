import { DataStructure } from '../types';

export const dataStructures: DataStructure[] = [
  {
    id: 'array',
    name: 'Array',
    description: 'A collection of elements stored in contiguous memory locations, providing fast access by index.',
    category: 'Linear',
    complexity: {
      timeInsert: 'O(n)',
      timeSearch: 'O(n)',
      timeDelete: 'O(n)',
      space: 'O(n)'
    },
    keywords: ['linear', 'index', 'contiguous', 'random access', 'static'],
    icon: 'Grid3X3'
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    description: 'A linear data structure where elements are stored in nodes, each containing data and a pointer to the next node.',
    category: 'Linear',
    complexity: {
      timeInsert: 'O(1)',
      timeSearch: 'O(n)',
      timeDelete: 'O(1)',
      space: 'O(n)'
    },
    keywords: ['linear', 'pointer', 'node', 'dynamic', 'sequential'],
    icon: 'ArrowRight'
  },
  {
    id: 'stack',
    name: 'Stack',
    description: 'A Last-In-First-Out (LIFO) data structure that allows insertion and deletion from one end only.',
    category: 'Linear',
    complexity: {
      timeInsert: 'O(1)',
      timeSearch: 'O(n)',
      timeDelete: 'O(1)',
      space: 'O(n)'
    },
    keywords: ['lifo', 'push', 'pop', 'top', 'recursive'],
    icon: 'Layers3'
  },
  {
    id: 'queue',
    name: 'Queue',
    description: 'A First-In-First-Out (FIFO) data structure that allows insertion at rear and deletion from front.',
    category: 'Linear',
    complexity: {
      timeInsert: 'O(1)',
      timeSearch: 'O(n)',
      timeDelete: 'O(1)',
      space: 'O(n)'
    },
    keywords: ['fifo', 'enqueue', 'dequeue', 'front', 'rear'],
    icon: 'ArrowRightLeft'
  },
  {
    id: 'binary-tree',
    name: 'Binary Tree',
    description: 'A hierarchical data structure where each node has at most two children, referred to as left and right child.',
    category: 'Tree',
    complexity: {
      timeInsert: 'O(log n)',
      timeSearch: 'O(log n)',
      timeDelete: 'O(log n)',
      space: 'O(n)'
    },
    keywords: ['hierarchical', 'node', 'left', 'right', 'root', 'leaf'],
    icon: 'GitBranch'
  },
  {
    id: 'binary-search-tree',
    name: 'Binary Search Tree',
    description: 'A binary tree where the left subtree contains nodes with values less than the root, and right subtree contains greater values.',
    category: 'Tree',
    complexity: {
      timeInsert: 'O(log n)',
      timeSearch: 'O(log n)',
      timeDelete: 'O(log n)',
      space: 'O(n)'
    },
    keywords: ['binary', 'search', 'ordered', 'sorted', 'efficient'],
    icon: 'Search'
  },
  {
    id: 'heap',
    name: 'Heap',
    description: 'A complete binary tree that satisfies the heap property where parent nodes are greater (max-heap) or smaller (min-heap) than children.',
    category: 'Tree',
    complexity: {
      timeInsert: 'O(log n)',
      timeSearch: 'O(n)',
      timeDelete: 'O(log n)',
      space: 'O(n)'
    },
    keywords: ['complete', 'priority', 'max', 'min', 'heapify'],
    icon: 'Triangle'
  },
  {
    id: 'hash-table',
    name: 'Hash Table',
    description: 'A data structure that implements an associative array using a hash function to compute an index for key-value pairs.',
    category: 'Hash',
    complexity: {
      timeInsert: 'O(1)',
      timeSearch: 'O(1)',
      timeDelete: 'O(1)',
      space: 'O(n)'
    },
    keywords: ['hash', 'key', 'value', 'collision', 'bucket', 'map'],
    icon: 'Hash'
  },
  {
    id: 'graph',
    name: 'Graph',
    description: 'A non-linear data structure consisting of vertices (nodes) connected by edges, representing relationships between entities.',
    category: 'Graph',
    complexity: {
      timeInsert: 'O(1)',
      timeSearch: 'O(V + E)',
      timeDelete: 'O(V + E)',
      space: 'O(V + E)'
    },
    keywords: ['vertex', 'edge', 'adjacency', 'directed', 'undirected', 'weighted'],
    icon: 'Network'
  },
  {
    id: 'trie',
    name: 'Trie',
    description: 'A tree-like data structure used to store a dynamic set of strings, where each path represents a word or prefix.',
    category: 'Tree',
    complexity: {
      timeInsert: 'O(m)',
      timeSearch: 'O(m)',
      timeDelete: 'O(m)',
      space: 'O(ALPHABET_SIZE * N * M)'
    },
    keywords: ['prefix', 'string', 'autocomplete', 'dictionary', 'word'],
    icon: 'Type'
  }
];