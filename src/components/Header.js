import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    const navigate=useNavigate();
    const user=useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            navigate("/error")
          });         
    }
    return (
        <div className="absolute py-1 px-10  bg-gradient-to-b from-black flex justify-between items-center">
           <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="logo" className="w-2/12"/>
           <div className="flex justify-between items-center">
             {user && <h3 className="text-red-600 text-md font-bold p-2"><span className="uppercase underline m-1">User:</span>{user.displayName}</h3>}
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