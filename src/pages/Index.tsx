import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizCard from "@/components/QuizCard";
import ResultCard from "@/components/ResultCard";
import { Progress } from "@/components/ui/progress";
import { questions, runnerTypes } from "@/data/quizData";
import useSound from "use-sound";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [playClick] = useSound("/click.mp3");
  const [playSuccess] = useSound("/success.mp3");

  const progress = (currentQuestion / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    playClick();
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      playSuccess();
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

    console.log("Trait scores:", traits);

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
    console.log("Determined runner type:", runnerType);

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
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-5xl font-bold mb-6 gradient-text tracking-tight">
            LINHA RUN
            <span className="block text-3xl mt-2">(PRÉ-LANÇAMENTO)</span>
          </h1>
          
          <div className="w-full max-w-md mx-auto">
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-white/60">
              Progresso: {Math.round(progress)}%
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentQuestion < questions.length ? (
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