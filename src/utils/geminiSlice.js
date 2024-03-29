import { createSlice } from "@reduxjs/toolkit";

const geminiSlice=createSlice({
    name:"gemini",
    initialState:{
        showSearchView:false,
        geminiMovies:null,
        geminiMovieNames:null,
    },
    reducers:{
        togglegeminiSearchView:(state,action)=>{
            state.showSearchView=!state.showSearchView;
        },
        addgeminiMovies:(state,action)=>{
            state.geminiMovies=action.payload;
        },
        addgeminiMovieNames:(state,action)=>{
            state.geminiMovieNames=action.payload;
        },
    }
});
export const {togglegeminiSearchView,addgeminiMovies,addgeminiMovieNames}=geminiSlice.actions;
export default geminiSlice.reducer;