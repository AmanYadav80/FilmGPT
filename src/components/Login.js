import { useState } from "react";
import Header from "./Header";
const Login=()=>{
    const [isSignIn,setIsSignIn]=useState(true);
    const handleClick=()=>{
        setIsSignIn(!isSignIn);
    }
    return (
        <div className="relative">
           <Header/>
           <div>
             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="backgroundImage"/>
           </div>
           <form className="absolute top-0 left-0 right-0 mt-40 my-20 mx-auto px-6 pt-4 pb-20 bg-[#100f0f] opacity-85 text-white flex flex-col w-4/12 rounded-lg">
             <h2 className="m-5 text-3xl font-bold">{isSignIn ? "Sign In" : "Sign Up"}</h2>
             {!isSignIn && <input className="m-5 p-4 rounded-lg bg-[#0f0e0e] border-white border-2" type="text" placeholder="Name"/>}
             <input className="m-5 p-4 rounded-lg bg-[#0f0e0e] border-white border-2" type="email" placeholder="Email"/>
             <input className="m-5 p-4 rounded-lg bg-[#0f0e0e] border-white border-2" type="password" placeholder="Password"/>
             <button className="m-5 p-4 bg-red-600 rounded-lg font-bold"
             >
             {isSignIn ? "Sign In" : "Sign Up"}
             </button>
             <p className="m-4 p-4 cursor-pointer"  onClick={handleClick}>
               {isSignIn ? "New to Netflix? Sign Up Now" : "Already a User? Sign in Now"}
             </p>
           </form>
        </div>
    )
}
export default Login;