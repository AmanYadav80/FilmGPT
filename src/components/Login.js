import { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  // const navigate=useNavigate();
  const email = useRef(null);
  const pass = useRef(null);
  const name = useRef(null);
  // const name=useRef(null);
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidate = () => {
    const message = Validate(email.current.value, pass.current.value);
    setErrorMsg(message);
    if (message) return;
    if (!isSignIn) {
      //sign up functionality
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pass.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              // navigate("/browse")
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in functionality
      signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
          className="w-screen h-screen object-cover fixed"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-0 left-0 right-0 mt-28 md:mt-32 mx-auto px-10 -pt-2 pb-10  md:px-16 md:pt-8 md:pb-20 bg-[#100f0f] opacity-85 text-white flex flex-col w-2/3 md:w-1/3 rounded-lg"
      >
        <h2 className="m-2 md:m-3 text-2xl md:text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            className="mt-4 p-4 rounded-lg bg-[#0f0e0e] border-white border-2"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="mt-4 p-4 rounded-lg bg-[#0f0e0e] border-white border-2"
          type="email"
          placeholder="Email"
          autoComplete="username"
        />
        <input
          ref={pass}
          className="mt-4 p-4 rounded-lg bg-[#0f0e0e] border-white border-2"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        {errorMsg && <p className="text-red-600 font-bold p-4">{errorMsg}</p>}
        <button
          className="mt-4 p-4 bg-red-600 rounded-lg font-bold"
          onClick={handleValidate}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-4 p-4 cursor-pointer" onClick={handleClick}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign in Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
