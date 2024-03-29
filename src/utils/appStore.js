import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice"
import geminiReducer from "./geminiSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gemini:geminiReducer,
    }
})
export default appStore;