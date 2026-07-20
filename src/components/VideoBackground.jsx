
import { useSelector } from "react-redux";
import useMovieTrainer  from "../custom_hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  useMovieTrainer(movieId);

  const movieUrls = useSelector(store => store.nowPlayingMovie?.trailerVideo);

  return (
    <div className="video-background"> 
    { movieUrls && 
     (<iframe
     className="w-screen aspect-video"
      
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