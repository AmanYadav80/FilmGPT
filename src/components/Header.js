import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error")
          });         
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
        <div className="bg-black bg-opacity-50 absolute z-50  px-10 py-4  bg-gradient-to-b from-black flex justify-between items-center">
           <img src={LOGO_URL}
           alt="logo" className="w-1/12 ml-10"/>
           <div className="flex justify-between items-center">
             {user && <h3 className="text-red-600 text-md font-bold p-2"><span className="uppercase m-1">User:</span>{user.displayName}</h3>}
             { user &&
                <button 
              className="bg-red-600 font-bold px-4 py-2 m-4 text-white rounded-lg"
              onClick={handleSignOut}
              >
               Sign out
              </button>
             }
           </div>
        </div>
    )
}
export default Header;