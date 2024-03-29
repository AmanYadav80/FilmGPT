const VideoTitle=({title,des})=>{
    return (
        <div className="w-screen aspect-video bg-gradient-to-r from-black absolute pt-28 md:pt-64 px-6 md:px-12 text-white">
            <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:block w-2/5 py-3 text-xl">{des}</p>
            <div className="flex">
                <button className="bg-white text-xl text-black font-bold py-2 md:py-4 px-6 md:px-10  hover:bg-opacity-20 rounded-lg m-2 md:m-3">Play</button>
                <button className="hidden md:block bg-red-600 text-xl text-white font-bold py-4 px-8 bg-opacity-80 hover:bg-opacity-50 rounded-lg m-3">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;