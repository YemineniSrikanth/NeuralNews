import React from 'react';
import { categories } from '../utils/mockData';

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="overflow-x-auto pb-2 mb-4 hide-scrollbar">
      <div className="flex space-x-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeCategory === category.id 
                ? 'bg-primary-600 text-white shadow-sm' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
            `}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}