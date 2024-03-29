import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    return (
        <div className="p-3 md:p-4">
          <h1 className="text-xl md:text-2xl text-white font-bold py-2 md:py-4">{title}</h1>
          <div className="flex overflow-x-scroll scrollbar-hide">
             <div className="flex">
               {
                 movies.map((movie)=>(
                    movie.poster_path && <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                 ))
               }
             </div>
          </div>
        </div>
    )
}
export default MovieList;