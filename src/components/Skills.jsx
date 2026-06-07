import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Import your logo images from assets
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";
import pic6 from "../assets/pic6.png";
import pic7 from "../assets/pic7.png";

const logos = [
  { img: pic1, name: "Tool 1" },
  { img: pic2, name: "Tool 2" },
  { img: pic3, name: "Tool 3" },
  { img: pic4, name: "Tool 4" },
  { img: pic5, name: "Tool 5" },
  { img: pic6, name: "Tool 6" },
  { img: pic7, name: "Tool 7" },
];

// Duplicate for seamless infinite scroll
const allLogos = [...logos, ...logos, ...logos];

function MarqueeRow({ direction = 1, speed = 30 }) {
  return (
    <div className="relative flex overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-6 py-4"
        animate={{
          x: direction === 1 ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {allLogos.map((logo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4
              group-hover:border-violet-500/40 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]
              transition-all duration-300"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="relative py-12 bg-[#0a0a0a] overflow-hidden">
      {/* BG glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Tools I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Master
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 mt-4 max-w-md mx-auto"
          >
            Industry-standard tools used daily — from video editing to graphic design.
          </motion.p>
        </div>
      </div>

      {/* Marquee Row 1 — Left to Right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-5"
      >
        <MarqueeRow direction={1} speed={25} />
      </motion.div>

      {/* Marquee Row 2 — Right to Left */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <MarqueeRow direction={-1} speed={20} />
      </motion.div>

      {/* Bottom Stats */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-12"
        >
          {[
            { num: "3+", label: "Years Experience" },
            { num: "50+", label: "Projects Delivered" },
            { num: "7+", label: "Tools Mastered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                {stat.num}
              </p>
              <p className="text-white/40 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}