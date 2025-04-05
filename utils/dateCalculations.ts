export const START_DATE = new Date('2019-12-17');

function formatNumber(num: number): string {
  const rounded = Math.round(num);
  return rounded.toLocaleString('en-US');
}

export function getConsecutiveDays(): string {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - START_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return formatNumber(diffDays);
}

export function getTrainingHours(): string {
  const days = getConsecutiveDays();
  const daysNum = parseInt(days.replace(/,/g, ''));
  return formatNumber(daysNum * 2.11); // 2.11 hours per day based on actual data
}

export function getMilesCovered(): string {
  const days = getConsecutiveDays();
  const daysNum = parseInt(days.replace(/,/g, ''));
  return formatNumber(daysNum * 20); // 20 miles per day
}

export function getProjectedValues(targetDate: Date) {
  const diffTime = Math.abs(targetDate.getTime() - START_DATE.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return {
    days: diffDays,
    hours: Math.round(diffDays * 3 * 100) / 100,
    miles: Math.round(diffDays * 5 * 100) / 100
  };
}

// Projected values remain static as per the original text
export const PROJECTED_VALUES = {
  hours: "9,417",
  workouts: "3,139",
  days: "3,139",
  miles: "17,433"
}; 