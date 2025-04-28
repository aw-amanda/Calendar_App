import { getDaysInMonth as dfnsGetDaysInMonth } from 'date-fns';

export const getDaysInMonth = (month: number, year: number) => {
  return dfnsGetDaysInMonth(new Date(year, month));
};

export const getWeekdays = () => {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
};