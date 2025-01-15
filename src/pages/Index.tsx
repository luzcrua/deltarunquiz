import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuizCard from "@/components/QuizCard";
import ResultCard from "@/components/ResultCard";
import { questions, runnerTypes } from "@/data/quizData";
import useSound from "use-sound";

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [playClick] = useSound("/click.mp3");
  const [playSuccess] = useSound("/success.mp3");

  const handleAnswer = (answer: string) => {
    playClick();
    setAnswers([...answers, answer]);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      playSuccess();
    }
  };

  const determineRunnerType = () => {
    // Count the frequency of keywords in answers
    const traits = {
      competitive: 0,
      lifestyle: 0,
      adventurous: 0,
      social: 0
    };

    answers.forEach(answer => {
      // Competitive traits
      if (answer.toLowerCase().includes("competição") || 
          answer.toLowerCase().includes("recordes") ||
          answer.toLowerCase().includes("superação") ||
          answer.toLowerCase().includes("determinação")) {
        traits.competitive++;
      }
      
      // Lifestyle traits
      if (answer.toLowerCase().includes("saúde") ||
          answer.toLowerCase().includes("bem-estar") ||
          answer.toLowerCase().includes("equilíbrio") ||
          answer.toLowerCase().includes("rotina")) {
        traits.lifestyle++;
      }
      
      // Adventurous traits
      if (answer.toLowerCase().includes("trilhas") ||
          answer.toLowerCase().includes("aventura") ||
          answer.toLowerCase().includes("natureza") ||
          answer.toLowerCase().includes("explorar")) {
        traits.adventurous++;
      }
      
      // Social traits
      if (answer.toLowerCase().includes("grupo") ||
          answer.toLowerCase().includes("amigos") ||
          answer.toLowerCase().includes("socialização") ||
          answer.toLowerCase().includes("comunidade")) {
        traits.social++;
      }
    });

    console.log("Trait scores:", traits);

    // Find the dominant trait
    const dominantTrait = Object.entries(traits).reduce((a, b) => 
      a[1] > b[1] ? a : b
    )[0];

    // Map trait to runner type
    const typeMap = {
      competitive: "Corredor Competitivo",
      lifestyle: "Corredor Lifestyle",
      adventurous: "Corredor Aventureiro",
      social: "Corredor Social"
    };

    const runnerType = typeMap[dominantTrait as keyof typeof typeMap];
    console.log("Determined runner type:", runnerType);

    return [runnerType, runnerTypes[runnerType as keyof typeof runnerTypes]] as const;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-background via-background/95 to-background">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-12 gradient-text text-center"
      >
        Qual tipo de corredor(a) é você?
      </motion.h1>

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

      {currentQuestion < questions.length && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-white/60"
        >
          Pergunta {currentQuestion + 1} de {questions.length}
        </motion.p>
      )}
    </div>
  );
};

export default Index;