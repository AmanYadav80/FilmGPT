const VideoTitle=({title,des})=>{
    return (
        <div className="w-screen aspect-video bg-gradient-to-r from-black absolute pt-64 px-12 text-white">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="w-2/5 py-3 text-xl">{des}</p>
            <div>
                <button className="bg-white text-xl text-black font-bold py-4 px-10  hoer:bg-opacity-20 rounded-lg m-3">Play</button>
                <button className="bg-red-600 text-xl text-white font-bold py-4 px-8 bg-opacity-80 hover:bg-opacity-50 rounded-lg m-3">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;