import { useState } from 'react';

export function BookVoting({ candidates }) {
  const [votes, setVotes] = useState({});

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">Vote for Next Book</h3>
      {candidates.map((book) => (
        <div key={book.id} className="bg-white/5 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h4 className="font-medium">{book.title}</h4>
            <p className="text-sm text-white/60">{book.description}</p>
          </div>
          <button 
            onClick={() => handleVote(book.id)}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            {votes[book.id] || 0} votes
          </button>
        </div>
      ))}
    </div>
  );
}
