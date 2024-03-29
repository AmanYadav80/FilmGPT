import { useDispatch, useSelector } from "react-redux"
import { options } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice"
const useUpcomingMovies=async()=>{
    const upComingMovies=useSelector((store)=>store.movies.upComingMovies);
    const dispatch=useDispatch();
    const getUpcomingMovies=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
        const json=await data.json();
        // console.log("Upcoming movies",json);
        dispatch(addUpcomingMovies(json.results));
    }
    useEffect(()=>{
        !upComingMovies && getUpcomingMovies();
    },[])
}
export default useUpcomingMovies;