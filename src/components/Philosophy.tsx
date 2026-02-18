import { motion } from "framer-motion";

const points = [
  "Анализируем сигналы трендов в реальном времени.",
  "Конвертируем смыслы в вирусный контент для вашего бренда.",
  "Переходим от ручного монтажа к автоматизированному конвейеру.",
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/[0.02] to-transparent pointer-events-none" />
      <div className="container relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Философия
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            МЫ ДЕЛАЕМ ВИРУСНОСТЬ УПРАВЛЯЕМОЙ.
          </h2>

          <ul className="space-y-6 mb-12">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="flex items-start gap-4 text-lg md:text-xl text-secondary-foreground font-light"
              >
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl leading-relaxed text-gradient-electric font-semibold"
          >
            Вы всегда в тренде. Мы масштабируем ваш рост системно.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
