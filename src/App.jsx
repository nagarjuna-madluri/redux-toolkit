import React from "react";
import { Contacts, Navbar } from "./components";
import { Provider } from "react-redux";
import store from "./store";
let App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Contacts />
    </Provider>
  );
};
export default App;
