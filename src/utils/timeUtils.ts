
/**
 * Calculate the days between a selected date and today
 */
export const calculateDaysFromDateToToday = (selectedDate: string): number => {
  const selected = new Date(selectedDate);
  const today = new Date();
  
  // Reset time parts for accurate date difference
  selected.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  
  const diffTime = Math.abs(today.getTime() - selected.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Determine the day of the week for a given date
 */
export const getDayOfWeek = (selectedDate: string): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(selectedDate);
  return days[date.getDay()];
};

/**
 * Calculate the number of days between two dates
 */
export const calculateDaysBetweenDates = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Reset time parts for accurate date difference
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

/**
 * Calculate the time difference between two date-times
 */
export const calculateTimeDifference = (
  startDate: string, 
  startTime: string,
  startAmPm: 'AM' | 'PM',
  endDate: string, 
  endTime: string,
  endAmPm: 'AM' | 'PM'
): { hours: number, minutes: number, seconds: number } => {
  // Parse the dates and times
  const start = new Date(`${startDate}T${convertTo24Hour(startTime, startAmPm)}`);
  const end = new Date(`${endDate}T${convertTo24Hour(endTime, endAmPm)}`);
  
  // Calculate difference in seconds
  let diffSeconds = Math.abs(end.getTime() - start.getTime()) / 1000;
  
  // Convert to hours, minutes, seconds
  const hours = Math.floor(diffSeconds / 3600);
  diffSeconds %= 3600;
  const minutes = Math.floor(diffSeconds / 60);
  const seconds = Math.floor(diffSeconds % 60);
  
  return { hours, minutes, seconds };
};

// Helper function to convert 12-hour format to 24-hour format
function convertTo24Hour(time: string, amPm: 'AM' | 'PM'): string {
  if (!time) return '00:00:00';
  
  // Make sure the time is in the format HH:MM
  if (time.length <= 5) {
    time = `${time}:00`; // Add seconds if not present
  }
  
  const [hours, rest] = time.split(':');
  let hourNum = parseInt(hours, 10);
  
  if (amPm === 'PM' && hourNum < 12) {
    hourNum += 12;
  } else if (amPm === 'AM' && hourNum === 12) {
    hourNum = 0;
  }
  
  return `${hourNum.toString().padStart(2, '0')}:${rest}`;
}

/**
 * Format a date as YYYY-MM-DD
 */
export const formatDate = (date: Date): string => {
  return date.toISOString().slice(0, 10);
};

/**
 * Format a time as HH:MM
 */
export const formatTime = (date: Date): string => {
  return date.toTimeString().slice(0, 5);
};

/**
 * Get AM/PM from a date object
 */
export const getAmPm = (date: Date): 'AM' | 'PM' => {
  return date.getHours() >= 12 ? 'PM' : 'AM';
};
