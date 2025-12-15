import { useState, useEffect } from "react";
import CardSwap, { Card } from '../components/CardSwap';
import { Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

const projects = [
  {
    id: 1,
    title: "Beasybot",
    description: "Um agente de IA externo que atua como um consultor sênior, centralizando e processando todo o conhecimento da empresa.",
    tech: ["Nest.js", "RAG", "Langchain", "OpenAI"],
    image: "https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1765253025291.jpeg", 
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Plataforma Doação",
    description: "Aplicação que facilita doações para a instituição Pao dos Pobres, permitindo contribuições simples e seguras.",
    tech: ["ReactJs", "Tailwind", "ShadCn", "AWS"],
    image: "https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1765255282700.jpeg",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "MeetingRecorder",
    description: "Gravador de reuniões com IA que transcreve, resume e destaca os pontos principais em tempo real.",
    tech: ["Python", "Docker", "Selenium", "Ffmpeg"],
    image: "https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/1765253024706.jpeg",
    gradient: "from-purple-500 to-pink-500"
  },
];

function ThirdSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Checa inicial
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center py-10 px-4 md:px-12 overflow-hidden">
      
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <motion.div 
          className="flex flex-col gap-6 md:gap-8 z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white leading-none">
            Meus <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projetos
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-lg leading-relaxed">
            Aqui estão alguns dos trabalhos que desenvolvi. Focados em performance, 
            experiência do usuário e código limpo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a 
              href="https://github.com/kirschzao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-200 transition-all"
            >
              <Github size={24} />
              Ver Github
            </a>

            <Link 
              to="/projects"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white text-lg rounded-full hover:bg-white/10 transition-all"
            >
              Ver Portfolio Completo
              <ArrowRight size={24} />
            </Link>
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
          <div className="w-full h-[500px] md:h-[700px] flex items-center justify-center"> 
            
            <CardSwap
              width={isMobile ? 320 : 480}
              height={isMobile ? 420 : 580}
              cardDistance={isMobile ? 30 : 50}
              verticalDistance={isMobile ? 20 : 30}
              delay={4000}
              pauseOnHover={true}
            >
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-pointer"
                >
                  
                  {/* Imagem */}
                  <div className="h-[55%] w-full relative overflow-hidden group">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 mix-blend-overlay z-10`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="h-[45%] p-6 flex flex-col justify-between bg-neutral-900/95 backdrop-blur-xl">
                    <div>
                      <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm md:text-base line-clamp-3 leading-snug">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-1 text-[10px] md:text-sm font-medium text-white bg-white/5 rounded-full border border-white/10">
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