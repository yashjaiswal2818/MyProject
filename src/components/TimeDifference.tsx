
import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { calculateTimeDifference, formatDate, formatTime, getAmPm } from '../utils/timeUtils';
import FactDisplay from './FactDisplay';
import ResultDisplay from './ResultDisplay';
import ToolCard from './ToolCard';

type AmPm = 'AM' | 'PM';

const TimeDifference = () => {
  const now = new Date();
  const [startDate, setStartDate] = useState(formatDate(now));
  const [startTime, setStartTime] = useState(formatTime(now));
  const [startAmPm, setStartAmPm] = useState<AmPm>(getAmPm(now));
  
  const [endDate, setEndDate] = useState(formatDate(now));
  const [endTime, setEndTime] = useState(formatTime(now));
  const [endAmPm, setEndAmPm] = useState<AmPm>(getAmPm(now));
  
  const [timeResult, setTimeResult] = useState<{ hours: number, minutes: number, seconds: number } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState('');
  
  const { logToolUsage } = useAppContext();
  
  const handleCalculate = () => {
    if (!startDate || !endDate || !startTime || !endTime) {
      setError('Please fill in all date and time fields');
      setShowResult(false);
      return;
    }
    
    setError('');
    const result = calculateTimeDifference(
      startDate,
      startTime,
      startAmPm,
      endDate,
      endTime,
      endAmPm
    );
    setTimeResult(result);
    setShowResult(true);
    logToolUsage('TimeDifference');
  };
  
  return (
    <ToolCard title="Time Difference" toolName="TimeDifference">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-cosmic-100">Start</h3>
            
            <div>
              <label htmlFor="start-date" className="block text-sm font-medium text-cosmic-200 mb-1">
                Date
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
              <label htmlFor="start-time" className="block text-sm font-medium text-cosmic-200 mb-1">
                Time
              </label>
              <div className="flex space-x-2">
                <select
                  id="start-time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="bg-cosmic-600 border border-cosmic-400 rounded px-3 py-2 flex-grow"
                >
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = i + 1; // 1 to 12
                    const hourString = hour.toString().padStart(2, '0');
                    return Array.from({ length: 4 }, (_, j) => {
                      const minute = j * 15; // 0, 15, 30, 45
                      const minuteString = minute.toString().padStart(2, '0');
                      const timeValue = `${hourString}:${minuteString}`;
                      return (
                        <option key={timeValue} value={timeValue}>
                          {timeValue}
                        </option>
                      );
                    });
                  }).flat()}
                </select>
                <select
                  id="start-ampm"
                  value={startAmPm}
                  onChange={(e) => setStartAmPm(e.target.value as AmPm)}
                  className="bg-cosmic-600 border border-cosmic-400 rounded px-2 py-2 w-20"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-cosmic-100">End</h3>
            
            <div>
              <label htmlFor="end-date" className="block text-sm font-medium text-cosmic-200 mb-1">
                Date
              </label>
              <input
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-cosmic-600 border border-cosmic-400 rounded px-3 py-2 w-full"
              />
            </div>
            
            <div>
              <label htmlFor="end-time" className="block text-sm font-medium text-cosmic-200 mb-1">
                Time
              </label>
              <div className="flex space-x-2">
                <select
                  id="end-time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="bg-cosmic-600 border border-cosmic-400 rounded px-3 py-2 flex-grow"
                >
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = i + 1; // 1 to 12
                    const hourString = hour.toString().padStart(2, '0');
                    return Array.from({ length: 4 }, (_, j) => {
                      const minute = j * 15; // 0, 15, 30, 45
                      const minuteString = minute.toString().padStart(2, '0');
                      const timeValue = `${hourString}:${minuteString}`;
                      return (
                        <option key={timeValue} value={timeValue}>
                          {timeValue}
                        </option>
                      );
                    });
                  }).flat()}
                </select>
                <select
                  id="end-ampm"
                  value={endAmPm}
                  onChange={(e) => setEndAmPm(e.target.value as AmPm)}
                  className="bg-cosmic-600 border border-cosmic-400 rounded px-2 py-2 w-20"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
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
          {timeResult && (
            <div className="flex flex-col items-center">
              <span className="text-xl">
                {timeResult.hours > 0 && (
                  <>{timeResult.hours} {timeResult.hours === 1 ? 'hour' : 'hours'}, </>
                )}
                {timeResult.minutes > 0 && (
                  <>{timeResult.minutes} {timeResult.minutes === 1 ? 'minute' : 'minutes'}, </>
                )}
                {timeResult.seconds} {timeResult.seconds === 1 ? 'second' : 'seconds'}
              </span>
            </div>
          )}
        </ResultDisplay>
        
        <FactDisplay isVisible={showResult} />
      </div>
    </ToolCard>
  );
};

export default TimeDifference;
