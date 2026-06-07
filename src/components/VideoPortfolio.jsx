// src/components/VideoPortfolio.jsx
import { motion } from "framer-motion";

const videoProjects = [
  {
    id: 1,
    title: "Brand Reel",
    desc: "Cinematic reel edit for brand storytelling.",
    category: "Reels",
    duration: "30s",
    tags: ["Premiere", "After Effects"],
    thumb: "https://images.unsplash.com/photo-1523236408827-1e5d1a1baf2c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Product Trailer",
    desc: "Trailer cut with motion graphics overlays.",
    category: "Commercial",
    duration: "45s",
    tags: ["DaVinci", "After Effects"],
    thumb: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=80",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-white/25
       transition-all duration-300 bg-[#111]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity
         duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 
          flex items-center justify-center">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {project.duration && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-md font-mono">
            {project.duration}
          </span>
        )}
        <span className="absolute top-2 left-2 bg-violet-600/80 text-white text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-base mb-1">{project.title}</h3>
        <p className="text-white/40 text-xs mb-3 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function VideoPortfolio() {
  return (
    <section className="relative py-12 px-6 md:px-10 bg-[#0a0a0a] min-h-screen overflow-hidden">
      {/* Hero-style background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs (same as Hero) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-700/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Editing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 mt-3 max-w-md mx-auto"
          >
            Cinematic storytelling through motion
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videoProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}