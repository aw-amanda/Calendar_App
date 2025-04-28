import { useState } from 'react';
import { useContext } from 'react';
import { CalendarContext } from '../../../context/CalendarContext';
import { Event } from '../../../types/events';

export const useEvents = () => {
  const context = useContext(CalendarContext);
  
  if (!context) {
    throw new Error('useEvents must be used within a CalendarProvider');
  }

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    context.setSelectedEvent(event);
    setIsViewModalOpen(true);
  };

  const handleEdit = () => {
    setIsViewModalOpen(false);
    setIsFormModalOpen(true);
  };

  const handleDelete = () => {
    if (context.selectedEvent) {
      context.deleteEvent(context.selectedEvent.id);
      setIsViewModalOpen(false);
    }
  };

  return {
    ...context,
    isViewModalOpen,
    isFormModalOpen,
    setIsFormModalOpen,
    setIsViewModalOpen,
    handleEventClick,
    handleEdit,
    handleDelete,
    getEventsForDay: (date: Date) => context.events.filter(event => 
      event.start.getDate() === date.getDate() &&
      event.start.getMonth() === date.getMonth() &&
      event.start.getFullYear() === date.getFullYear()
    ),
  };
};