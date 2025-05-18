
import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

interface FactDisplayProps {
  isVisible: boolean;
}

const FactDisplay = ({ isVisible }: FactDisplayProps) => {
  const { fact, isLoadingFact, fetchNewFact } = useAppContext();
  
  useEffect(() => {
    if (isVisible && !fact) {
      fetchNewFact();
    }
  }, [isVisible, fact, fetchNewFact]);
  
  if (!isVisible) return null;
  
  return (
    <div className="mt-6 animate-fade-in">
      <div className="bg-cosmic-600/50 border border-cosmic-500 rounded-md p-4">
        <h4 className="text-glow-blue font-medium mb-2">Did You Know?</h4>
        
        {isLoadingFact ? (
          <div className="flex items-center justify-center py-2">
            <div className="w-6 h-6 border-2 border-glow-blue border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <p className="text-cosmic-100">{fact}</p>
        )}
      </div>
    </div>
  );
};

export default FactDisplay;
