import React from 'react';

export default function TrendingTags() {
  const trendingTags = [
    { id: 1, name: 'AI', count: 128 },
    { id: 2, name: 'Climate Change', count: 89 },
    { id: 3, name: 'Space Exploration', count: 74 },
    { id: 4, name: 'Quantum Computing', count: 62 },
    { id: 5, name: 'Renewable Energy', count: 54 },
    { id: 6, name: 'Biotechnology', count: 43 }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft dark:shadow-none p-5 mb-8">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Trending Topics</h2>
      
      <div className="flex flex-wrap gap-2">
        {trendingTags.map(tag => (
          <button 
            key={tag.id}
            className="px-3 py-1.5 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors"
          >
            {tag.name}
            <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
              {tag.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}