import * as React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../slices/users";
let Navbar = () => {
  let [userName, setuserName] = React.useState("John");
  let dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  let onLoginClick = () => {
    dispatch(login(userName));
  };
  let onLogoutClick = () => {
    dispatch(logout());
  };
  return (
    <div className="nav">
      {!users.isLoggedIn ? (
        <div>
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(event) => setuserName(event.target.value)}
          />
          <button className="button button-blue" onClick={() => onLoginClick()}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <i className="fas fa-user"></i>&nbsp;
          <span>{users.currentUser}</span>
          <button className="button button-red" onClick={() => onLogoutClick()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
