import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Philosophy", href: "#philosophy" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          NEOSTORM<span className="text-gradient-electric">.AI</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-lg text-primary"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
