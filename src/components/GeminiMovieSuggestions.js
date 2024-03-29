import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GeminiMovieSuggestions = () => {
    const { geminiMovies, geminiMovieNames } = useSelector((store) => store.gemini);
    if (!geminiMovieNames || !geminiMovies) {
        return null;
    }
    return (
        <div className="w-[70%] pr-[4%] pl-[4%] mx-auto bg-black bg-opacity-50">
            {
                geminiMovieNames.map((movieName, index) => (
                    <MovieList key={movieName} title={movieName} movies={geminiMovies[index].results} />
                ))
            }
        </div>
    );
};

export default GeminiMovieSuggestions;
