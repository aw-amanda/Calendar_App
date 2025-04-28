// import { Dispatch, SetStateAction } from 'react';

// export type CalendarContextType = {
//   currentDate: Date;
//   selectedDate: Date;
//   setSelectedDate: Dispatch<SetStateAction<Date>>;
//   nextMonth: () => void;
//   prevMonth: () => void;
//   goToToday: () => void;
//   month: string;
// };

export interface Event {
  id: string;
  title: string;
  start: Date;
  end?: Date;
  description?: string;
}