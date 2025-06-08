import { useState, useMemo } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DataStructureCard from './components/DataStructureCard';
import DataStructureModal from './components/DataStructureModal';
import { dataStructures } from './data/dataStructures';
import { DataStructure } from './types';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDataStructure, setSelectedDataStructure] = useState<DataStructure | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDataStructures = useMemo(() => {
    let filtered = dataStructures;

    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(ds => ds.category === selectedCategory);
    }

    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(ds =>
        ds.name.toLowerCase().includes(query) ||
        ds.description.toLowerCase().includes(query) ||
        ds.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
        ds.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const handleCardClick = (dataStructure: DataStructure) => {
    setSelectedDataStructure(dataStructure);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDataStructure(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header />
      
      <main>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Explore Data Structures
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Interactive visualizations and comprehensive guides to understanding fundamental data structures and their complexities.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <SearchBar
            onSearch={setSearchQuery}
            onFilter={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {searchQuery ? `Search Results` : selectedCategory === 'All' ? 'All Data Structures' : `${selectedCategory} Data Structures`}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {filteredDataStructures.length} structure{filteredDataStructures.length !== 1 ? 's' : ''} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
          </div>

          {filteredDataStructures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDataStructures.map((dataStructure) => (
                <DataStructureCard
                  key={dataStructure.id}
                  dataStructure={dataStructure}
                  onClick={() => handleCardClick(dataStructure)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No data structures found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your search query or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 DataStruct Explorer. Built for learning and exploration.
          </p>
          <div className="personal-info md:w-1/3 flex items-center justify-evenly m-auto pt-4">
            <div className="mx-8">
              <a href="https://www.instagram.com/saditya_27/?__pwa=1#" target='_blank' className=''> <FaInstagram className='text-2xl' /> </a>
            </div>
            <div className="btn mr-8">
              <a href="https://www.linkedin.com/in/adityar27/" target='_blank' className=''> <FaLinkedin className='text-2xl' /> </a>
            </div>
            <div className="btn">
              <a href="https://github.com/27Adityasahil" target='_blank' className=''> <FaGithub className='text-2xl' /> </a>
            </div>
          </div>
        </div>
      </footer>

      <DataStructureModal
        dataStructure={selectedDataStructure}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;