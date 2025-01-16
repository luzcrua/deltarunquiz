import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface QuizProgressProps {
  progress: number;
}

const QuizProgress = ({ progress }: QuizProgressProps) => {
  return (
    <motion.div 
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <Progress value={progress} className="h-2 mb-2 bg-white/10" />
      <p className="text-sm text-white/60 font-sans tracking-wider">
        Progresso: {Math.round(progress)}%
      </p>
    </motion.div>
  );
};

export default QuizProgress;