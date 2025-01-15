import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
}

const QuizCard = ({ question, options, onSelect, className }: QuizCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn("glass-card p-8 rounded-lg max-w-2xl w-full mx-auto", className)}
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold mb-6 gradient-text"
      >
        {question}
      </motion.h2>
      
      <motion.div 
        className="grid gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            onClick={() => onSelect(option)}
            className="neon-border p-4 rounded-lg text-left hover:bg-white/5 transition-all duration-300"
          >
            {option}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default QuizCard;