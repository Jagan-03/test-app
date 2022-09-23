import Events from "../Components/EventsSpaces";
import Exercise from "../Components/ExerciseSpaces";
import SearchBar from "../Components/SearchBar";

interface SpacesPageProps {}

const SpacesPage: React.FC<SpacesPageProps> = () => {
  return (
    <div className="h-100 pt-24 pb-24 bg-black">
      <div className="mx-auto max-w-5xl flex p-3">
        <div className="bg-black w-full rounded-xl">
          <SearchBar placeHolder="Search"/>
          <Exercise />
          <Events />
        </div>
      </div>
    </div>
  );
};

export default SpacesPage;
