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
  },
});

export const { editProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
