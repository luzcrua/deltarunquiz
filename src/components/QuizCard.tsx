import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Trophy, 
  Heart, 
  Mountain, 
  Brain,
  Target,
  Watch,
  Sun,
  Stethoscope,
  Rocket,
  ClipboardList,
  Smartphone,
  Goal
} from "lucide-react";
import { ReactNode } from "react";

interface QuizCardProps {
  question: string;
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
}

const getQuestionIcon = (question: string): ReactNode => {
  if (question.includes("motivação")) return <Trophy />;
  if (question.includes("treinar")) return <Heart />;
  if (question.includes("terreno")) return <Mountain />;
  if (question.includes("desafios")) return <Brain />;
  if (question.includes("objetivo")) return <Target />;
  if (question.includes("monitora")) return <Watch />;
  if (question.includes("horário")) return <Sun />;
  if (question.includes("lesões")) return <Stethoscope />;
  if (question.includes("motiva")) return <Rocket />;
  if (question.includes("prepara")) return <ClipboardList />;
  if (question.includes("equipamentos")) return <Smartphone />;
  if (question.includes("metas")) return <Goal />;
  return <Trophy />;
};

const QuizCard = ({ question, options, onSelect, className }: QuizCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "glass-card p-4 sm:p-6 md:p-8 rounded-lg max-w-2xl w-full mx-auto",
        className
      )}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-start gap-3 mb-6"
      >
        <div className="w-6 h-6 sm:w-8 sm:h-8 text-neon-blue flex-shrink-0 mt-1">
          {getQuestionIcon(question)}
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text text-left">
          {question}
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid gap-3 sm:gap-4"
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
            className="neon-border p-3 sm:p-4 rounded-lg text-left hover:bg-white/5 transition-all duration-300 text-sm sm:text-base md:text-lg"
          >
            {option}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default QuizCard;