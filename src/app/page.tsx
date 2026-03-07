import PixelCanvas from "@/components/PixelCanvas";
import GlitchText from "@/components/GlitchText";
import DriftingWord from "@/components/DriftingWord";
import ProductCard from "@/components/ProductCard";

const PRODUCTS = [
  {
    name: "Sekkei Flow",
    url: "sekkeiflow.com",
    description: "The beauty of deliberate design with the discipline of systematic thinking — so your life flows forward instead of piling up.",
    color: "#00f0ff",
  },
  {
    name: "Lootero",
    url: "lootero.com",
    description: "Loot, collect, and discover. A platform for the treasure hunters of the internet.",
    color: "#ff00aa",
  },
];

export default function Home() {
  return (
    <>
      <PixelCanvas />

      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
          {/* Logo mark - pixel cluster */}
          <div className="mb-8 flex gap-1" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3"
                style={{
                  backgroundColor: ["#00f0ff", "#ff00aa", "#f0ff00", "#00ff88", "#8844ff"][i],
                  opacity: 0.8,
                  animation: `drift ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          <div className="font-pixel text-3xl sm:text-5xl md:text-6xl tracking-widest pixel-shadow text-foreground flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <GlitchText
              text="DRIFTING"
              as="span"
              className="text-3xl sm:text-5xl md:text-6xl"
            />
            <DriftingWord
              word="PIXELS"
              className="text-3xl sm:text-5xl md:text-6xl"
            />
          </div>

          <p className="mt-6 text-text-dim font-mono text-sm sm:text-base max-w-lg leading-relaxed animate-[fade-in-up_1s_ease_0.8s_both]">
            Indie products built by creatives who love to make things.
          </p>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-[fade-in-up_1s_ease_1.5s_both]">
            <div className="w-px h-8 bg-gradient-to-b from-neon-cyan/60 to-transparent animate-pulse" />
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-32 max-w-4xl mx-auto">
          <div className="neon-border p-8 sm:p-12 bg-bg-panel/60 backdrop-blur-sm">
            <h2 className="font-pixel text-xs sm:text-sm tracking-widest text-neon-cyan mb-6">
              // ABOUT
            </h2>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-mono">
              We&apos;re a collective of builders, designers, and dreamers. By day we ship
              enterprise software. By night we chase ideas that keep us up — the weird ones,
              the fun ones, the ones that don&apos;t need a business case.
            </p>
            <p className="text-text-dim text-sm leading-relaxed font-mono mt-4">
              Drifting Pixels is where those ideas live.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="font-pixel text-xs sm:text-sm tracking-widest text-neon-magenta mb-12 text-center">
            // SIDE QUESTS
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.name} {...product} index={i} />
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section className="px-6 py-32 max-w-4xl mx-auto">
          <div className="neon-border p-8 sm:p-12 bg-bg-panel/60 backdrop-blur-sm">
            <h2 className="font-pixel text-xs sm:text-sm tracking-widest text-neon-green mb-6">
              // JOIN THE PARTY
            </h2>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-mono">
              Drifting Pixels started with the crew at{" "}
              <a
                href="https://naitec.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:underline underline-offset-4"
              >
                NAITEC
              </a>
              , a digital agency by day. Over time it&apos;s naturally pulled in
              developers, creatives, and people from all walks of life who just
              want to build things for fun, learn new tech, and hang out.
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-mono mt-4">
              You don&apos;t need to be a developer. Maybe you&apos;re a designer,
              a tester who loves breaking things, a product person with a vision,
              someone in marketing with a side hustle, or just someone with an
              idea and the energy to make it real. If you&apos;ve got that itch
              to create something &mdash; or you just miss what it feels like to
              build without the standups, the timesheets, the meetings about
              meetings, and just be creative without restrictions again &mdash;
              you&apos;re one of us. Come hang out and build something weird
              together &mdash; or just play games when the execution becomes
              less fun than the theory.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://naitec.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-border inline-flex items-center gap-2 px-5 py-3 font-pixel text-xs tracking-wider text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
              >
                naitec.com.au
              </a>
              <a
                href="mailto:gg@driftingpixels.com"
                className="neon-border inline-flex items-center gap-2 px-5 py-3 font-pixel text-xs tracking-wider text-neon-magenta hover:bg-neon-magenta/10 transition-colors"
                style={{ borderColor: "rgba(255, 0, 170, 0.2)" }}
              >
                gg@driftingpixels.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-16 text-center border-t border-neon-cyan/10">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2"
                style={{
                  backgroundColor: ["#00f0ff", "#ff00aa", "#f0ff00"][i],
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
          <p className="text-text-dim text-xs font-mono">
            drifting pixels &middot; making things for the love of it
          </p>
        </footer>
      </div>
    </>
  );
}
