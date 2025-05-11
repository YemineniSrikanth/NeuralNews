import React from 'react';
import { format, parseISO } from 'date-fns';
import { Bookmark, BookmarkCheck, Clock } from 'lucide-react';

export default function TopStories({ articles, onBookmarkToggle }) {
  const topArticles = [...articles].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  }).slice(0, 5);

  if (topArticles.length === 0) return null;

  const getRelativeTime = (dateString) => {
    try {
      const date = parseISO(dateString);
      const now = new Date();
      const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
      
      if (diffInMinutes < 60) {
        return `${diffInMinutes} min ago`;
      } else {
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
          return `${diffInHours}h ago`;
        } else {
          return format(date, 'MMM d');
        }
      }
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft dark:shadow-none p-5 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Top Stories</h2>
        <button className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors">
          See all
        </button>
      </div>
      
      <div className="space-y-4">
        {topArticles.map(article => (
          <div key={article.id} className="flex items-start space-x-3 pb-4 last:pb-0 last:mb-0 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
            <div className="flex-1">
              <div className="flex items-center mb-1 text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium text-gray-700 dark:text-gray-300">{article.source}</span>
                <span className="mx-1">•</span>
                <div className="flex items-center">
                  <Clock size={12} className="mr-1" />
                  {getRelativeTime(article.publishedAt)}
                </div>
              </div>
              
              <h3 className="font-medium text-sm text-gray-900 dark:text-white mb-1 line-clamp-2">
                {article.title}
              </h3>
              
              <div className="flex items-center mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => onBookmarkToggle(article.id)}
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={article.isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
            >
              {article.isBookmarked ? (
                <BookmarkCheck size={16} className="text-primary-500" />
              ) : (
                <Bookmark size={16} className="text-gray-400 dark:text-gray-500" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}