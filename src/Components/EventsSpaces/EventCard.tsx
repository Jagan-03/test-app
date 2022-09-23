import { AiOutlineCalendar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

interface EventCardProps {
    id: number;
    img: string;
    title: string;
    date: string;
    time: string;
    duration: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
    return (
        <div key={props.id} className="col-span-4 lg:col-span-2 md:col-span-2 sm:col-span-2 rounded-xl overflow-hidden shadow-lg bg-warmGrey">
          <img
            className="w-full"
            src={props.img}
            alt={props.title}
          />
          <div className="px-3 py-4">
            <div className="text-xl mb-2 text-white">{props.title}</div>
            <div className="flex items-center">
              <AiOutlineCalendar className="text-warmGrey400 text-sm mr-2" />
              <span className="text-warmGrey400 text-sm mr-2">{props.date}</span>
              <GoPrimitiveDot className="text-warmGrey400 text-xs mr-2" />
              <span className="text-warmGrey400 text-sm mr-2">{props.time}</span>
              <GoPrimitiveDot className="text-warmGrey400 text-xs mr-2" />
              <span className="text-warmGrey400 text-sm mr-2">{props.duration}</span>
            </div>
            <div className="flex items-center mt-2">
              <img
                className="w-5 h-5 rounded-full mr-2"
                src={"https://blog.jetbrains.com/wp-content/uploads/2022/07/F34E0F9B-D3F0-4DD4-B7C7-B11AF3FC6D25-200x200.jpeg"}
                alt={"data.name"}
              />
              <span className="text-warmGrey400 text-xs mr-2">Kushi and 76 others are attending</span>
            </div>
          </div>
          <div className="px-6 pb-3">
            <button className="flex w-full bg-warmGrey700 rounded-xl p-3 justify-center">
                <span className="text-white text-xl">Attend</span>
            </button>
          </div>
        </div>
    )
}

export default EventCard;
