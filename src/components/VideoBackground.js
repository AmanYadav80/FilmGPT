import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground=({id})=>{
    const movieTrailer=useSelector(store=>store?.movies?.movieTrailer);
    const key=movieTrailer?.key;
    useMovieTrailer(id);
    return (
        <div>
           <iframe 
             className="w-screen aspect-video -pt-16 -z-10" 
             src={"https://www.youtube.com/embed/"+key+"?&autoplay=1&mute=1&controls=0&showinfo=0"} 
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
             >
            </iframe>
        </div>
    )
}
export default VideoBackground;