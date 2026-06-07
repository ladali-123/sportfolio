import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ChooseWorld() {
  const navigate = useNavigate();

  return (
    <section id="choose" className="relative py-10 px-6 md:px-10 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              World
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 mt-3 max-w-md mx-auto"
          >
            Click a world to explore my work
          </motion.p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* VIDEO CARD */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate("/video")}
            className="relative group overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5
              hover:border-violet-500/50 hover:bg-violet-600/10 hover:shadow-[0_0_60px_rgba(139,92,246,0.2)]
              transition-all duration-500 text-left p-8 min-h-[280px] flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>

              <h3 className="text-white text-2xl font-black mb-2 group-hover:text-violet-200 transition-colors duration-300">
                Video Editing
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Commercials, reels, short films, music videos — cinematic storytelling through motion.
              </p>

              {/* Stats */}
              <div className="flex gap-6 mt-5">
                {[["9+", "Projects"], ["3+", "Years"], ["5", "Tools"]].map(([num, label]) => (
                  <div key={label}>
                    <p className="text-violet-400 font-black text-lg leading-none">{num}</p>
                    <p className="text-white/30 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-6">
              <div className="flex gap-2 flex-wrap">
                {["Premiere", "After Effects", "DaVinci"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-violet-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Explore
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.button>

          {/* GRAPHIC CARD */}
          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => navigate("/graphic")}
            className="relative group overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5
              hover:border-cyan-500/50 hover:bg-cyan-600/10 hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]
              transition-all duration-500 text-left p-8 min-h-[280px] flex flex-col justify-between"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>

              <h3 className="text-white text-2xl font-black mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                Graphic Design
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Branding, social media, posters, packaging — visual identity that speaks volumes.
              </p>

              {/* Stats */}
              <div className="flex gap-6 mt-5">
                {[["9+", "Projects"], ["3+", "Years"], ["6", "Tools"]].map(([num, label]) => (
                  <div key={label}>
                    <p className="text-cyan-400 font-black text-lg leading-none">{num}</p>
                    <p className="text-white/30 text-xs mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-6">
              <div className="flex gap-2 flex-wrap">
                {["Photoshop", "Illustrator", "Figma"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Explore
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.button>

        </div>
      </div>
    </section>
  );
}