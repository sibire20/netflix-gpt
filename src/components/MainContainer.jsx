
import  {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = ()=>{


    const nowPlayingMovieList = useSelector((store) => store.nowPlayingMovie.playingMoiveList);

    if(!nowPlayingMovieList || nowPlayingMovieList.length === 0){
        return ;
    }

    const mainMoview = nowPlayingMovieList?.[0]; // Get the first movie from the list
    const {original_title, overview, backdrop_path, id} = mainMoview || {};

    return (
        <div className="mainContainer">
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;