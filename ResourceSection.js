import { useState } from 'react';

export function ResourceSection({ book, animationDelay }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openChapters, setOpenChapters] = useState({});
  
  const icons = {
    video: "🎥",
    article: "📄",
    slides: "📊",
    notes: "🗣️",
    link: "🔗"
  };

  const toggleChapter = (chapterIndex) => {
    setOpenChapters(prev => ({
      ...prev,
      [chapterIndex]: !prev[chapterIndex]
    }));
  };

  return (
    <div 
      className="bg-white/5 rounded-lg border border-white/10 overflow-hidden animate-fade-in"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span className="text-xl font-semibold flex items-center gap-3">
          <span>📚</span> {book.title}
        </span>
        <span className="text-white/60">{isOpen ? "▼" : "▶"}</span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          {book.chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="mt-4 border-b border-white/10 last:border-0 pb-4">
              <button
                onClick={() => toggleChapter(chapterIndex)}
                className="w-full text-left py-2 flex items-center justify-between hover:bg-white/5 rounded px-2"
              >
                <span className="text-lg font-medium flex items-center gap-2">
                  <span>📑</span> {chapter.title}
                </span>
                <span className="text-white/60">{openChapters[chapterIndex] ? "▼" : "▶"}</span>
              </button>

              {openChapters[chapterIndex] && (
                <div className="pl-8 mt-2 space-y-2">
                  {chapter.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-white transition-colors py-1"
                    >
                      <span>{icons[resource.type] || "📄"}</span>
                      {resource.title}
                      {resource.url.startsWith('http') && (
                        <span className="text-xs">↗</span>
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
