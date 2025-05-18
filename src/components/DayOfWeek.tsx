
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { getDayOfWeek, formatDate } from '../utils/timeUtils';
import FactDisplay from './FactDisplay';
import ResultDisplay from './ResultDisplay';
import ToolCard from './ToolCard';

const DayOfWeek = () => {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [dayResult, setDayResult] = useState<string | null>(null);
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
    const day = getDayOfWeek(selectedDate);
    setDayResult(day);
    setShowResult(true);
    logToolUsage('DayOfWeek');
  };
  
  return (
    <ToolCard title="Day of the Week" toolName="DayOfWeek">
      <div className="space-y-4">
        <div>
          <label htmlFor="day-date" className="block text-sm font-medium text-cosmic-200 mb-1">
            Select a Date
          </label>
          <input
            id="day-date"
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
          {dayResult && (
            <>The selected date falls on a <span className="text-glow-teal">{dayResult}</span></>
          )}
        </ResultDisplay>
        
        <FactDisplay isVisible={showResult} />
      </div>
    </ToolCard>
  );
};

export default DayOfWeek;
