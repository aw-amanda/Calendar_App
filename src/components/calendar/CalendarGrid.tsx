import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { getDaysInMonth, getWeekdays } from '../../utils/dateUtils';
import { useEvents } from '../../features/events/hooks/useEvents';

export const CalendarGrid = () => {
  const { 
    currentDate, 
    selectedDate,
    getEventsForDay,
    handleEventClick
  } = useEvents();
  
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(month, year);
  const weekdays = getWeekdays();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysFromPrevMonth = firstDayOfMonth;


  return (
    <div className="w-full max-h-screen flex flex-col overflow-hidden">
      <CalendarHeader month={month} year={year} />
      
      <div className="grid grid-cols-7 gap-px primary-color flex-grow max-h-full section-border">
        {weekdays.map((day) => (
          <div 
            key={day} 
            className="text-center txt-color sm:text-xs md:text-sm lg:text-md xl:text-lg section-border"
          >
            {day.slice(0, 3)}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-px fg-color flex-1 section-border">
        {Array.from({ length: daysFromPrevMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="min-h-10 fg-color"></div>
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = new Date(year, month, i + 1);
          const dayEvents = getEventsForDay(date);
          const isToday = date.toDateString() === new Date().toDateString();
          const isSelected = selectedDate.toDateString() === date.toDateString();

          return (
            <CalendarDay
              key={i}
              day={date}
              isCurrentMonth={true}
              isSelected={isSelected}
              isToday={isToday}
            >
              {dayEvents.map(event => (
                <div 
                  key={event.id} 
                  className="text-xs truncate cursor-pointer hover:underline p-1 rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event);
                  }}
                >
                  {event.title}
                </div>
              ))}
            </CalendarDay>
          );
        })}
      </div>
    </div>
  );
};