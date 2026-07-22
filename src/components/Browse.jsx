
import { addToCart, clearCart } from "../utilis/cartSlice";
import HeaderComponent from "./Header";
import { useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import {Now_playingURI, OPTIONS_NOWPLAYING} from "../utilis/constants";
import {setPlayingMovieListAction} from "../utilis/movieSlice";
import useNowPlayingMovies from "../custom_hooks/useNowPlayingMovies";
import usePopularMovies from "../custom_hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const BrowseComponent = () => {
    
    useNowPlayingMovies();
    usePopularMovies();

 
    return (
        <>
            <HeaderComponent />
            <div className="browserComponent">
                <MainContainer />
                <SecondaryContainer />
            </div>
        </>

    )
}

export default BrowseComponent;