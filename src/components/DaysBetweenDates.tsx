
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { calculateDaysBetweenDates, formatDate } from '../utils/timeUtils';
import FactDisplay from './FactDisplay';
import ResultDisplay from './ResultDisplay';
import ToolCard from './ToolCard';

const DaysBetweenDates = () => {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [daysCount, setDaysCount] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');
  
  const { logToolUsage } = useAppContext();
  
  const handleCalculate = () => {
    if (!startDate || !endDate) {
      setError('Please select both dates');
      setShowResult(false);
      return;
    }
    
    setError('');
    const days = calculateDaysBetweenDates(startDate, endDate);
    setDaysCount(days);
    setShowResult(true);
    logToolUsage('DaysBetweenDates');
  };
  
  return (
    <ToolCard title="Days Between Two Dates" toolName="DaysBetweenDates">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-date" className="block text-sm font-medium text-cosmic-200 mb-1">
              Start Date
            </label>
            <input
              id="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-cosmic-600 border border-cosmic-400 rounded px-3 py-2 w-full"
            />
          </div>
          
          <div>
            <label htmlFor="end-date" className="block text-sm font-medium text-cosmic-200 mb-1">
              End Date
            </label>
            <input
              id="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-cosmic-600 border border-cosmic-400 rounded px-3 py-2 w-full"
            />
          </div>
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
                "These dates are the same day!"
              ) : (
                <>{daysCount} {daysCount === 1 ? 'day' : 'days'} between these dates</>
              )}
            </>
          )}
        </ResultDisplay>
        
        <FactDisplay isVisible={showResult} />
      </div>
    </ToolCard>
  );
};

export default DaysBetweenDates;
