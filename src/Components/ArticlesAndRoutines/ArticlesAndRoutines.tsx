import ArticlesAndExerciseData from "./ArticlesAndExerciseData";

interface ArticlesAndRoutineProps {}

const ArticlesAndRoutines: React.FC<ArticlesAndRoutineProps> = () => {
    return (
        <div className="mx-auto mt-10 max-w-5xl rounded">
      <div className="flex pl-5 pr-5 justify-between">
        <span className="text-base text-gray-400 font-bold">Exercises</span>
        <a href="#">
          <span className="text-sm text-gray-400">View All</span>
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5 pl-3 pr-3">
        {ArticlesAndExerciseData.map((data) => (
          <button className="col-span-2 lg:col-span-1 md:col-span-2 sm:col-span-2 rounded-xl bg-warmGrey" key={data.id}>
              <div className="relative flex justify-center">
                <img
                  src={data.img}
                  alt={data.description}
                  className="rounded-xl"
                />
                <div className="absolute bottom-0 p-5 bg-gradient-to-t from-warmGrey w-full rounded-xl">
                  <span className="text-base text-white"><p className="leading-2">{data.description}</p></span>
                </div>
              </div>
          </button>
        ))}
      </div>
    </div>
    )
}

export default ArticlesAndRoutines;
