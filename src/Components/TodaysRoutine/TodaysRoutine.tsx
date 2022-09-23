import { useState } from "react";
import TodaysRoutineData from "./TodaysRoutineData";

interface TodaysRoutineProps {}

const TodaysRoutine: React.FC<TodaysRoutineProps> = () => {

    const [activeTabIndex, setActiveTabIndex] = useState(1);
    
  return (
    <div className="mx-auto mt-10 max-w-5xl rounded">
      <div className="flex pl-2 pr-2 justify-between">
        <span className="text-base text-gray-400 font-bold">Today</span>
        <a href="/">
          <span className="text-sm text-gray-400">View All</span>
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 pl-3 pr-3">
        {TodaysRoutineData.map((data) => (
          <button className="col-span-3 lg:col-span-1 md:col-span-3 sm:col-span-3 rounded-xl bg-warmGrey h-24 relative" key={data.id} onClick={() => setActiveTabIndex(data.id)}>
            <div className="flex h-full">
              <div className="flex-0.4 relative flex justify-center">
                <img
                  src={data.img}
                  alt={data.workout}
                  className="rounded-xl rounded-r-none"
                />
                <div className="absolute bottom-0 pb-3 bg-gradient-to-t from-warmGrey w-full rounded-xl rounded-r-none rounded-t-none">
                  <span className="text-xs text-white">{data.timing}</span>
                </div>
              </div>
              <div className="flex-0.6 flex flex-col items-start justify-between p-3 h-full w-40">
                <span className={`text-base text-start ${data.id === activeTabIndex ? "text-purple400" : "text-white"}`}>
                  {data.workout}
                </span>
                <span className="text-xs text-warmGrey400">
                  {data.duration}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodaysRoutine;
