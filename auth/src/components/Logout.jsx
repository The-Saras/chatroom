
import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";
import { logout } from "../redux/authSlice";
import { signOut } from "firebase/auth";

function Logout() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
    alert("Logged Out");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
