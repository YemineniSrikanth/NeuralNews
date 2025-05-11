import React from 'react';
import { categories } from '../utils/mockData';
import { Home, Globe, Newspaper, TrendingUp, Bookmark, Settings, X } from 'lucide-react';

export default function Sidebar({ activeCategory, setActiveCategory, isOpen, closeSidebar }) {
  const getCategoryIcon = (categoryId, size = 18) => {
    switch (categoryId) {
      case 'technology':
        return <div className="text-primary-500"><Globe size={size} /></div>;
      case 'business':
        return <div className="text-accent-600"><TrendingUp size={size} /></div>;
      case 'entertainment':
        return <div className="text-secondary-500"><Newspaper size={size} /></div>;
      default:
        return <div className="text-gray-500"><Newspaper size={size} /></div>;
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    closeSidebar();
  };

  return (
    <>
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closeSidebar}
        />
      )}

      <aside 
        className={`
          fixed md:sticky top-0 h-screen z-30 md:z-0 w-64 bg-white dark:bg-gray-900 shadow-lg md:shadow-none
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full p-4">
          <div className="md:hidden flex justify-end mb-4">
            <button 
              onClick={closeSidebar}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close sidebar"
            >
              <X size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2 mb-8 px-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-500 dark:to-secondary-500">
              NeuralNews
            </h1>
          </div>

          <nav className="flex-1 space-y-1">
            <p className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Main
            </p>
            
            <button 
              onClick={() => handleCategoryClick('all')}
              className={`
                w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                ${activeCategory === 'all' 
                  ? 'bg-primary-50 dark:bg-gray-800 text-primary-700 dark:text-primary-400 font-medium' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}
              `}
            >
              <Home size={18} className="mr-3" />
              <span>Home</span>
            </button>
            
            <button 
              className="w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <TrendingUp size={18} className="mr-3" />
              <span>Trending</span>
            </button>
            
            <button 
              className="w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Bookmark size={18} className="mr-3" />
              <span>Bookmarks</span>
            </button>
            
            <div className="pt-4 pb-2">
              <p className="px-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Categories
              </p>
            </div>
            
            {categories.filter(cat => cat.id !== 'all').map(category => (
              <button 
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`
                  w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-primary-50 dark:bg-gray-800 text-primary-700 dark:text-primary-400 font-medium' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}
                `}
              >
                {getCategoryIcon(category.id)}
                <span className="ml-3">{category.name}</span>
              </button>
            ))}
          </nav>
          
          <div className="pt-4 mt-auto">
            <button 
              className="w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors
                text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <Settings size={18} className="mr-3" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}