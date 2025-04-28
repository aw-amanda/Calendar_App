import { useEvents } from '../../features/events/hooks/useEvents';
import { format, isSameMonth, isSameDay } from 'date-fns';
import { Button } from '../ui/Button';

export const MiniCalendar = () => {
  const { 
    currentDate, 
    selectedDate, 
    setSelectedDate 
  } = useEvents();
  
  const month = format(currentDate, 'MMM yyyy');
  const weekdays = [
    { short: 'S', full: 'Sunday' },
    { short: 'M', full: 'Monday' },
    { short: 'T', full: 'Tuesday' },
    { short: 'W', full: 'Wednesday' },
    { short: 'T', full: 'Thursday' },
    { short: 'F', full: 'Friday' },
    { short: 'S', full: 'Saturday' }
  ];

  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const startingDayOfWeek = firstDay.getDay();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex flex-col space-y-3 p-3 section-border">
      <h3 className="section-border text-center txt-color text-sm sm:text-base md:text-md">{month}</h3>
      <div className="grid grid-cols-7 gap-1 items-center justify-items-center p-1">
        {weekdays.map((day, index) => (
          <div
            key={`day-${index}`} 
            className="w-full section-border text-center txt-color text-sm sm:text-xs md:text-md items-center justify-center p-1 gap-2"
            aria-label={day.full}
          >
            {day.short}
          </div>
        ))}
        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="size-8 sm:size-10" />
        ))}
        {daysArray.map((day) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isSelected = isSameDay(date, selectedDate);
          const isToday = isSameDay(date, new Date());
          const isCurrentMonth = isSameMonth(date, currentDate);

          return (
            <Button
              key={`date-${day}`}  // Make date keys unique
              onClick={() => setSelectedDate(date)}
              variant={isSelected ? 'primary' : 'secondary'}
              className={`size-10 sm:size-18 md:size-8 flex text-xs justify-center text-center${
                isToday ? 'ring-2 ring-today' : ''
              } ${!isCurrentMonth ? 'opacity-50' : ''}`}
              aria-label={`Select ${format(date, 'MMMM d, yyyy')}`}
            >
              {day}
            </Button>
          );
        })}
      </div>
    </div>
  );
};