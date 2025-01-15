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
    // Simplified logic - can be made more sophisticated
    const answerPatterns = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const maxAnswers = Math.max(...Object.values(answerPatterns));
    const mostCommonAnswer = Object.keys(answerPatterns).find(
      key => answerPatterns[key] === maxAnswers
    );

    if (mostCommonAnswer?.includes("competição") || mostCommonAnswer?.includes("recordes")) {
      return ["Corredor Competitivo", runnerTypes["Corredor Competitivo"]];
    } else if (mostCommonAnswer?.includes("saúde") || mostCommonAnswer?.includes("bem-estar")) {
      return ["Corredor Lifestyle", runnerTypes["Corredor Lifestyle"]];
    } else if (mostCommonAnswer?.includes("trilhas") || mostCommonAnswer?.includes("aventura")) {
      return ["Corredor Aventureiro", runnerTypes["Corredor Aventureiro"]];
    } else {
      return ["Corredor Social", runnerTypes["Corredor Social"]];
    }
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