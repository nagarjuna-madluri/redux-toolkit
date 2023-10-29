import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsSlice from "../slices/contacts";
import userSlice from "../slices/users";
import { createLogger } from "redux-logger";
/* Defined all the reducers in here */
let allReducers = {
  contacts: contactsSlice.reducer,
  users: userSlice.reducer,
};

let logger = createLogger(); // Additional Middleware 
/* Define the stores for all configure Store */
let store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV != "production", // devTools will false for productions
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger], // Default Redux Thunk will add as middleware
});

export default store;
