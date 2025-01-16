import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Camera, Send, Share2, Award, Megaphone } from "lucide-react";
import { toast } from "sonner";

interface ResultCardProps {
  type: string;
  description: string;
  className?: string;
}

const ResultCard = ({ type, description, className }: ResultCardProps) => {
  const handleWhatsAppShare = () => {
    const shareMessage = encodeURIComponent(
      "🏃‍♂️ Ei! Vamos descobrir nosso perfil de corredor juntos? Faz o quiz comigo:\n\n"
    );
    const shareUrl = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${shareMessage}${shareUrl}`, '_blank');
    
    // Return to the quiz page
    setTimeout(() => {
      window.focus();
    }, 500);

    toast.success("Link compartilhado! Convide mais amigos para descobrirem seus perfis juntos! 🎉");
  };

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

          {/* Instructions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
            <div className="glass-card p-4 sm:p-6 rounded-lg space-y-4">
              {/* Screenshot Instruction */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Camera className="w-5 h-5 text-neon-blue" />
                <p className="text-white/90">
                  Tire o print do seu PERFIL DE CORREDOR
                </p>
              </motion.div>

              {/* Share Instruction */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Share2 className="w-5 h-5 text-neon-blue" />
                <p className="text-white/90">
                  Compartilhe este quiz com 3 amigos(a) de corrida
                </p>
              </motion.div>

              {/* WhatsApp Share Button */}
              <motion.div className="pl-8">
                <Button
                  onClick={handleWhatsAppShare}
                  className="glass-card group hover:scale-105 transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto"
                >
                  <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Compartilhar no WhatsApp</span>
                </Button>
              </motion.div>

              {/* Send Print Instruction */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Send className="w-5 h-5 text-neon-blue" />
                <p className="text-white/90">
                  Manda o print do seu perfil de corredor
                </p>
              </motion.div>

              {/* Discount Info */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Award className="w-5 h-5 text-neon-purple" />
                <p className="text-white/90">
                  Ganhe <span className="font-bold text-neon-purple">10% de desconto</span> antes de todo mundo para o pré-lançamento
                </p>
              </motion.div>
            </div>
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