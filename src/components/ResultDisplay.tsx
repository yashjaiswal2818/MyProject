
import { ReactNode } from 'react';

interface ResultDisplayProps {
  isVisible: boolean;
  children: ReactNode;
}

const ResultDisplay = ({ isVisible, children }: ResultDisplayProps) => {
  if (!isVisible) return null;
  
  return (
    <div className="mt-4 bg-cosmic-600/80 border border-cosmic-500 rounded-md p-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-white font-medium mb-2">Result</h3>
      <div className="text-lg text-glow-blue font-medium">
        {children}
      </div>
    </div>
  );
};

export default ResultDisplay;
