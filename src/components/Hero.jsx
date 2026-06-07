import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import portImg from "../assets/port.png";

const roles = ["Video Editor", "Graphic Designer", "Motion Artist", "Visual Storyteller"];

export default function Hero() {
  const roleRef = useRef(null);
  const cursorRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const deleting = useRef(false);

  // Typewriter effect
  useEffect(() => {
    let timeout;
    const type = () => {
      const current = roles[roleIndex.current];
      if (!deleting.current) {
        charIndex.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === current.length) {
          deleting.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        charIndex.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIndex.current);
        if (charIndex.current === 0) {
          deleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deleting.current ? 60 : 100);
    };
    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Cursor blink
  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "steps(1)",
    });
  }, []);

  // Floating image animation
  const imgRef = useRef(null);
  useEffect(() => {
    if (!imgRef.current) return;
    gsap.to(imgRef.current, {
      y: -18,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden px-6 md:px-10"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-700/20 rounded-full 
      blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 
      rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20">

        {/* LEFT — Text */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-violet-300 text-xs font-semibold tracking-widest uppercase">
              Available for Work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Subham
            </span>
            <br />
            <span className="text-white">Kumar</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-1 text-xl md:text-2xl font-semibold text-white/60"
          >
            <span ref={roleRef} className="text-violet-400" />
            <span ref={cursorRef} className="text-violet-400 text-2xl">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/40 text-base md:text-lg leading-relaxed max-w-lg"
          >
            I craft cinematic videos and stunning visuals that tell your brand's story.
            From raw footage to polished frames — every pixel, every frame, intentional.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#choose"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#choose")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500
                text-white font-semibold text-sm transition-all duration-300
                hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20
                text-white/70 hover:text-white hover:border-white/40 font-semibold text-sm transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-5 pt-2"
          >
            {[
              {
                label: "Instagram",
                href: "#",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "#",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                ),
              },
              {
                label: "Behance",
                href: "#",
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.457c-.183-1.82-1.173-2.497-1.703-2.497-.728 0-1.562.424-1.754 2.497zM9.099 11.745c.886-.428 1.372-1.113 1.372-2.18C10.471 7.116 8.393 7 6.828 7H1v13h5.885c1.855 0 4.584-.635 4.584-3.346 0-1.266-.555-2.33-2.37-2.909zM3.21 9h3.275c.739 0 1.494.148 1.494 1.089 0 .904-.617 1.13-1.406 1.13H3.21V9zm3.817 9H3.21v-2.516h3.897c.929 0 1.498.406 1.498 1.274C8.605 17.779 7.868 18 7.027 18z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/30 hover:text-violet-400 transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 blur-2xl opacity-30 scale-110" />

            {/* Rotating dashed border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30"
              style={{ margin: "-12px" }}
            />

            {/* Static ring */}
            <div
              className="absolute rounded-full border border-violet-500/20"
              style={{ inset: "-24px" }}
            />

            {/* Photo */}
            <div ref={imgRef} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-500/40">
              <img
                src={portImg}
                alt="Subham Kumar"
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent" />
            </div>

            {/* Floating badge — Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
              className="absolute -bottom-4 -left-6 bg-[#111] border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
            >
              <span className="text-2xl">🎬</span>
              <div>
                <p className="text-white font-bold text-sm leading-none">3+ Years</p>
                <p className="text-white/40 text-xs mt-0.5">Experience</p>
              </div>
            </motion.div>

            {/* Floating badge — Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", bounce: 0.5 }}
              className="absolute -top-4 -right-6 bg-[#111] border border-white/10 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-xl"
            >
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-white font-bold text-sm leading-none">50+ Projects</p>
                <p className="text-white/40 text-xs mt-0.5">Delivered</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-violet-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}