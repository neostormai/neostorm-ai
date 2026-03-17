import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, portfolioItems, type VideoCategory, type VideoItem } from "@/data/portfolio";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

const Lightbox = ({
  item,
  items,
  onClose,
  onNavigate,
}: {
  item: VideoItem;
  items: VideoItem[];
  onClose: () => void;
  onNavigate: (item: VideoItem) => void;
}) => {
  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasPrev) onNavigate(items[currentIndex - 1]);
  };
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNext) onNavigate(items[currentIndex + 1]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrev) onNavigate(items[currentIndex - 1]);
      if (e.key === "ArrowRight" && hasNext) onNavigate(items[currentIndex + 1]);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentIndex, hasPrev, hasNext, items, onNavigate, onClose]);

  // Visible thumbnails: up to 7, centered on current
  const thumbCount = 7;
  const half = Math.floor(thumbCount / 2);
  let start = Math.max(0, currentIndex - half);
  let end = start + thumbCount;
  if (end > items.length) {
    end = items.length;
    start = Math.max(0, end - thumbCount);
  }
  const visibleThumbs = items.slice(start, end);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Main player area with nav */}
      <div className="relative w-full max-w-4xl flex items-center" onClick={(e) => e.stopPropagation()}>
        {/* Prev */}
        <button
          onClick={goPrev}
          disabled={!hasPrev}
          className="absolute -left-2 md:-left-14 z-10 w-10 h-10 rounded-full border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Video */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full aspect-video"
        >
          <iframe
            src={`${item.videoUrl}?rel=0&modestbranding=1&autoplay=1`}
            className="w-full h-full rounded-lg"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>

        {/* Next */}
        <button
          onClick={goNext}
          disabled={!hasNext}
          className="absolute -right-2 md:-right-14 z-10 w-10 h-10 rounded-full border border-border bg-card/80 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-20 disabled:cursor-default"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Title */}
      <p className="mt-3 text-sm text-muted-foreground tracking-wide uppercase" onClick={(e) => e.stopPropagation()}>
        {item.title} — {currentIndex + 1}/{items.length}
      </p>

      {/* Thumbnail strip */}
      <div
        className="mt-4 flex gap-2 overflow-x-auto max-w-4xl px-2 py-1 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {visibleThumbs.map((t) => (
          <button
            key={t.id}
            onClick={() => onNavigate(t)}
            className={`shrink-0 rounded overflow-hidden border-2 transition-all duration-200 ${
              t.id === item.id
                ? "border-primary ring-1 ring-primary/40 scale-105"
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={t.thumbnail}
              alt={t.title}
              className="w-20 h-12 object-cover"
            />
          </button>
        ))}
      </div>
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

  // Listen for featured video open event from Hero
  useEffect(() => {
    const handler = () => {
      const featured = portfolioItems.find((i) => i.id === "ad-highlight");
      if (featured) handleOpen(featured);
    };
    window.addEventListener("open-showreel", handler);
    return () => window.removeEventListener("open-showreel", handler);
  }, [handleOpen]);

  return (
    <section id="portfolio" className="pt-10 pb-24 md:pt-14 md:pb-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">

            Портфолио
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
        {lightboxItem && <Lightbox item={lightboxItem} items={filtered} onClose={handleClose} onNavigate={handleOpen} />}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
