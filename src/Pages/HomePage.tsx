import Goals from "../Components/Goals";
import HomePageDateTabs from "../Components/HomePageDateTabs";
import TodaysRoutine from "../Components/TodaysRoutine";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="h-100 pt-24 pb-24 bg-black">
      <HomePageDateTabs />
      <TodaysRoutine />
      <Goals />
    </div>
  );
};

export default HomePage;
