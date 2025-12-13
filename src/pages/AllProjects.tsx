import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidEther from "../components/LiquidEther";
import { Github, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const allProjects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: [
      "Um painel administrativo robusto desenvolvido para gerenciar operações de e-commerce em larga escala. O foco principal foi a performance e a visualização de dados em tempo real.",
      "Implementei gráficos interativos, gestão de inventário com atualizações via WebSocket e um sistema de autenticação seguro baseado em funções."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    repoLink: "https://github.com/seu-usuario/repo-1",
    demoLink: "https://demo-link.com",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555421689-492a1880ceb9?q=80&w=1920&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Finance App Mobile",
    description: [
      "Aplicação mobile-first focada em controle financeiro pessoal. O desafio foi criar uma interface extremamente fluida e responsiva que funcionasse offline.",
      "Utilizei React Native com Expo para garantir compatibilidade entre plataformas e integrei com Firebase para sincronização de dados em tempo real quando online."
    ],
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    repoLink: "https://github.com/seu-usuario/repo-2",
    demoLink: null,
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1920&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: [
      "Uma interface de chat moderna para interagir com LLMs. O projeto foca na experiência do usuário, suportando streaming de respostas (efeito de digitação) e histórico de conversas.",
      "A arquitetura foi pensada para ser modular, permitindo fácil troca entre diferentes provedores de API de Inteligência Artificial."
    ],
    technologies: ["React", "OpenAI API", "Framer Motion", "Node.js"],
    repoLink: "https://github.com/seu-usuario/repo-3",
    demoLink: "https://ai-chat-demo.com",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
    ]
  }
];

export default function AllProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden flex flex-col items-center pt-48 pb-24">

      {/* Fundo Animado */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={20}
            cursorSize={200}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.8}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center">
        
        {/* Título */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full mb-24"
        >
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Meus Projetos
            </span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Uma coleção detalhada dos trabalhos que desenvolvi, focados em resolver problemas reais com código limpo e eficiente.
            </p>
        </motion.div>

        {/* Lista de Projetos */}
        <div className="flex flex-col gap-32 w-full">
            {allProjects.map((project, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
                        
                        {/* --- TEXTO --- */}
                        <motion.div 
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`
                                lg:col-span-5 flex flex-col gap-6 text-lg text-gray-300 leading-relaxed 
                                bg-neutral-900/60 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md h-full
                                order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}
                            `}
                        >
                            <div>
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                                {project.technologies.map(tech => (
                                  <Badge key={tech} variant="secondary" className="bg-white/10 hover:bg-white/20 text-gray-200 border-0">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-4">
                              {project.description.map((paragraph, i) => (
                                  <p key={i}>{paragraph}</p>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/10">
                              <a 
                                href={project.repoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                              >
                                <Github size={20} />
                                Repositório
                              </a>
                              {project.demoLink && (
                                <a 
                                  href={project.demoLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-5 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                                >
                                  <ExternalLink size={20} />
                                  Live Demo
                                </a>
                              )}
                            </div>
                        </motion.div>

                        {/* --- GALERIA DE FOTOS --- */}
                        <motion.div 
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`
                                lg:col-span-7 flex flex-col gap-4
                                order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}
                            `}
                        >
                            {/* IMAGEM PRINCIPAL (CAPA) */}
                            {project.images.length > 0 && (
                              <div 
                                className="relative w-full aspect-video cursor-zoom-in group rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900"
                                onClick={() => setSelectedImage(project.images[0])}
                              >
                                  {/* CORREÇÃO: Removemos a div absolute que cobria a imagem. O fundo fica no pai. */}
                                  <img
                                      src={project.images[0]}
                                      alt={`${project.title} Cover`}
                                      // CORREÇÃO: Adicionado 'relative z-10' para garantir que a imagem fique sobre o fundo
                                      className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                  />
                                  
                                  {/* Overlay de Hover (z-20 para ficar acima da imagem) */}
                                  <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm font-medium">
                                      Ver Imagem
                                    </span>
                                  </div>
                              </div>
                            )}

                            {/* MINIATURAS */}
                            {project.images.length > 1 && (
                              <div className="grid grid-cols-3 gap-4">
                                {project.images.slice(1).map((img, idx) => (
                                  <div 
                                    key={idx}
                                    className="relative aspect-video cursor-zoom-in group rounded-xl overflow-hidden border border-white/10 shadow-md bg-neutral-900"
                                    onClick={() => setSelectedImage(img)}
                                  >
                                    <img
                                      src={img}
                                      alt={`${project.title} Detail ${idx + 1}`}
                                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                  </div>
                                ))}
                              </div>
                            )}
                        </motion.div>

                    </div>
                );
            })}
        </div>

      </div>

      {/* --- MODAL / LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Projeto Ampliado"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}