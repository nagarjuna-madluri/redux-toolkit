import { createSlice } from "@reduxjs/toolkit";
import contactsReducer from "../reducers/contacts";
import contactsInitialState from "../data/contacts";

var contactsSlice = createSlice({
  name: "contacts-list",
  initialState: contactsInitialState,
  reducers: contactsReducer,
});

export default contactsSlice;
