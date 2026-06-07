import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import portImg from "../assets/PORT.PNG";

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "50+", label: "Projects Done" },
  { num: "20+", label: "Happy Clients" },
  { num: "16+", label: "Tools Mastered" },
];

const journey = [
  { year: "2021", title: "Started Journey", desc: "Picked up Photoshop and fell in love with design. Started with basic edits and posters." },
  { year: "2022", title: "Video Editing", desc: "Discovered Premiere Pro — started editing YouTube videos, reels and short films." },
  { year: "2023", title: "Went Professional", desc: "First paid clients. Worked on brand identities, commercials and social media kits." },
  { year: "2024", title: "Level Up", desc: "Mastered After Effects, DaVinci Resolve and motion graphics. Delivered 50+ projects." },
];

export default function About() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="about" className="relative py-12 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden">
      {/* BG glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-700/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            About Me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            The Person{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400
             to-cyan-400">
              Behind the Work
            </span>
          </motion.h2>
        </div>

        {/* Main grid — photo + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-cyan-500/20
               rounded-3xl blur-2xl scale-105" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/10">

                <img src={portImg} alt="Subham Kumar" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-black text-xl">Subham Kumar</p>
                  <p className="text-violet-400 text-sm font-medium">Video Editor & Graphic
                     Designer</p>
                </div>
              </div>

              {/* Floating tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                className="absolute -top-4 -right-4 bg-[#111] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-white font-bold text-sm">Based in India 🇮🇳</p>
                <p className="text-white/40 text-xs">Available Worldwide</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4 text-white/60 leading-relaxed text-justify">
              <p className="text-lg">
                Hey! I'm <span className="text-white font-bold  ">Subham Kumar
                  </span> — a passionate video editor and graphic designer who turns raw ideas into
                   polished visual stories.
              </p>
              <p>
                I've been working with brands, creators and businesses for <span className="text-violet-400 font-semibold">3+ years</span>, crafting everything from cinematic brand films to scroll-stopping social media content.
              </p>
              <p>
                Whether it's a 30-second reel or a full brand identity — I bring the same energy, precision and creativity to every project.
              </p>
            </div>

            {/* What I do tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {["Video Editing", "Motion Graphics", "Brand Identity", "Social Media", "Color Grading", "Poster Design", "Thumbnails", "Reels"].map(tag => (
                <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 mt-2">
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
              >
                Work With Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 font-semibold text-sm transition-all duration-300"
              >
                Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors"
            >
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                {s.num}
              </p>
              <p className="text-white/40 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Journey / Timeline */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-black text-white mb-10 text-center"
          >
            My <span className="text-violet-400">Journey</span>
          </motion.h3>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-white/10 to-transparent" />

            <div className="space-y-10">
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-10 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`inline-block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors text-left`}>
                      <span className="text-violet-400 text-xs font-bold tracking-widest">{item.year}</span>
                      <h4 className="text-white font-bold text-lg mt-1">{item.title}</h4>
                      <p className="text-white/40 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 border-2 border-[#0a0a0a] mt-6" />

                  {/* Empty side for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}