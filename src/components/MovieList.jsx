
import MovieCard from "./MovieCard";

const MovieList = ({title, movies})=>{

console.log("MovieList ::", title, movies)
    return (
       movies && (<div >
            <div className="text-4xl py-5 px-5 text-white">{title}</div>
            <div className="flex overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex">

                {
                    movies.map((movie)=> 
                        
                        <MovieCard imageUrl={movie?.poster_path}></MovieCard>

                    )
                }
                
            </div>
            </div>

        </div>)
    )
}

export default MovieList;