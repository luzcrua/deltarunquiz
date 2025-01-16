interface QuizProgressProps {
  progress: number;
}

const QuizProgress = ({ progress }: QuizProgressProps) => {
  return (
    <div className="w-full max-w-md mx-auto mb-6 sm:mb-8">
      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs sm:text-sm text-white/60 mt-2">
        {Math.round(progress)}% completo
      </p>
    </div>
  );
};

export default QuizProgress;