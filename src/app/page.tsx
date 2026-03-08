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

const IN_PROGRESS = [
  {
    name: "BabyFink",
    url: "babyfink.com",
    description: "A tiny typing game built by a sleep-deprived new dad trying to teach a toddler the keyboard. Eight years later, it's finally getting an upgrade.",
    color: "#8844ff",
  },
];

const UNCLAIMED_QUESTS = [
  {
    name: "Pawdle",
    url: "pawdle.com.au",
    description: "A community portal connecting dog breeders with people looking for their perfect pup.",
  },
  {
    name: "SafeNet Global",
    url: "safenetglobal.com",
    description: "AI-powered, jurisdiction-aware content safety analysis across text and images. Multi-country legal compliance.",
  },
  {
    name: "Swift File Share",
    url: "swiftfileshare.com",
    description: "Fast, no-signup file sharing. Drop a file, get a link, done.",
  },
  {
    name: "Debugging Hub",
    url: "debugginghub.com",
    description: "Developer debugging toolkit. HTTPS errors, performance monitoring, DOM changes, state tracking, and error analysis.",
  },
  {
    name: "Gravy Gob",
    url: "gravygob.com",
    description: "Real home cooking from real people. No food blogs, no influencer plating — just honest meals and the stories behind them.",
  },
  {
    name: "Astro Dinos",
    url: "astrodinos.com",
    description: "An educational kids game. Dinosaurs in space — learning disguised as an adventure.",
  },
  {
    name: "Chore Dice",
    url: "choredice.com",
    description: "Roll the dice, pick your chore. A fun way to get the family sharing the housework.",
  },
  {
    name: "Antler Plaid",
    url: "antlerplaid.com",
    description: "Outdoors-inspired clothing and apparel. Manufacturing meets rugged style.",
  },
  {
    name: "Generosity Globe",
    url: "generosityglobe.com",
    description: "Connecting people with charities and causes around the world. Find where to give, see the impact.",
  },
  {
    name: "Ten Till Then",
    url: "tentillthen.com",
    description: "Digital time capsules. Write messages to your future self, seal them with a date, and unlock them when the time comes.",
  },
  {
    name: "Itzy Mitzy",
    url: "itzymitzy.com",
    description: "Playful, quirky fashion brand. Bold prints and colour for people who don't do boring.",
  },
  {
    name: "Milo Muddle",
    url: "milomuddle.com",
    description: "A kids book series following Milo, a lovable character who gets into wonderfully muddled adventures.",
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

        {/* In Progress Section */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="font-pixel text-xs sm:text-sm tracking-widest text-[#8844ff] mb-12 text-center">
            // IN PROGRESS
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {IN_PROGRESS.map((project, i) => (
              <ProductCard key={project.name} {...project} index={i} />
            ))}
          </div>
        </section>

        {/* Unclaimed Quests Section */}
        <section className="px-6 py-16 max-w-4xl mx-auto">
          <h2 className="font-pixel text-xs sm:text-sm tracking-widest text-neon-yellow mb-4 text-center">
            // UNCLAIMED QUESTS
          </h2>
          <p className="text-text-dim text-xs font-mono text-center mb-12 max-w-lg mx-auto">
            Domains we&apos;ve grabbed and ideas we&apos;ve thrown around. Some might turn into real projects. Others are just experiments while we learn something new. It&apos;s less about the destination and more about the quest.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {UNCLAIMED_QUESTS.map((quest, i) => (
              <div
                key={quest.name}
                className="neon-border p-4 bg-bg-panel/40 backdrop-blur-sm opacity-0 animate-[fade-in-up_0.5s_ease_both]"
                style={{
                  animationDelay: `${i * 80}ms`,
                  borderColor: "rgba(240, 255, 0, 0.15)",
                }}
              >
                <h3 className="font-pixel text-[10px] tracking-wider text-neon-yellow mb-1">
                  {quest.name}
                </h3>
                <p className="text-text-dim text-[10px] font-mono mb-2">{quest.url}</p>
                <p className="text-foreground/60 text-xs leading-relaxed font-mono">
                  {quest.description}
                </p>
              </div>
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
              , a digital agency by day. Over time it naturally pulled in
              developers, creatives, and curious builders who enjoy learning new
              tech, experimenting with ideas, and building things for the fun of
              it.
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-mono mt-4">
              You don&apos;t need to be a developer. Maybe you&apos;re a designer,
              a tester who loves breaking things, a product thinker with a vision,
              someone in marketing with a side project, or just someone with an
              idea and the energy to make it real.
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-mono mt-4">
              If you&apos;ve got the itch to create something, explore an idea, or
              collaborate with people who enjoy making things, you&apos;re one of us.
            </p>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed font-mono mt-4">
              Come hang out, build something weird together, or just play games
              when the execution turns out harder than the theory.
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
