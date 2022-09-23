import { IoMdAdd } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import FriendsData from "./FriendsData";

interface ExerciseProps {}

const Exercise: React.FC<ExerciseProps> = () => {
  return (
    <div className="mx-auto mt-10 max-w-5xl rounded">
      <div className="flex pl-1 pr-1 justify-between">
        <span className="text-base text-gray-400 font-bold">
          Exercise with friends
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-5">
        {FriendsData.map((data) => (
          <button key={data.id} className="bg-warmGrey h-16 col-span-4 lg:col-span-1 md:col-span-2 sm:col-span-2 rounded-xl flex items-center justify-center relative">
            <div className="p-2">
              <img
                className="w-10 h-10 rounded-full"
                src={data.img}
                alt={data.name}
              />
            </div>
            <div className="p-2 flex-1 flex flex-col items-start justify-center">
              <span className="text-lg text-white">
                {data.name} <span className="text-sm text-warmGrey400">{data.lastSeen === "active" ? <GoPrimitiveDot className="text-purple400 inline text-xs m-.5" /> : data.lastSeen}</span>
              </span>
              <div className="flex items-end">
                <span className="text-lg text-white">
                  {data.streak} <span className="text-base text-warmGrey400">streaks</span>
                </span>
                <GoPrimitiveDot className="text-warmGrey400 text-xs m-1.5 mt-0" />
                <span className="text-lg text-white">
                  {data.coins} <span className="text-base text-warmGrey400">coins</span>
                </span>
              </div>
            </div>
          </button>
        ))}

        <button className="bg-warmGrey h-16 col-span-4 lg:col-span-1 md:col-span-2 sm:col-span-2 rounded-xl flex items-center justify-center">
          <IoMdAdd className="text-white m-1 text-2xl" />
          <span className="text-base text-white m-1">Add Friend</span>
        </button>
      </div>
    </div>
  );
};

export default Exercise;
