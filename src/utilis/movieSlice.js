import {createSlice} from "@reduxjs/toolkit";

const nowPlayingMovieSlie = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        playingMoiveList:[],
        trailerVideo:"",
        popularMovies: []
    },
    reducers :{
        setPlayingMovieListAction:(sate, action) =>{
            sate.playingMoiveList = action.payload;
        },
        setPopularMovieListAction:(sate, action) =>{
            sate.popularMovies = action.payload;
        },
        clearPlayingMovieListAction:(sate) =>{
            sate.playingMoiveList = [];
        },
        setTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {setPlayingMovieListAction, clearPlayingMovieListAction, setTrailerVideo, setPopularMovieListAction} = nowPlayingMovieSlie.actions;
export default nowPlayingMovieSlie.reducer;
