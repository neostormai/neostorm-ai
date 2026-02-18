import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, portfolioItems, type VideoCategory, type VideoItem } from "@/data/portfolio";
import { X } from "lucide-react";

const VideoCard = ({ item, onClick }: { item: VideoItem; onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const aspectMap: Record<string, string> = {
    "16/9": "aspect-video",
    "9/16": "aspect-[9/16]",
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={`group cursor-pointer overflow-hidden rounded-lg bg-card relative ${item.span || ""}`}
      onClick={onClick}
    >
      <div className={`${aspectMap[item.aspectRatio]} overflow-hidden relative`}>
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {!loaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-primary ml-1" />
          </div>
        </div>
      </div>
      <div className="p-3">
        <p className="text-xs text-muted-foreground tracking-wide uppercase">{item.title}</p>
      </div>
    </motion.div>
  );
};

const Lightbox = ({ item, onClose }: { item: VideoItem; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`${item.videoUrl}?rel=0&modestbranding=1&autoplay=1`}
          className="w-full h-full rounded-lg"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<VideoItem | null>(null);

  const filtered = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const handleOpen = useCallback((item: VideoItem) => {
    setLightboxItem(item);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setLightboxItem(null);
    document.body.style.overflow = "";
  }, []);

  // Listen for showreel open event from Hero
  useEffect(() => {
    const handler = () => {
      const showreel = portfolioItems.find((i) => i.id === "hero");
      if (showreel) handleOpen(showreel);
    };
    window.addEventListener("open-showreel", handler);
    return () => window.removeEventListener("open-showreel", handler);
  }, [handleOpen]);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Portfolio
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <VideoCard key={item.id} item={item} onClick={() => handleOpen(item)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && <Lightbox item={lightboxItem} onClose={handleClose} />}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
