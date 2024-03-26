import usePopularMovies from "../hooks/usePopularMovies";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer=()=>{
    const movies = useSelector((store) => store.movies);
    return (
        movies.nowPlayingMovies && movies.popularMovies && movies.upComingMovies && 
        <div className="bg-black">
          <div className="-mt-60 relative z-20">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies?.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies?.upComingMovies}/>
          </div>
        </div>
    )
}
export default SecondaryContainer;