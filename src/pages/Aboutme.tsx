import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidEther from "../components/LiquidEther"; 
import Timeline from "../components/timeline"; 
import { X } from "lucide-react"; // Importando ícone de fechar

// --- DADOS SOBRE MIM ---
const aboutSections = [
  {
    id: 1,
    title: "Quem Sou Eu",
    content: [
      "Olá! Sou um desenvolvedor focado em criar experiências digitais que unem performance e design de ponta.",
      "Minha paixão pela tecnologia começou cedo e hoje se traduz em códigos limpos, interfaces intuitivas e soluções escaláveis."
    ],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Além do Código",
    content: [
      "Quando não estou programando, estou sempre buscando novas formas de inspiração. Seja explorando novas tecnologias, lendo sobre design ou praticando esportes.",
      "Acredito que o equilíbrio é fundamental para manter a criatividade em alta."
    ],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop"
  }
];

// --- DADOS DAS CERTIFICAÇÕES ---
const certifications = [
  {
    id: "cert1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Validação de expertise em projetar sistemas distribuídos na plataforma AWS, com foco em escalabilidade, segurança e otimização de custos.",
    // Substitua pela imagem real do seu certificado
    image: "https://images.unsplash.com/photo-1523580846055-a722c423e59e?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: "cert2",
    title: "Meta Frontend Developer",
    issuer: "Meta (Facebook)",
    description: "Certificação profissional cobrindo tópicos avançados de React, UX/UI Design, controle de versão e desenvolvimento de interfaces responsivas modernas.",
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
        
        {/* Título Principal */}
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

        {/* --- SEÇÃO 1: TEXTOS SOBRE MIM --- */}
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

        {/* --- SEÇÃO 2: JORNADA PROFISSIONAL --- */}
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

        {/* --- SEÇÃO 3: CERTIFICAÇÕES (NOVA) --- */}
        <div className="w-full flex flex-col items-center">
            
            {/* Título */}
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

            {/* Lista de Certificações */}
            <div className="flex flex-col gap-24 w-full">
              {certifications.map((cert, index) => {
                 // Alterna lados (Ímpar/Par)
                 const isEven = index % 2 === 0;

                 return (
                  <div key={cert.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                      
                      {/* Texto */}
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

                      {/* Imagem (Clicável) */}
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
                              {/* Efeito Glow */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-3xl blur-3xl -z-10 animate-pulse-slow" />
                              
                              {/* Card da Imagem */}
                              <div className="w-full h-full rounded-3xl border-[6px] border-neutral-900/80 shadow-2xl overflow-hidden backdrop-blur-sm transform group-hover:scale-[1.02] transition-transform duration-500">
                                  <img
                                      src={cert.image}
                                      alt={cert.title}
                                      className="w-full h-full object-cover"
                                  />
                                  {/* Overlay de "Ver" */}
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

      {/* --- MODAL / LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)} // Fecha ao clicar no fundo
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            {/* Botão Fechar */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            {/* Imagem Ampliada */}
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Certificado Ampliado"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar na imagem
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}