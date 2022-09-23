import SearchBar from "../SearchBar";

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
        <SearchBar placeHolder="Articles, Exercises, Diets..." />
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
