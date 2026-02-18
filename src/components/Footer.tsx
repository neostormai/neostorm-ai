import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Готовы начать?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Запустите пилотный проект вместе с нами.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/revolveralex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium tracking-wide hover:opacity-90 transition-opacity glow-electric"
            >
              Войти в пилот
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/revolveralex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              @revolveralex — Telegram
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border">
          <img src={logo} alt="NEOSTORM.AI" className="h-6 mx-auto mb-3 w-auto opacity-60" />
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            © 2025 NEOSTORM.AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
