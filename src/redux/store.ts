import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import errorReducer from "./slices/errorSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    // theme: themeReducer,
    // settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
