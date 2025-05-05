// pages/books.js
import Navbar from '../components/Navbar';

export default function Books() {
  const books = [
    { title: "The Pragmatic Programmer", sessions: 20, status: "Finished" },
    { title: "Alice and Bob Learn Application Security", sessions: 16, status: "Finished" },
    { title: "Designing Data-Intensive Applications", sessions: null, status: "Currently Reading" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-32 flex flex-col items-center px-4 pb-20">
        <h1 className="text-5xl font-bold mb-4 flex items-center animate-fade-in">📚 Our Book Club Journey</h1>
        <p className="text-xl text-white/60 mb-24 text-center max-w-2xl animate-fade-in">
          Explore books we've read, are reading, and plan to read.
        </p>

        <div className="relative max-w-5xl w-full">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/5 via-white/20 to-white/5 -translate-x-1/2"></div>
          
          {books.map((book, idx) => (
            <div key={idx} className="relative flex items-center mb-32 animate-fade-in" 
                 style={{ animationDelay: `${idx * 0.2}s` }}>
              {/* Left side */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                {idx % 2 === 0 ? (
                  <h3 className="text-2xl font-semibold mb-3 hover:text-white/90 transition-colors">
                    {book.title}
                  </h3>
                ) : (
                  <div className="text-right pr-12">
                    <div className="text-xl text-white/80 mb-2">{book.status}</div>
                    {book.sessions && (
                      <div className="text-white/60">
                        {book.sessions} study sessions
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Center dot with pulse effect */}
              <div className="relative">
                <div className="w-5 h-5 bg-white rounded-full z-10 relative"/>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full animate-pulse"/>
              </div>

              {/* Right side */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'pl-12' : 'text-right pr-12'}`}>
                {idx % 2 === 0 ? (
                  <div>
                    <div className="text-xl text-white/80 mb-2">{book.status}</div>
                    {book.sessions && (
                      <div className="text-white/60">
                        {book.sessions} study sessions
                      </div>
                    )}
                  </div>
                ) : (
                  <h3 className="text-2xl font-semibold mb-3 hover:text-white/90 transition-colors">
                    {book.title}
                  </h3>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}