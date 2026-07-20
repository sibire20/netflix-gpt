import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {OPTIONS_NOWPLAYING} from "../utilis/constants";
import { setTrailerVideo } from "../utilis/movieSlice";

const useMovieTrainer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideo = async (movieId) => {

        if(!movieId) return;

        const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, OPTIONS_NOWPLAYING);
        const videoData = await videoResponse.json();
        const videoTrailer = videoData.results.filter(v => {
            return v.type === "Trailer"
        });
        const videoToSet = videoTrailer.length ? videoTrailer[0] : videoData.results[0];
        dispatch(setTrailerVideo(`https://www.youtube.com/embed/${videoToSet.key}`));
    }

    useEffect(() => {
        getMovieVideo(movieId);
    }, []);


}

export default useMovieTrainer;