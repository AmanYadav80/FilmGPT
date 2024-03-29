import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const useMovieTrailer=(id)=>{
        const movieTrailer=useSelector((store)=>store.movies.movieTrailer)
        const dispatch=useDispatch();
        const getMovieTrailer=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', options)
        const json=await data.json();;
        const filterData=json?.results.filter((video)=>video.type==="Trailer");
        const trailer=filterData.length?filterData[0]:json.results[0];
        // console.log("This is the trailer",trailer)
        dispatch(addMovieTrailer(trailer));
     }
     useEffect(()=>{
       !movieTrailer && getMovieTrailer()
     },[])
}
export default useMovieTrailer;