// src/components/GraphicPortfolio.jsx
import { motion } from "framer-motion";

const graphicProjects = [
  {
    id: 1,
    title: "Brand Identity",
    desc: "Logo, color system, and social templates.",
    category: "Branding",
    tags: ["Photoshop", "Illustrator"],
    thumb: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Poster Series",
    desc: "A poster set with consistent typography.",
    category: "Posters",
    tags: ["Figma", "Illustrator"],
    thumb: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
  },
];


const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 bg-[#111]"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
        <span className="absolute top-2 left-2 bg-cyan-600/80 text-white text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-base mb-1">{project.title}</h3>
        <p className="text-white/40 text-xs mb-3 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function GraphicPortfolio() {
  return (
    <section className="py-12 px-6 md:px-10 bg-[#0a0a0a] min-h-screen">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-700/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Graphic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 mt-3 max-w-md mx-auto"
          >
            Visual identity that speaks volumes
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {graphicProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}