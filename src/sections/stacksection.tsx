import { motion } from "framer-motion";

const stackData = [
  // Linha 1
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/white" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  
  // Linha 2
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/white" },
  { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/white" },
  { name: "Framer", icon: "https://cdn.simpleicons.org/framer" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis" },
  { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs" },
];

const row1 = stackData.slice(0, Math.ceil(stackData.length / 2));
const row2 = stackData.slice(Math.ceil(stackData.length / 2));

function StackSection() {
  return (
    <section className="w-full py-24 flex flex-col items-center justify-center relative z-10 overflow-hidden">
      
      {/* Título Centralizado */}
      <div className="w-full max-w-7xl px-6 md:px-12 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            Minha{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl mt-4 max-w-2xl mx-auto leading-relaxed">
            Ferramentas e tecnologias que uso no dia a dia.
          </p>
        </motion.div>
      </div>

      {/* --- CARROSSEL 1 --- */}
      <div className="w-full flex overflow-hidden mb-6 relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...row1, ...row1].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-4 bg-neutral-900/40 border border-white/10 rounded-full backdrop-blur-sm min-w-[200px]"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="text-lg font-medium text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- CARROSSEL 2 --- */}
      <div className="w-full flex overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {[...row2, ...row2].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-8 py-4 bg-neutral-900/40 border border-white/10 rounded-full backdrop-blur-sm min-w-[200px]"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="text-lg font-medium text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

export default StackSection;