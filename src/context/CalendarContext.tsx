import { createContext } from 'react';
import type { Event } from '../types/events';

interface CalendarContextType {
    events: Event[];
    addEvent: (event: Event) => void;
    deleteEvent: (id: string) => void;
    updateEvent: (event: Event) => void;
    currentDate: Date;
    setCurrentDate: (date: Date) => void;
    selectedDate: Date;
    setSelectedDate: (date: Date) => void;
    selectedEvent: Event | null;
    setSelectedEvent: (event: Event | null) => void;
  }
  
  export const CalendarContext = createContext<CalendarContextType | null>(null);