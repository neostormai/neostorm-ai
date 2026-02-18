import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noise">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric/5 blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter leading-[0.85] mb-8">
            NEOSTORM<span className="text-gradient-electric glow-text-electric">.AI</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-silver text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 font-light tracking-wide"
        >
          Нейро-лаборатория вирального креатива.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              const lb = document.getElementById("portfolio");
              lb?.scrollIntoView({ behavior: "smooth" });
              window.dispatchEvent(new CustomEvent("open-showreel"));
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 group glow-electric"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium tracking-widest uppercase">Watch Reel</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
