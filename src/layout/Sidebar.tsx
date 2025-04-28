import { MiniCalendar } from '../components/calendar/MiniCalendar';
import { EventButton } from '../features/events/EventButton';
import { ThemeToggle } from '../components/ui/ThemeToggle';

export const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 lg:w-72 xl:w-80 p-4 md:p-6 
      relative h-full flex flex-col fg-color section-border
      transition-all duration-300 ease-in-out">
      {/* Top section with EventButton */}
      <div className="mb-4 md:mb-6">
        <EventButton />
      </div>

      {/* Middle section with calendar and labels */}
      <div className="flex-1 overflow-hidden">
        <MiniCalendar />
      </div>

      <div className="relative left-0.5">
        <ThemeToggle />
      </div>
    </aside>
  );
};