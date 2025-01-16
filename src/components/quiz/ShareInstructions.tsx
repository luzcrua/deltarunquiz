import { motion } from "framer-motion";
import { Camera, Share2, Send, Award } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

export const ShareInstructions = () => {
  const handleWhatsAppShare = () => {
    const shareMessage = encodeURIComponent(
      "🏃‍♂️ Ei! Vamos descobrir nosso perfil de corredor juntos? Faz o quiz comigo:\n\n"
    );
    const shareUrl = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${shareMessage}${shareUrl}`, '_blank');
    
    setTimeout(() => {
      window.focus();
    }, 500);

    toast.success("Link compartilhado! Convide mais amigos para descobrirem seus perfis juntos! 🎉");
  };

  const instructionVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    hover: { x: 5 }
  };

  return (
    <div className="glass-card p-4 sm:p-6 rounded-lg space-y-4">
      <motion.div 
        variants={instructionVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center gap-3"
      >
        <Camera className="w-5 h-5 text-neon-blue" />
        <p className="text-white/90">
          Tire o print do seu resultado PERFIL DE CORREDOR
        </p>
      </motion.div>

      <motion.div 
        variants={instructionVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center gap-3"
      >
        <Share2 className="w-5 h-5 text-neon-blue" />
        <p className="text-white/90">
          Pegue o print e poste nos stories marcando @deltafitnessbrazil
        </p>
      </motion.div>

      <motion.div 
        variants={instructionVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center gap-3"
      >
        <Share2 className="w-5 h-5 text-neon-blue" />
        <p className="text-white/90">
          Compartilhe este quiz com 3 amigos(a) de corrida, clique no botão COMPARTILHAR NO WHATSAPP
        </p>
      </motion.div>

      <motion.div className="pl-8">
        <Button
          onClick={handleWhatsAppShare}
          className="glass-card group hover:scale-105 transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 w-full sm:w-auto"
        >
          <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>Compartilhar no WhatsApp</span>
        </Button>
      </motion.div>

      <motion.div 
        variants={instructionVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center gap-3"
      >
        <Send className="w-5 h-5 text-neon-blue" />
        <p className="text-white/90">
          Mande os prints pra gente mostrando que fez as tarefas clicando no botão abaixo
        </p>
      </motion.div>

      <motion.div 
        variants={instructionVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="flex items-center gap-3"
      >
        <Award className="w-5 h-5 text-neon-purple" />
        <p className="text-white/90">
          Ganhe <span className="font-bold text-neon-purple">10% de desconto</span> antes de todo mundo para o pré-lançamento mais um ebook gratuito
        </p>
      </motion.div>
    </div>
  );
};