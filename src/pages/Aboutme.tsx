import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidEther from "../components/LiquidEther"; 
import Timeline from "../components/timeline"; 
import { X } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Quem Sou Eu",
    content: [
      "Olá! Meu nome é Bernardo Kirsch, sou um desenvolvedor de software, focado em backend e apaixonado por criar soluções tecnológicas que fazem a diferença. Com experiência em diversas linguagens de programação e frameworks, busco sempre aprimorar minhas habilidades e aprender novas tecnologias.",
      "Hoje, meu foco principal é o ambiente em nuvem, onde posso aplicar meus conhecimentos para desenvolver aplicações escaláveis e eficientes. Adoro enfrentar desafios técnicos e encontrar soluções inovadoras para problemas complexos."
    ],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Faculdade e Educação",
    content: [
      "Atualmente, estou cursando Engenharia de Software na PUC-RS e Matemática Aplicada na UFRGS, unindo lógica e tecnologia para solucionar problemas complexos. Minha abordagem é direcionada para colaboração e inovação, sempre buscando criar impacto positivo por meio de soluções tecnológicas acessíveis e eficazes.",
      "Antes disso, concluí o ensino médio no Colégio Pastor Dohms, onde desenvolvi uma base sólida em ciências exatas e lingua alemã.",

    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Além do Código",
    content: [
      "Quando não estou codando, adoro sair da com meus amigos e conhecer novos lugares. Acredito que explorar o mundo ao meu redor me inspira a trazer novas perspectivas para meus projetos.",
      "Também gosto muito de música, a musica é uma grande parte da minha vida e me ajuda a manter o foco e a criatividade enquanto trabalho. Não existe nada melhot que café, codígo e Bad Bunny no fone."
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
  }
];

const certifications = [
  {
    id: "cert1",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Esperando...",
    image: null
  },
  {
    id: "cert2",
    title: "Clean Code",
    issuer: "RocketSeat",
    description: "Certificação focada em boas práticas de desenvolvimento de software, abordando princípios de código limpo, design patterns e técnicas para melhorar a legibilidade e manutenção do código.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "cert3",
    title: "Fullstack Developer Course",
    issuer: "RocketSeat",
    description: "Curso completo de desenvolvimento web fullstack, abrangendo desde o frontend com React até o backend com Node.js, incluindo banco de dados, autenticação e deploy.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function AboutMe() {
  // Estado para controlar o Modal de Imagem
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
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full mb-12"
        >
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
            Sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Mim
            </span>
            </h1>
        </motion.div>

        <div className="flex flex-col gap-24 w-full mb-32">
            {aboutSections.map((section, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={section.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                        <motion.div 
                            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`
                                lg:col-span-7 flex flex-col gap-6 text-lg md:text-xl text-gray-300 leading-relaxed 
                                bg-neutral-900/40 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md
                                order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}
                            `}
                        >
                            <h2 className="text-3xl font-bold text-white mb-2">{section.title}</h2>
                            {section.content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`lg:col-span-5 relative flex justify-center order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                        >
                            <div className="relative w-full aspect-square max-w-[500px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-3xl blur-3xl -z-10 animate-pulse-slow" />
                                <div className="w-full h-full rounded-3xl border-[6px] border-neutral-900/80 shadow-2xl overflow-hidden backdrop-blur-sm">
                                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>

        <div className="w-full flex flex-col items-center mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white leading-none">
                    Minha Jornada <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Profissional
                    </span>
                </h2>
            </motion.div>
            <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="w-full"
            >
                <Timeline />
            </motion.div>
        </div>

        <div className="w-full flex flex-col items-center">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl md:text-8xl font-bold text-white leading-none">
                    Minhas <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Certificações
                    </span>
                </h2>
            </motion.div>

            <div className="flex flex-col gap-24 w-full">
              {certifications.map((cert, index) => {
                 const isEven = index % 2 === 0;

                 return (
                  <div key={cert.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                      
                      <motion.div 
                          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className={`
                              lg:col-span-7 flex flex-col gap-4 text-lg md:text-xl text-gray-300 leading-relaxed 
                              bg-neutral-900/40 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md
                              order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}
                          `}
                      >
                          <div className="mb-2">
                             <h3 className="text-3xl font-bold text-white">{cert.title}</h3>
                             <span className="text-purple-400 font-medium">{cert.issuer}</span>
                          </div>
                          <p>{cert.description}</p>
                          <p className="text-sm text-gray-500 mt-2 italic">
                            (Clique na imagem ao lado para ampliar o certificado)
                          </p>
                      </motion.div>

                      <motion.div 
                          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                          className={`
                              lg:col-span-5 relative flex justify-center
                              order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}
                          `}
                      >
                          <div 
                            className="relative w-full aspect-[4/3] max-w-[500px] cursor-zoom-in group"
                            onClick={() => setSelectedImage(cert.image)}
                          >
                              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-3xl blur-3xl -z-10 animate-pulse-slow" />
                              
                              <div className="w-full h-full rounded-3xl border-[6px] border-neutral-900/80 shadow-2xl overflow-hidden backdrop-blur-sm transform group-hover:scale-[1.02] transition-transform duration-500">
                                  
                                  {cert.image ? (
                                      <img
                                          src={cert.image}
                                          alt={cert.title}
                                          className="w-full h-full object-cover"
                                      />
                                  ) : (
                                      <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                                          <span className="text-gray-400">Sem imagem disponível</span>
                                      </div>
                                  )}
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                      <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full border border-white/20">
                                        Ver Certificado
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </motion.div>

                  </div>
                 )
              })}
            </div>

        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Certificado Ampliado"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}