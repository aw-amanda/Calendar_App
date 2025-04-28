import { Button } from '../../components/ui/Button';
import { format } from 'date-fns';

type EventViewModalProps = {
  event: {
    id: string;
    title: string;
    description?: string;
    start: Date;
  };
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export const EventViewModal = ({ event, onClose, onEdit, onDelete }: EventViewModalProps) => {
    console.log('Rendering EventViewModal with event:', event);
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="section-border p-4 bg-color max-w-md w-full">
            <h3 className="text-lg font-medium mb-2 txt-color">{event.title}</h3>
            <p className="text-sm mb-2 txt-color">
            {format(event.start, 'MMMM d, yyyy')}
            </p>
            {event.description && (
            <div className="mb-4">
                <p className="txt-color">{event.description}</p>
            </div>
            )}
            <div className="flex justify-end gap-2">
            <Button
                type="button"
                onClick={onDelete}
                variant="danger"
                aria-label="Delete event"
            >
                Delete
            </Button>
            <Button
                type="button"
                onClick={onEdit}
                variant="secondary"
                aria-label="Edit event"
            >
                Edit
            </Button>
            <Button
                type="button"
                onClick={onClose}
                variant="primary"
                aria-label="Close"
            >
                Close
            </Button>
            </div>
        </div>
        </div>
    );
};