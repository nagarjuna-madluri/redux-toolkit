import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsSlice from "../slices/contacts";

/* Defined all the reducers in here */
let allReducers = {
  contacts: contactsSlice.reducer,
};

/* Define the stores for all configure Store */
let store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV != "production", // devTools will false for productions
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()], // Default Redux Thunk will add as middleware
});

export default store;
