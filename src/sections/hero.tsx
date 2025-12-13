import TextType from "@/components/TextType";
import { Github, Linkedin,} from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  const userPhotoUrl = "https://ngl2axdmrupsglkt.public.blob.vercel-storage.com/IMG-20230727-WA0180_Original.jpg";

  return (
    // 1. Mudei o section para ser um Flex Container que centraliza tudo
    <section className="w-full min-h-screen bg-transparent flex items-center justify-center py-20 relative overflow-hidden">
      
      {/* 2. Adicionei esta DIV Container (max-w-7xl) para limitar a largura e alinhar com o resto do site */}
      <div className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        
        {/* --- COLUNA DA ESQUERDA: Texto --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-start text-start space-y-6 order-2 lg:order-1"
        >
          <div className="space-y-2">
            <h2 className="text-gray-400 text-xl md:text-2xl font-medium tracking-wider uppercase">
              Olá, eu sou
            </h2>
            
            <div className="text-4xl md:text-6xl font-bold text-white min-h-[80px] flex items-center">
              <TextType
                text={["Bernardo Kirsch,", "Cloud Developer,", "Tech Enthusiast."]}
                typingSpeed={100}
                deletingSpeed={50}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Desenvolvedor apaixonado por criar experiências digitais modernas, 
            rápidas e impactantes. Sempre buscando ajudar as pessoas através da tecnologia.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="https://github.com/kirschzao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/bernardo-kirsch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* --- COLUNA DA DIREITA: Foto --- */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // Ajuste fino: removi margens automáticas para deixar o grid controlar o alinhamento
          className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square flex justify-center items-center order-1 lg:order-2 mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/40 to-pink-600/40 rounded-full blur-3xl -z-10 animate-pulse-slow" />
          
          <div className="w-full h-full rounded-full border-[6px] border-neutral-900/80 shadow-2xl overflow-hidden relative z-10">
            <img
              src={userPhotoUrl}
              alt="Foto de Perfil"
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>

     
    </section>
  );
}

export default Hero;