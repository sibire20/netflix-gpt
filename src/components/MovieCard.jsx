
import {IMG_CDN} from "../utilis/constants";

const MovieCard = ({imageUrl}) =>{

    const imgCdn = IMG_CDN + imageUrl;
    return (
        <div className="w-40 px-5">
            <img alt="" src={imgCdn} />
        </div>
    )
}

export default MovieCard;