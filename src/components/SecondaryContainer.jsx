import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{

    const movies = useSelector((state)=> state.nowPlayingMovie);

    // const getPopularMovieList = useSelector((state)=> state.popularMovies);
    console.log("SecondaryContainer movies ::", movies);
    return (
        <div className="secondaryContainer bg-black">
            <MovieList title={"Now Playing"} movies={movies.playingMoiveList}></MovieList>
            <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
            <MovieList title={"Trensding"} movies={movies.playingMoiveList}></MovieList>
            <MovieList title={"Must Match"} movies={movies.playingMoiveList}></MovieList>
            <MovieList title={"Your choice"} movies={movies.playingMoiveList}></MovieList>
        </div>
    )
}

export default SecondaryContainer;