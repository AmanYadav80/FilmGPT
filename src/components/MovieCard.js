import { IMG_CDN_URL } from "../utils/constants"
const MovieCard=({posterPath})=>{
    return (
        <div className="w-36 md:w-48 pr-4 cursor-pointer"> 
          <img src={IMG_CDN_URL+posterPath} alt="movieCard"/>
        </div>
    )
}
export default MovieCard;