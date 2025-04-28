import { useContext } from 'react';
import { CalendarContext } from '../../context/CalendarContext';
import { Button } from '../ui/Button';

export const CalendarHeader = ({ month, year }: { month: number; year: number }) => {
  const { setCurrentDate } = useContext(CalendarContext)!;

  const handlePrev = () => {
    const newDate = new Date(year, month - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(year, month + 1);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });

  return (
    <div className="flex justify-between gap-2 mb-4 flex-wrap bg-color">
      <h2 className="font-bold txt-color text-2xl p-1">
        {monthName} {year}
      </h2>
      <div className="flex justify-end">
        <Button 
          onClick={handlePrev}
          variant="secondary"
          aria-label="Previous month"
        >
          &lt;
        </Button>
        <Button 
          onClick={handleToday}
          variant="secondary"
          aria-label="Current month"
        >
          Current
        </Button>
        <Button 
          onClick={handleNext}
          variant="secondary"
          aria-label="Next month"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};