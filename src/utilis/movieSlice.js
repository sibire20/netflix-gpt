import {createSlice} from "@reduxjs/toolkit";

const nowPlayingMovieSlie = createSlice({
    name: "nowPlayingMovie",
    initialState: {
        playingMoiveList:[],
        trailerVideo:""
    },
    reducers :{
        setPlayingMovieListAction:(sate, action) =>{
            sate.playingMoiveList = action.payload;
        },
        clearPlayingMovieListAction:(sate) =>{
            sate.playingMoiveList = [];
        },
        setTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {setPlayingMovieListAction, clearPlayingMovieListAction, setTrailerVideo} = nowPlayingMovieSlie.actions;
export default nowPlayingMovieSlie.reducer;
