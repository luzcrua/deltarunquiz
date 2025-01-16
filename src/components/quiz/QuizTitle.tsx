import { motion } from "framer-motion";

const QuizTitle = () => {
  return (
    <motion.div 
      className="glass-card p-6 mb-8 mx-auto max-w-2xl transform hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 animate-pulse" />
        <h2 className="text-3xl font-bold gradient-text animate-glow font-sans relative z-10 py-2">
          QUAL TIPO DE CORREDOR(A) VOCÊ É?
        </h2>
      </div>
    </motion.div>
  );
};

export default QuizTitle;