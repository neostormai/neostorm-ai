import { motion } from "framer-motion";

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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
            Philosophy
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground font-light">
            Мы создаём видео, которые растут в охватах и закрепляются в ленте.
            Тестируем форматы. Ищем закономерности. Превращаем удачные гипотезы в систему.
          </p>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gradient-electric font-semibold">
            10 нейрокреаторов сегодня. Автоматизированный продакшн завтра.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
