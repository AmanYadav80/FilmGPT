import usePopularMovies from "../hooks/usePopularMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer=()=>{
    const movies = useSelector((store) => store.movies);
    return (
        <div className="bg-black">
          <div className="md:-mt-60 relative z-20">
            {movies.nowPlayingMovies && <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>}
            {movies.popularMovies && <MovieList title={"Popular"} movies={movies?.popularMovies}/>}
            {movies.upComingMovies && <MovieList title={"Upcoming"} movies={movies?.upComingMovies}/>}
          </div>
        </div>
    )
}
export default SecondaryContainer;