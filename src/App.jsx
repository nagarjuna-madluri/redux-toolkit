import React from "react";
import { Contacts } from "./components";
import { Provider } from "react-redux";
import store from "./store";
let App = () => {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
};
export default App;
