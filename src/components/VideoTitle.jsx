const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12 w-screen aspect-video absolute text-white bg-gradient-to-r from-balck"> 
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 py-6">{overview}</p>
      <div className=" py-2">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Play</button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 ml-2"> More Information</button>
      </div>
    </div>
    );
}


export default VideoTitle;