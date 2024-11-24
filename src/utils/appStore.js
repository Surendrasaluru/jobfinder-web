import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import FeedReducer from "./feedSlice";
import jobReducer from "./jobSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: FeedReducer,
    job: jobReducer,
  },
});

export default appStore;
