import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { togglegeminiSearchView } from "../utils/geminiSlice"

const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [geminiButtonText,setgeminiButtonText]=useState("GEMINI Search");
    const showgeminiSearch=useSelector((store)=>store.gemini.showSearchView);
    const user=useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error")
          });         
    }
    const handleGEMINISearch=()=>{
       {!showgeminiSearch ? setgeminiButtonText("HomePage") : setgeminiButtonText("GEMINI Search")}
       dispatch(togglegeminiSearchView());
    }
    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName}=user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse")
          } else {
            dispatch(removeUser());
            navigate("/")
          }
        });
        return ()=> unsubscribe();
  },[]);
    return (
        <div 
           className="absolute bg-opacity-50 z-50  px-10 py-4  bg-gradient-to-b from-black flex flex-col md:flex-row justify-between items-center"
          >
           <img src={LOGO_URL}
           alt="logo" className="w-1/3 md:w-1/6 -ml-4 md:ml-10"/>
           <div className="flex justify-between items-center">
             {
               user && 
               <button onClick={handleGEMINISearch} className="bg-red-600 text-white font-bold p-2 rounded-lg mr-4 md:mr-10">{geminiButtonText}</button>
             }
             { user &&
                <button 
              className="bg-red-600 font-bold px-4 py-2 m-2 md:m-4 -mr-4 md:mr-4  text-white rounded-lg"
              onClick={handleSignOut}
              >
               Sign out
              </button>
             }
             {user && <h3 className="text-red-600 text-md font-bold p-2 invisible md:block"><span className="uppercase"></span>({user.displayName})</h3>}
           </div>
        </div>
    )
}
export default Header;