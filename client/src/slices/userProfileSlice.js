import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userProfileInfo")
    ? JSON.parse(localStorage.getItem("userProfileInfo"))
    : null,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    editProfile: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userProfileInfo", JSON.stringify(action.payload));
    },
    clearProfile: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userProfileInfo");
    },
  },
});

export const { editProfile, clearProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
