import React from 'react';
import { format, parseISO } from 'date-fns';
import { Bookmark, BookmarkCheck } from 'lucide-react';

export default function ArticleCard({ article, onBookmarkToggle }) {
  const {
    id,
    title,
    description,
    author,
    source,
    sourceLogoUrl,
    urlToImage,
    publishedAt,
    isBookmarked
  } = article;

  // Format date
  const formattedDate = React.useMemo(() => {
    try {
      const date = parseISO(publishedAt);
      return format(date, 'MMM d, yyyy');
    } catch (e) {
      return publishedAt;
    }
  }, [publishedAt]);

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-soft dark:shadow-none overflow-hidden transition-all duration-300 hover:shadow-card animate-fade-in">
      <div className="relative">
        {urlToImage && (
          <div className="aspect-w-16 aspect-h-9 w-full relative">
            <img 
              src={urlToImage} 
              alt={title}
              className="w-full h-48 object-cover" 
            />
          </div>
        )}
        
        <button 
          onClick={() => onBookmarkToggle(id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-sm"
          aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
        >
          {isBookmarked ? (
            <BookmarkCheck size={18} className="text-primary-500" />
          ) : (
            <Bookmark size={18} className="text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            {sourceLogoUrl && (
              <img 
                src={sourceLogoUrl} 
                alt={source} 
                className="h-5 w-5 rounded-full mr-2"
              />
            )}
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{source}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</span>
        </div>
        
        <h2 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs text-gray-600 dark:text-gray-400">By {author}</span>
          <a href="#" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors">
            Read more
          </a>
        </div>
      </div>
    </article>
  );
}