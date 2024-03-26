import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer=()=>{
    const movies=useSelector(store=>store.movies.nowPlayingMovies);
    if(!movies) return;
    const mainMovie=movies[1];
    // console.log(mainMovie.id)
    // console.log("This is the main Movies",mainMovie);
    return (
        <div>
           <VideoTitle title={mainMovie?.original_title} des={mainMovie.overview}/>
           <VideoBackground id={mainMovie?.id}/>
        </div>
    )
}
export default MainContainer;