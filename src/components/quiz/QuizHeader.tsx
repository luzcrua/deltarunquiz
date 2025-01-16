import { motion } from "framer-motion";

const QuizHeader = () => {
  return (
    <motion.div 
      className="mb-8"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img 
        src="/lovable-uploads/e2a65604-b3dd-4d81-b906-1191aae09373.png" 
        alt="Delta Fitness Brazil" 
        className="w-40 h-auto mx-auto mb-4 object-contain"
      />
      <motion.h1 
        className="font-serif text-5xl font-bold gradient-text tracking-tight mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        DELTA FITNESS BRAZIL
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-2"
      >
        <p className="text-3xl font-sans text-neon-blue animate-glow font-medium tracking-wide">
          LINHA RUN
        </p>
        <p className="text-xl font-serif text-neon-purple mt-1 italic">
          (PRÉ-LANÇAMENTO)
        </p>
      </motion.div>
    </motion.div>
  );
};

export default QuizHeader;