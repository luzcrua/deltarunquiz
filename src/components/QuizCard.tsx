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
      className={cn("glass-card p-8 rounded-lg max-w-2xl w-full mx-auto", className)}
    >
      <h2 className="text-2xl font-bold mb-6 gradient-text">{question}</h2>
      <div className="grid gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="neon-border p-4 rounded-lg text-left hover:bg-white/5 transition-all duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizCard;