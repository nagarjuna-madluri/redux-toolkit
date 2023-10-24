import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "../slices/contacts";
let allReducers = {
  contacts: contactsSlice.reducer,
};
let store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV != "production", // false for production
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()], // It have a default middleware called Redux Thunk
});

export default store;
