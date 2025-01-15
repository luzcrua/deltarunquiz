import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ResultCardProps {
  type: string;
  description: string;
  className?: string;
}

const ResultCard = ({ type, description, className }: ResultCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn("glass-card p-8 rounded-lg max-w-2xl w-full mx-auto text-center", className)}
    >
      <h2 className="text-4xl font-bold mb-4 gradient-text animate-glow">
        {type}
      </h2>
      <p className="text-lg leading-relaxed text-white/80">{description}</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="neon-border mt-8 px-8 py-3 rounded-lg font-medium"
        onClick={() => window.location.reload()}
      >
        Tentar Novamente
      </motion.button>
    </motion.div>
  );
};

export default ResultCard;