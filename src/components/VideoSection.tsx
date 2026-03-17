import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="relative py-16 bg-background flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center mb-8 px-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Смотри как работает <span className="text-gradient-electric glow-text-electric">NeoStorm.AI</span>
        </h2>
        <p className="text-silver text-sm sm:text-base font-light max-w-md mx-auto">
          Нейро-лаборатория вирального креатива в действии
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full max-w-sm mx-auto px-6"
        style={{ aspectRatio: "9/16" }}
      >
        <iframe
          src="https://www.youtube-nocookie.com/embed/lJruWPXGPC0?rel=0&modestbranding=1&playsinline=1"
          title="NeoStorm AI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-2xl border border-primary/20 shadow-lg"
          style={{ background: "#000" }}
        />
      </motion.div>
    </section>
  );
};

export default VideoSection;
