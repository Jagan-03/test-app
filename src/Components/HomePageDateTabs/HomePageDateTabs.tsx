import { useState } from "react";
import HomePageDateTabsData from "./../../Utils/HomePageDateTabs";

interface HomePageDateTabsProps {}

const HomePageDateTabs: React.FC<HomePageDateTabsProps> = () => {
    
    const [activeTabIndex, setActiveTabIndex] = useState(1);

  return (
    <div className="mx-auto max-w-5xl rounded-xl bg-warmGrey flex">
      {HomePageDateTabsData.map((tab) => (
        <button
          className={`flex flex-1 flex-col items-center justify-center p-1 rounded-lg hover:bg-warmGrey700 ${
            activeTabIndex === tab.id ? "bg-warmGrey700" : ""
          }`}
          key={tab.id}
          onClick={() => setActiveTabIndex(tab.id)}
        >
          <span
            className={`text-sm ${
              activeTabIndex === tab.id ? "text-purple400" : "text-warmGrey400"
            }`}
          >
            {tab.date}
          </span>
          <span
            className={`text-sm ${
              activeTabIndex === tab.id ? "text-white" : "text-warmGrey400"
            }`}
          >
            {tab.day}
          </span>
        </button>
      ))}
    </div>
  );
};

export default HomePageDateTabs;
