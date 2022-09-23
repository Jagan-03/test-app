interface DiscoverProps {}

const Discover: React.FC<DiscoverProps> = () => {
    const searchLabels = [
      "Fiber",
      "Planks",
      "HIIT",
      "Strength",
      "Plyometrics",
      "Electrolytes",
      "Protein",
    ];
  
  return (
    <div className="mx-auto max-w-5xl flex p-3">
      <div className="bg-black w-full rounded-xl">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="p-2 pl-10 w-full text-xs text-white bg-warmGrey rounded-lg"
              placeholder="Articles, Exercises, Diets"
            />
          </div>
        </form>

        <div className="mt-3">
          {searchLabels.map((label, i) => (
            <button
              key={i}
              className="rounded-xl bg-warmGrey700 p-1 pl-3 pr-3 m-1 text-xs text-white"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
