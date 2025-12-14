import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stackData = [
  // ... seus dados ...
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "AWS", icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
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

function StackSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lógica de Divisão das Linhas
  let rows = [];
  if (isMobile) {
    // Mobile: 4 Linhas
    const quarter = Math.ceil(stackData.length / 4);
    rows = [
      stackData.slice(0, quarter),
      stackData.slice(quarter, quarter * 2),
      stackData.slice(quarter * 2, quarter * 3),
      stackData.slice(quarter * 3)
    ];
  } else {
    // Desktop: 2 Linhas (Padrão original)
    const half = Math.ceil(stackData.length / 2);
    rows = [
      stackData.slice(0, half),
      stackData.slice(half)
    ];
  }

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

      {/* Renderização das Linhas Dinâmicas */}
      <div className="w-full flex flex-col gap-6">
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} className="w-full flex overflow-hidden relative">
            
            {/* Máscaras laterais */}
            <div className="absolute inset-y-0 left-0 w-10 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-10 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />

            <motion.div
              className="flex gap-4 md:gap-6 whitespace-nowrap"
              // Alterna direção: Linhas pares (0, 2) vão pra esquerda, ímpares (1, 3) pra direita
              animate={{ x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                // Ajusta velocidade levemente para cada linha para dar um efeito orgânico
                duration: 20 + (rowIndex * 2) 
              }}
            >
              {/* Duplicamos os itens para o loop infinito */}
              {[...rowItems, ...rowItems].map((tech, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  className="
                    flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 
                    bg-neutral-900/40 border border-white/10 rounded-full 
                    backdrop-blur-sm min-w-[140px] md:min-w-[200px]
                  "
                >
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                  <span className="text-base md:text-lg font-medium text-gray-300">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default StackSection;