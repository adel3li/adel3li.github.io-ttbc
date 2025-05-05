import { useSession } from 'next-auth/react';
import Navbar from '../components/Navbar';

export default function Profile() {
  const { data: session } = useSession();

  const achievements = [
    { icon: "📚", title: "Book Worm", description: "Completed first book" },
    { icon: "💬", title: "Active Participant", description: "Joined 5 discussions" }
  ];

  const readingProgress = [
    {
      book: "DDIA",
      progress: 35,
      notes: 12,
      lastRead: "2024-02-20"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-32 px-4 pb-20 max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 rounded-full bg-white/10">
            {session?.user?.image && (
              <img 
                src={session.user.image} 
                alt="Profile" 
                className="w-full h-full rounded-full"
              />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{session?.user?.name}</h1>
            <p className="text-white/60">Member since January 2024</p>
          </div>
        </div>

        {/* Reading Progress */}
        <section className="mb-12">
          {/* Progress implementation */}
        </section>

        {/* Achievements */}
        <section>
          {/* Achievements grid */}
        </section>
      </main>
    </div>
  );
}
