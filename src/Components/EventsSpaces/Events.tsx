import EventCard from "./EventCard";
import EventsData from "./EventsData";

interface EventsProps {}

const Events: React.FC<EventsProps> = () => {
  return (
    <div className="mx-auto mt-10 max-w-5xl rounded">
      <div className="flex px-1 justify-between">
        <span className="text-base text-gray-400 font-bold">
          Exercise with friends
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {
            EventsData.map(event => (
                <EventCard {...event}/>
            ))
        }
      </div>
    </div>
  );
};

export default Events;
