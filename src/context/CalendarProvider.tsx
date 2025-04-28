import React, { useState } from 'react';
import { CalendarContext } from './CalendarContext';
import type { Event } from '../types/events';

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const addEvent = (event: Event) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const updateEvent = (updatedEvent: Event) => {
    setEvents(prev => prev.map(e => e.id === updatedEvent.id ? updatedEvent : e));
  };

  return (
    <CalendarContext.Provider value={{ 
      events, 
      addEvent, 
      deleteEvent,
      updateEvent,
      currentDate,
      setCurrentDate,
      selectedDate,
      setSelectedDate,
      selectedEvent,
      setSelectedEvent
    }}>
      {children}
    </CalendarContext.Provider>
  );
}