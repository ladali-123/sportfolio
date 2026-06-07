import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    setMenuOpen(false);
    // If href is an in-page anchor like #hero and we're not on the root route,
    // navigate to `/` first so the target element exists, then scroll.
    if (href && href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 80);
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // Fallback: if href is a path (not an anchor), navigate normally
    if (href) navigate(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a] border-b border-white/10 shadow-lg shadow-black/40"
            : "bg-[#0a0a0a] border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

          {/* Logo / Name */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              // route to home and scroll to hero
              if (location.pathname !== "/") navigate("/");
              setTimeout(() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" }), 80);
            }}
            className="group flex items-center gap-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-500"></span>
            </span>
            <span className="text-white font-bold tracking-tight text-lg md:text-2xl">
              Subham
              <span className="text-violet-400"> Kumar</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group
                    ${activeLink === link.href ? "text-violet-400" : "text-white/70 hover:text-white"}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-violet-400 transition-all duration-300
                      ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold
                bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300
                hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] active:scale-95"
            >
              <span className="h-2 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center
              ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block h-px bg-white transition-all duration-300
              ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-px w-6 bg-white transition-all duration-300 origin-center
              ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a0a0a] border-b border-white/10 md:hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="text-xl font-semibold text-white/70 hover:text-violet-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNav(e, "#contact")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 text-white font-semibold text-sm"
                >
                  <span className="h-2 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}