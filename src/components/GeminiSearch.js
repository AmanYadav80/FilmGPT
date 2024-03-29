import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import GeminiSearchBar from "./GeminiSearchBar";

const GeminiSearch=()=>{
    return (
        <div>
          <img className="fixed object-cover w-screen h-screen -z-10 bg-gradient-to-r from-black" src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="backgroundImage"/>
          <div className="pt-[30%] md:pt-0">
            <GeminiSearchBar/>
            <GeminiMovieSuggestions/>
          </div>
        </div>
    )
}
export default GeminiSearch;