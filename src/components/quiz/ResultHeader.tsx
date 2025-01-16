import { motion } from "framer-motion";
import { Camera } from "lucide-react";

interface ResultHeaderProps {
  type: string;
  description: string;
}

export const ResultHeader = ({ type, description }: ResultHeaderProps) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text animate-glow tracking-tight"
      >
        {type}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="glass-card p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 backdrop-blur-lg"
      >
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 glass-card p-4 sm:p-6 rounded-lg"
      >
        <div className="flex items-center gap-3 mb-4">
          <Camera className="w-6 h-6 text-pink-500 animate-pulse" />
          <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            COMPARTILHE SEU RESULTADO!
          </h3>
        </div>
        <p className="text-white/90 pl-9">
          Tire um print do seu resultado e compartilhe nos stories marcando{" "}
          <span className="font-bold text-pink-500">@deltafitnessbrazil</span>
        </p>
      </motion.div>
    </>
  );
};