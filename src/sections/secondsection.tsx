import Timeline from "@/components/timeline";
import { motion } from "framer-motion";

function SecondSection() {
  return (
    <div className="w-full min-h-screen relative flex flex-col items-center py-24 overflow-hidden">
      
      {/* Container principal */}
      <div className="w-full max-w-7xl px-4 md:px-12">
        
        {/* Título: Reduzi mb-20 para mb-8 para aproximar da timeline */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="w-full mb-8 pl-4 md:pl-12"
        > 
          <h2 className="text-6xl md:text-8xl font-bold text-start text-white leading-none">
            Minha Jornada <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Profissional
            </span>
          </h2>
        </motion.div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }} 
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <Timeline />
        </motion.div>

      </div>
    </div>
  );
}

export default SecondSection;