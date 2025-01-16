import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Crown, BookOpen, Megaphone, Share2, Instagram } from "lucide-react";
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
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Megaphone className="w-6 h-6 text-neon-purple animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold gradient-text">
                  QUER TER ACESSO EXCUSIVO AO PRÉ-LANÇAMENTO DA LINHA RUN E GANHAR UM EBOOK GRATUITO?
                </h3>
              </div>
              <div className="flex items-center gap-6 mt-3">
                <Crown className="w-10 h-10 text-yellow-400 animate-pulse" />
                <BookOpen className="w-10 h-10 text-neon-blue animate-pulse" />
              </div>
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
              className="neon-border bg-background/50 hover:bg-neon-blue/20 text-white px-2 sm:px-6 py-2 sm:py-4 text-[0.65rem] sm:text-base font-medium transition-all duration-300 hover:scale-105 animate-glow w-full sm:w-auto relative z-20"
            >
              <a 
                href="https://bit.ly/quizbotao589" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                QUERO ACESSO EXCLUSIVO À LINHA RUN + EBOOK GRATUITO
              </a>
            </Button>
          </motion.div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <div className="flex justify-center items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-white"
                onClick={() => {
                  const shareUrl = encodeURIComponent(window.location.href);
                  const shareText = encodeURIComponent("Descubra seu perfil de corredor! Faça o quiz:");
                  window.open(`https://wa.me/?text=${shareText}%20${shareUrl}`, '_blank');
                }}
              >
                <Share2 className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-white"
                asChild
              >
                <a
                  href="https://www.instagram.com/deltafitnessbrazil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-2">
              © 2024 Delta Fitness Brazil. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ResultCard;