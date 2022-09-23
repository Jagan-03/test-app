import GoalsData from "./GoalsData";

interface GoalsProps {}

const Goals: React.FC<GoalsProps> = () => {
  const circumference = 30 * 3 * Math.PI;

  return (
    <div className="mx-auto mt-10 max-w-5xl rounded">
      <div className="flex pl-2 pr-2 justify-between">
        <span className="text-base text-gray-400 font-bold">Goals</span>
        <a href="/">
          <span className="text-sm text-gray-400">View All</span>
        </a>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-5 pl-3 pr-3">
        {GoalsData.map((goal) => (
          <button key={goal.id} className="col-span-3 lg:col-span-2 md:col-span-3 sm:col-span-3 rounded-xl bg-warmGrey h-48 flex flex-col items-center justify-center">
            <div
              x-data="scrollProgress"
              className="inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5"
            >
              <svg className="w-20 h-20">
                <circle
                  className="text-warmGrey700"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />
                <circle
                  className="text-white"
                  strokeWidth={2}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - (goal.progress / 100) * circumference}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />
              </svg>
              {goal.icon()}
            </div>
            <span className="text-lg text-white">
              {goal.consumed}<span className="text-warmGrey400"> / {goal.total}</span>
            </span>
            <span className="text-sm text-warmGrey400">{goal.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Goals;
