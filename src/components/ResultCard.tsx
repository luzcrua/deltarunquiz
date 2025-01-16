import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ResultCardProps {
  type: string;
  description: string;
  className?: string;
}

const ResultCard = ({ type, description, className }: ResultCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("max-w-3xl mx-auto p-4 sm:p-6", className)}
    >
      <Card className="glass-card overflow-hidden relative">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 sm:p-8 relative z-10"
        >
          {/* Gradient Orb Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 opacity-50" />
          
          {/* Title with Neon Effect */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text animate-glow tracking-tight"
          >
            {type}
          </motion.h2>

          {/* Description with Glass Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="glass-card p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 backdrop-blur-lg"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
              {description}
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex justify-center mt-4 sm:mt-6"
          >
            <Button
              asChild
              className="neon-border bg-background/50 hover:bg-neon-blue/20 text-white px-3 sm:px-6 py-2 sm:py-4 text-[0.7rem] sm:text-base font-medium transition-all duration-300 hover:scale-105 animate-glow w-full sm:w-auto relative z-20"
            >
              <a 
                href="https://bit.ly/quizlinharun" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                CONHECER O PRÉ-LANÇAMENTO DA LINHA RUN
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ResultCard;