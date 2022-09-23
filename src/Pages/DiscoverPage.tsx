import ArticlesAndRoutines from "../Components/ArticlesAndRoutines";
import Discover from "../Components/Discover";

interface DiscoverPageProps {}

const DiscoverPage: React.FC<DiscoverPageProps> = () => {
  return (
    <div className="h-100 pt-24 pb-24 bg-black">
      <Discover />
      <ArticlesAndRoutines />
    </div>
  );
};

export default DiscoverPage;
