import { motion } from "framer-motion";

const QuizHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-4 sm:mb-6 flex flex-col items-center gap-2"
    >
      <img 
        src="/lovable-uploads/e1c47a9d-91a2-46cc-847d-ded7e2386c66.png" 
        alt="Delta Fitness Brazil"
        className="w-8 sm:w-10 h-auto"
      />
      <div className="text-center">
        <h2 className="text-base sm:text-lg text-white/80 font-medium">
          DELTA FITNESS BRAZIL
        </h2>
        <h1 className="text-base sm:text-lg font-medium gradient-text">
          QUIZ LINHA RUN
        </h1>
      </div>
    </motion.div>
  );
};

export default QuizHeader;