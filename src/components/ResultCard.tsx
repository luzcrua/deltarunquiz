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
      className={cn("max-w-3xl mx-auto p-6", className)}
    >
      <Card className="glass-card overflow-hidden relative">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 relative z-10"
        >
          {/* Gradient Orb Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 opacity-50" />
          
          {/* Title with Neon Effect */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-5xl font-bold mb-8 gradient-text animate-glow tracking-tight"
          >
            {type}
          </motion.h2>

          {/* Description with Glass Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="glass-card p-6 rounded-lg mb-8 backdrop-blur-lg"
          >
            <p className="text-xl leading-relaxed text-white/90">
              {description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button
              onClick={() => window.location.reload()}
              className="neon-border bg-background/50 hover:bg-background/80 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Tentar Novamente
            </Button>
            
            <Button
              onClick={() => window.location.href = "https://runprelaunch.com"}
              className="neon-border bg-background/50 hover:bg-background/80 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Conhecer a Run Pre-Launch
            </Button>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ResultCard;