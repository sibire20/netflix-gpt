import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import nowPlayingMovieReducer from "./movieSlice";

const appStore = configureStore({

    reducer: {
        user: userReducer,
        cart: cartReducer,
        nowPlayingMovie: nowPlayingMovieReducer
    }
});


export default appStore;