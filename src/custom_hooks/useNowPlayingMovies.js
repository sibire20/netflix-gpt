
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Now_playingURI, OPTIONS_NOWPLAYING} from "../utilis/constants";
import {setPlayingMovieListAction} from "../utilis/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getNowPlayingMovies();
    }, []);


    const getNowPlayingMovies = async () => {
        try {
            fetch(Now_playingURI, OPTIONS_NOWPLAYING)
                .then(res => res.json())
                .then(res => {
                    dispatch(setPlayingMovieListAction(res.results));
                })
                .catch(err => console.error(err));
        }
        catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    }
}

export default useNowPlayingMovies;