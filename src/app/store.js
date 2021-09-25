import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import emailReducer from "../features/emailSlice";
import loginReducer from "../features/loginSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    email: emailReducer,
    login: loginReducer,
  },
});
