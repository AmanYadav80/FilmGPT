import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GeminiSearch from "./GeminiSearch";
const Browse = () => {
  const showgeminiSearch = useSelector((store) => store.gemini.showSearchView);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showgeminiSearch ? (
        <GeminiSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
