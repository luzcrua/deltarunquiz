import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Megaphone } from "lucide-react";
import { ResultHeader } from "./quiz/ResultHeader";
import { ShareInstructions } from "./quiz/ShareInstructions";

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
          transition={{ duration: 0.5 }}
          className="p-4 sm:p-8 relative z-10"
        >
          {/* Gradient Orb Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 opacity-50" />
          
          {/* Result Header Section */}
          <ResultHeader type={type} description={description} />

          {/* Instructions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            {/* Pre-launch Title */}
            <div className="flex items-center gap-3 mb-6">
              <Megaphone className="w-6 h-6 text-neon-purple animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                QUER CONHECER O PRÉ-LANÇAMENTO DA LINHA RUN?
              </h3>
            </div>

            {/* Instructions Card */}
            <ShareInstructions />
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
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