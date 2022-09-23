import { useState } from "react";
import { FaDumbbell, FaHandHoldingHeart } from "react-icons/fa";
import { GiShinyApple } from "react-icons/gi";
import SearchBar from "../Components/SearchBar";
import TrainersCard from "../Components/Trainers";

interface ConsultPageProps {}

const ConsultPage: React.FC<ConsultPageProps> = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(1);

  const tabDetails = [
    {
      id: 1,
      icon: (className: string) => <FaDumbbell className={className} />,
      title: "Trainers",
    },
    {
      id: 2,
      icon: (className: string) => <GiShinyApple className={className} />,
      title: "Dieticians",
    },
    {
      id: 3,
      icon: (className: string) => <FaHandHoldingHeart className={className} />,
      title: "Therapists",
    },
  ];

  return (
    <div className="h-100 pt-24 pb-24 bg-black">
      <div className="mx-auto max-w-5xl flex p-3">
        <div className="bg-black w-full rounded-xl">
          <SearchBar placeHolder="Search" />
          <div className="flex my-10 rounded-xl bg-warmGrey">
            {tabDetails.map((tab) => (
              <button
                key={tab.id}
                className={`flex flex-col items-center justify-center flex-1 h-24 ${
                  tab.id === 1
                    ? "rounded-xl rounded-r-none"
                    : tab.id === 2
                    ? "border border-sm border-warmGrey700 border-t-0 border-b-0"
                    : tab.id === 3
                    ? "rounded-xl rounded-l-none"
                    : ""
                } ${activeTabIndex === tab.id && "bg-warmGrey700"}`}
                onClick={() => setActiveTabIndex(tab.id)}
              >
                {tab.icon(
                  `text-5xl ${
                    activeTabIndex === tab.id
                      ? "text-purple400"
                      : "text-warmGrey400"
                  }`
                )}
                <span
                  className={`${
                    activeTabIndex === tab.id
                      ? "text-white"
                      : "text-warmGrey400"
                  }`}
                >
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
          <TrainersCard />
        </div>
      </div>
    </div>
  );
};

export default ConsultPage;
