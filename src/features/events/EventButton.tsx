import { Modal } from '../../components/ui/Modal';
import { EventFormModal } from './EventFormModal';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';

export const EventButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full btn-primary"
        aria-label="Create new event"
      >
        Create New Event
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <EventFormModal onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};