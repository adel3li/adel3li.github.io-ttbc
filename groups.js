import Navbar from '../components/Navbar';
import Link from 'next/link';
import { GroupCard } from '../components/GroupCard';

export default function Groups() {
  const mainCommunity = {
    title: "The Technical Book Club Community",
    description: "Our main community where we share announcements, resources, and engage in general discussions about software engineering and learning.",
    members: 124,
    platform: "Discord",
    link: "https://discord.gg/your-invite",
    icon: "👥"
  };

  const bookGroups = [
    {
      title: "DDIA Study Group",
      description: "Currently reading and discussing Designing Data-Intensive Applications",
      members: 28,
      platform: "Discord",
      link: "https://discord.gg/ddia-channel",
      status: "Active",
      progress: "35%",
      icon: "📚"
    },
    {
      title: "Pragmatic Programmer Alumni",
      description: "Continued discussions and implementation of practices from The Pragmatic Programmer",
      members: 45,
      platform: "Discord",
      link: "https://discord.gg/pragmatic-channel",
      status: "Completed",
      progress: "100%",
      icon: "🎓"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-32 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3 animate-fade-in">
            👥 Our Groups
          </h1>
          <p className="text-xl text-white/60 mb-16 text-center animate-fade-in">
            Join our community and book-specific study groups
          </p>

          {/* Main Community Card */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold mb-6">Main Community</h2>
            <GroupCard group={mainCommunity} featured={true} />
          </div>

          {/* Book Groups */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold mb-6">Book Study Groups</h2>
            <div className="grid gap-6">
              {bookGroups.map((group, idx) => (
                <GroupCard 
                  key={idx} 
                  group={group}
                  delay={idx * 0.2} 
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}