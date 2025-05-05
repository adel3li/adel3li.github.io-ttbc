// components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const current = router.pathname;

  const links = [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Groups", href: "/groups" },
    { label: "Resources", href: "/resources" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 border-b border-white/10 h-16">
      <div className="relative max-w-6xl mx-auto h-full flex items-center px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <span>TTBC</span>
          <span className="text-xs px-2 py-0.5 bg-white/10 text-white/60 rounded-full">v0.1</span>
        </div>

        {/* Center: Tabs */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white/5 rounded-full border border-white/10 p-1 shadow-inner flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`px-4 py-1 text-sm rounded-full cursor-pointer transition-all duration-200
                  ${current === link.href
                    ? "bg-white text-black shadow"
                    : "text-white/80 hover:bg-white/10"}
                `}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}