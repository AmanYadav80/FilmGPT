import { useEffect, useRef } from "react";
import genAI from "../utils/geminiai";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addgeminiMovieNames, addgeminiMovies } from "../utils/geminiSlice";

const GeminiSearchBar = () => {
  const searchText = useRef(null);
  const dispatch=useDispatch();
  const searchTMDBMovie=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', options);
    const json=await data.json();
    return json;
  }
  const handleGEMINISearchClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = "Act as movie recommendation system and suggest some movies for query"+searchText.current.value+"only give me names of 5 movies that are comma separated like the example given ahead Gadar,Solay,Don,Golmal,Koi Mil Gaya";
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const geminiMovies=text.split(",");
    const tmdbmovies=geminiMovies.map((movie)=>searchTMDBMovie(movie));
    dispatch(addgeminiMovieNames(geminiMovies));
    const tmdbResults=await Promise.all(tmdbmovies);
    dispatch(addgeminiMovies(tmdbResults));
  };
  return (
    <div className="pt-[8%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex justify-center items-center bg-black w-3/4 md:w-1/2 mx-auto p-0 md:p-2 rounded-lg"
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What do you want to watch today?..."
          className="p-1 md:p-3 m-1 md:m-2 md:w-3/4 rounded-lg"
        />
        <button
          onClick={handleGEMINISearchClick}
          className="text-white font-bold bg-red-600 text-lg  p-1 md:p-4 m-4 w-1/4 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default GeminiSearchBar;
