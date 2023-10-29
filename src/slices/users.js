import { createSlice } from "@reduxjs/toolkit";
import userInitalState from "../data/users";
import usersReducer from "../reducers/users";

const userSlice = createSlice({
  name: "user",
  initialState: userInitalState,
  reducers: usersReducer,
});
export const { login, logout } = userSlice.actions;
export default userSlice;
