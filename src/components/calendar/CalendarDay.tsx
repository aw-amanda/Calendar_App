import { useEvents } from '../../features/events/hooks/useEvents';

type CalendarDayProps = {
  day: Date;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  children?: React.ReactNode;
};

export const CalendarDay = ({ 
  day, 
  isCurrentMonth, 
  isSelected, 
  isToday,
  children 
}: CalendarDayProps) => {
  const { setSelectedDate } = useEvents();
  const date = day.getDate();

  const handleClick = () => {
    setSelectedDate(day);
  };

  return (
    <div
      className={`size-full p-1 card-border primary-color ${!isCurrentMonth ? 'opacity-50' : ''}`}
    >
      <button
        onClick={handleClick}
        className={`min-w-full h-25 max-h-full flex flex-col items-start txt-color
          ${isSelected ? 'bg-color select-color section-border' : ''}
          ${!isSelected ? 'hover:secondary-color cursor-pointer' : ''}
          ${isToday ? 'ring-2 ring-today' : ''}`}
        aria-label={`Select day ${date}`}
      >
        <span className="text-sm">{date}</span>
        {children}
      </button>
    </div>
  );
};