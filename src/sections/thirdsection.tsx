import React from "react";
import CardSwap, { Card } from '../components/CardSwap';
import { Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Painel administrativo com métricas em tempo real e gestão de estoque.",
    tech: ["Next.js", "Tailwind", "Prisma"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Finance App",
    description: "Aplicação mobile-first para controle financeiro pessoal.",
    tech: ["React Native", "Firebase", "Expo"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "Interface de chat moderna com suporte a streaming de respostas.",
    tech: ["React", "OpenAI API", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    gradient: "from-purple-500 to-pink-500"
  },
];

function ThirdSection() {
  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-10 px-4 md:px-12 overflow-hidden">
      
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO ESQUERDO (Texto) */}
        <motion.div 
          className="flex flex-col gap-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-none">
            Meus <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projetos
            </span>
          </h2>
          
          {/* --- AQUI ESTÁ O SUBTÍTULO DE VOLTA --- */}
          <p className="text-gray-400 text-lg md:text-2xl max-w-lg leading-relaxed">
            Aqui estão alguns dos trabalhos que desenvolvi. Focados em performance, 
            experiência do usuário e código limpo.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-all">
              <Github size={24} />
              Ver Github
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-lg rounded-full hover:bg-white/10 transition-all">
              Ver Portfolio Completo
              <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* LADO DIREITO (Card Swap) */}
        <motion.div 
          className="relative w-full flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Container maior para acomodar a animação */}
          <div className="w-full h-[600px] md:h-[700px] flex items-center justify-center"> 
            
            <CardSwap
              width={480}
              height={580}
              cardDistance={50}
              verticalDistance={30}
              delay={4000}
              pauseOnHover={true}
            >
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-pointer"
                >
                  
                  {/* Imagem */}
                  <div className="h-[60%] w-full relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 mix-blend-overlay z-10`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="h-[40%] p-6 md:p-8 flex flex-col justify-between bg-neutral-900/95 backdrop-blur-xl">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base line-clamp-2">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs md:text-sm font-medium text-white bg-white/5 rounded-full border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default ThirdSection;