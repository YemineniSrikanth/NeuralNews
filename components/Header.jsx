import React, { useState } from 'react';
import { SearchIcon, Moon, Sun, BellIcon, BookmarkIcon, User, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header({ setSearchQuery, toggleSidebar }) {
  const { theme, toggleTheme } = useTheme();
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localSearchQuery);
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <h1 className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-500 dark:to-secondary-500">
              NeuralNews
            </h1>
          </div>
        </div>

        <form 
          onSubmit={handleSearchSubmit}
          className="hidden md:flex relative flex-1 max-w-lg mx-8"
        >
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Search for news..."
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
            aria-label="Notifications"
          >
            <BellIcon size={20} className="text-gray-700 dark:text-gray-300" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary-500"></span>
          </button>
          
          <button 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Bookmarks"
          >
            <BookmarkIcon size={20} className="text-gray-700 dark:text-gray-300" />
          </button>
          
          <button className="ml-2 flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            <User size={16} className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <form 
        onSubmit={handleSearchSubmit}
        className="md:hidden px-4 pb-4"
      >
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon size={18} className="text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search for news..."
            className="block w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </header>
  );
}