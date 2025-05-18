
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { calculateDaysFromDateToToday, formatDate } from '../utils/timeUtils';
import FactDisplay from './FactDisplay';
import ResultDisplay from './ResultDisplay';
import ToolCard from './ToolCard';

const DaysFromDateToToday = () => {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [daysCount, setDaysCount] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');
  
  const { logToolUsage } = useAppContext();
  
  const handleCalculate = () => {
    if (!selectedDate) {
      setError('Please select a date');
      setShowResult(false);
      return;
    }
    
    setError('');
    const days = calculateDaysFromDateToToday(selectedDate);
    setDaysCount(days);
    setShowResult(true);
    logToolUsage('DaysFromDateToToday');
  };
  
  return (
    <ToolCard title="Days From a Date to Today" toolName="DaysFromDateToToday">
      <div className="space-y-4">
        <div>
          <label htmlFor="selected-date" className="block text-sm font-medium text-cosmic-200 mb-1">
            Select a Date
          </label>
          <input
            id="selected-date"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-cosmic-600 border border-cosmic-400 rounded px-3 py-2 w-full"
          />
        </div>
        
        {error && (
          <div className="text-red-400 text-sm">{error}</div>
        )}
        
        <div className="pt-2">
          <button
            onClick={handleCalculate}
            className="w-full space-gradient-btn text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-glow-blue"
          >
            Show Output
          </button>
        </div>
        
        <ResultDisplay isVisible={showResult}>
          {daysCount !== null && (
            <>
              {daysCount === 0 ? (
                "That's today!"
              ) : (
                <>{daysCount} {daysCount === 1 ? 'day' : 'days'} {selectedDate > formatDate(new Date()) ? 'until' : 'since'} the selected date</>
              )}
            </>
          )}
        </ResultDisplay>
        
        <FactDisplay isVisible={showResult} />
      </div>
    </ToolCard>
  );
};

export default DaysFromDateToToday;
