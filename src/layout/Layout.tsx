import { Sidebar } from './Sidebar';
import { CalendarGrid } from '../components/calendar/CalendarGrid';
import { EventFormModal } from '../features/events/EventFormModal';
import { EventViewModal } from '../features/events/EventViewModal';
import { useEvents } from '../features/events/hooks/useEvents';

export const Layout = () => {
  const { 
    isFormModalOpen, 
    isViewModalOpen, 
    selectedEvent,
    setIsFormModalOpen,
    setIsViewModalOpen,
    handleEdit,
    handleDelete,
  } = useEvents();

  return (
    <div className="flex h-screen bg-color p-0 m-0 transition-all duration-300 ease-in-out">
      <Sidebar />
      <main className="flex-1 p-4 card-border hidden md:block transition-all duration-300 ease-in-out">
        <CalendarGrid />
      </main>

      {(isViewModalOpen || isFormModalOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      {isFormModalOpen && (
        <EventFormModal
          onClose={() => setIsFormModalOpen(false)}
          event={selectedEvent || undefined}
        />
      )}

      {isViewModalOpen && selectedEvent && (
        <EventViewModal
          event={selectedEvent}
          onClose={() => setIsViewModalOpen(false)}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};