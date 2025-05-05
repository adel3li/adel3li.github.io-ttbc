import Navbar from '../components/Navbar';
import { useState } from 'react';
import { ResourceSection } from '../components/ResourceSection';

export default function Resources() {
  const books = [
    {
      title: "The Pragmatic Programmer",
      chapters: [
        {
          title: "Chapter 1: A Pragmatic Philosophy",
          resources: [
            { type: "video", title: "Introduction to Pragmatic Thinking", url: "https://youtube.com/..." },
            { type: "slides", title: "Chapter 1 Summary", url: "/slides/ch1.pdf" },
            { type: "article", title: "The Pragmatic Mindset", url: "https://blog.com/..." }
          ]
        },
        {
          title: "Chapter 2: A Pragmatic Approach",
          resources: [
            { type: "notes", title: "Discussion Notes", url: "/notes/ch2.md" },
            { type: "video", title: "Good Enough Software", url: "https://youtube.com/..." },
            { type: "article", title: "DRY Principle Deep Dive", url: "https://blog.com/..." }
          ]
        }
      ]
    },
    {
      title: "Designing Data-Intensive Applications",
      chapters: [
        {
          title: "Chapter 1: Reliable, Scalable, and Maintainable Applications",
          resources: [
            { type: "video", title: "System Design Basics", url: "https://youtube.com/..." },
            { type: "article", title: "Scalability 101", url: "https://martin.kleppmann.com/..." }
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-32 px-4 pb-20 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            📂 Resources by Book
          </h1>
          <p className="text-xl text-white/60 mb-16 text-center">
            Browse all study materials for each book, organized by chapter.
          </p>
        </div>

        <div className="space-y-6">
          {books.map((book, index) => (
            <ResourceSection 
              key={index} 
              book={book} 
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </main>
    </div>
  );
}