
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {POPULARMOVIEURI, OPTIONS_NOWPLAYING} from "../utilis/constants";
import {setPopularMovieListAction} from "../utilis/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
    }, []);


    const getPopularMovies = async () => {
        try {
            fetch(POPULARMOVIEURI, OPTIONS_NOWPLAYING)
                .then(res => res.json())
                .then(res => {
                    dispatch(setPopularMovieListAction(res.results));
                })
                .catch(err => console.error(err));
        }
        catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }
}

export default usePopularMovies;