
import { useSelector } from "react-redux";
import useMovieTrainer  from "../custom_hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  useMovieTrainer(movieId);

  const movieUrls = useSelector(store => store.nowPlayingMovie?.trailerVideo);
  const addAutoPlay = movieUrls + "&autoplay=1";
  return (
    <div className="video-background"> 
    { movieUrls && 
     (<iframe
     className="aspect-video"
      
      src={movieUrls}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      sandBox="allow-scripts allow-same-origin" 
      >

      </iframe>)
      }

    </div>
    );
}


export default VideoBackground;