export function GroupCard({ group, featured = false, delay = 0 }) {
  return (
    <div 
      className={`
        ${featured ? 'bg-white/10' : 'bg-white/5'}
        rounded-lg p-8 border border-white/10 
        hover:bg-white/[0.15] transition-all duration-300
        animate-fade-in
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-6">
        <div className={`
          ${featured ? 'text-4xl' : 'text-3xl'}
          flex-shrink-0
        `}>
          {group.icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
              <p className="text-white/60 mb-4">{group.description}</p>
            </div>
            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-all duration-200 border border-white/10"
            >
              Join {group.platform} →
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span>👤</span> {group.members} members
            </div>
            {group.status && (
              <>
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    group.status === 'Active' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  {group.status}
                </div>
              </>
            )}
            {group.progress && (
              <>
                <div className="w-1 h-1 bg-white/30 rounded-full" />
                <div className="flex items-center gap-2">
                  <div className="w-20 h-1.5 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-white rounded-full"
                      style={{ width: group.progress }}
                    />
                  </div>
                  {group.progress}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
