import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { useEvents } from '../events/hooks/useEvents';
import { format } from 'date-fns';
import type { Event } from '../../types/events';

type EventFormModalProps = {
  onClose: () => void;
  event?: Event;
};

export const EventFormModal = ({ onClose, event }: EventFormModalProps) => {
  const { addEvent, updateEvent, selectedDate } = useEvents();
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const calendarEvent: Event = {
      id: event?.id || crypto.randomUUID(),
      title,
      description,
      start: event?.start || selectedDate,
      end: event?.end || selectedDate,
    };

    if (event) {
      updateEvent(calendarEvent);
    } else {
      addEvent(calendarEvent);
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="section-border p-4 bg-color">
        <h3 className="text-lg font-medium mb-4 txt-color">
          {event ? 'Edit Event' : 'Add Event'} for {format(selectedDate, 'MMMM d, yyyy')}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium txt-color mb-1">
              Event Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-1 border-shade rounded bg-color txt-color"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium txt-color mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border-1 border-shade rounded bg-color txt-color"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={onClose}
              variant="secondary"
              aria-label="Cancel event creation"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              aria-label="Save event"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};