import { createSlice } from "@reduxjs/toolkit";
import constantReducer from "../reducers/contacts";
import contactsInitialState from "../data/contacts";

var contactsSlice = createSlice({
  name: "contacts-list",
  initialState: contactsInitialState,
  reducers: constantReducer,
});

export default contactsSlice;
