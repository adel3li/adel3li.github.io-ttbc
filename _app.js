import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Star background */}
      {[...Array(150)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
      
      <Component {...pageProps} />
      
      {/* Footer */}
      <footer className="w-full py-6 text-center text-sm text-white/40">
        <p>
          Built by{" "}
          <a
            href="https://github.com/AdelAli"
            className="hover:text-white/60 transition-colors"
          >
            @AdelAli
          </a>{" "}
          • GitHub Stars ⭐️ 0
        </p>
      </footer>
    </>
  );
}
