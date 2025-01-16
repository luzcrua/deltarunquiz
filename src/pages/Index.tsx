import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizCard from "@/components/QuizCard";
import ResultCard from "@/components/ResultCard";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizTitle from "@/components/quiz/QuizTitle";
import QuizProgress from "@/components/quiz/QuizProgress";
import { questions, runnerTypes } from "@/data/quizData";
import useSound from "use-sound";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [playClick] = useSound("/click.mp3");
  const [playSuccess] = useSound("/success.mp3");

  const progress = (currentQuestion / questions.length) * 100;

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

  const handleAnswer = (answer: string) => {
    playClick();
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      playSuccess();
      setShowResult(true);
    }
  };

  const determineRunnerType = () => {
    const traits = {
      elite: 0,
      lifestyle: 0,
      adventurous: 0,
      social: 0,
      technical: 0
    };

    answers.forEach(answer => {
      // Elite traits
      if (answer.toLowerCase().includes("competição") || 
          answer.toLowerCase().includes("recordes") ||
          answer.toLowerCase().includes("intenso")) {
        traits.elite++;
      }
      
      // Lifestyle traits
      if (answer.toLowerCase().includes("saúde") ||
          answer.toLowerCase().includes("bem-estar") ||
          answer.toLowerCase().includes("equilíbrio")) {
        traits.lifestyle++;
      }
      
      // Adventurous traits
      if (answer.toLowerCase().includes("trilhas") ||
          answer.toLowerCase().includes("aventura") ||
          answer.toLowerCase().includes("natureza")) {
        traits.adventurous++;
      }
      
      // Social traits
      if (answer.toLowerCase().includes("grupo") ||
          answer.toLowerCase().includes("amigos") ||
          answer.toLowerCase().includes("socialização")) {
        traits.social++;
      }
      
      // Technical traits
      if (answer.toLowerCase().includes("técnica") ||
          answer.toLowerCase().includes("planilha") ||
          answer.toLowerCase().includes("análise")) {
        traits.technical++;
      }
    });

    const dominantTrait = Object.entries(traits).reduce((a, b) => 
      a[1] > b[1] ? a : b
    )[0];

    const typeMap = {
      elite: "Corredor Elite",
      lifestyle: "Corredor Lifestyle",
      adventurous: "Corredor Aventureiro",
      social: "Corredor Social",
      technical: "Corredor Técnico"
    };

    const runnerType = typeMap[dominantTrait as keyof typeof typeMap];
    return [runnerType, runnerTypes[runnerType as keyof typeof runnerTypes]] as const;
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/8ae9b043-9513-49cc-b9b7-e58662001972.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <QuizHeader />
          <QuizTitle />
          {!showResult && <QuizProgress progress={progress} />}
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <QuizCard
              key={currentQuestion}
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              onSelect={handleAnswer}
              className="animate-float"
            />
          ) : (
            <ResultCard
              key="result"
              type={determineRunnerType()[0]}
              description={determineRunnerType()[1]}
              className="animate-float"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
