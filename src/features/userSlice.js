import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({ // set different user states
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    blogData: null,
  }, // set the initial state of the web app, no signed users, no user data, no blog available, etc.
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    }, // the signed in state, now a user has logged in
    setUserData: (state, action) => {
      state.userData = action.payload;
    }, //retrieve user data
    setInput: (state, action) => {
      state.searchInput = action.payload;
    }, // input in the search box
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    }, // blog data 
  },
});

export const {
  setSignedIn,
  setUserData,
  setInput,
  setBlogData,
} = userSlice.actions;

export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;
// export all state constants

export default userSlice.reducer;
// export the whole file 