import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userProfileReducer from "./slices/userProfileSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
