import { BiRupee } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import TrainersData from "./TrainersData";

interface TrainersCardProps {}

const TrainersCard: React.FC<TrainersCardProps> = () => {
  return (
    <div className="grid grid-cols-4 gap-3 mt-5">
      {TrainersData.map((data) => (
        <div key={data.id} className="col-span-4 lg:col-span-2 md:col-span-2 sm:col-span-2 rounded-xl bg-warmGrey h-64">
          <div className="h-32 flex">
            <div>
              <img
                className="w-48 h-full rounded-xl rounded-r-none rounded-b-none"
                src={data.img}
                alt={data.name}
              />
            </div>
            <div className="flex flex-col justify-center w-full items-start pl-4">
              <span className="text-2xl text-white mb-3">{data.name}</span>
              <span className="text-xs text-warmGrey400">
                {data.role}
              </span>
              <span className="text-xs text-warmGrey400">
                {data.experience} years of experience
              </span>
            </div>
          </div>
          <div className="h-32 px-3 bg-warmGrey600 rounded-xl rounded-t-none">
            <div className="flex py-4 justify-between">
              <div className="flex items-center">
                <AiFillStar className="text-white mr-2" />
                <span className="text-warmGrey400">{data.speciality}</span>
              </div>
              <div className="flex items-center">
                <BiRupee className="text-white" />
                <span className="text-white">{data.price}/session</span>
              </div>
            </div>
            <button className="p-2 bg-warmGrey700 rounded-xl w-full">
              <span className="text-white">Book a session</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainersCard;
