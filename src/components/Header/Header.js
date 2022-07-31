import { LogoutIcon, UserIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import ShoppingBag from "../Shared/ShoppingBag";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <header className="">
      <ul className="px-4 flex items-center justify-end gap-5 py-3 border-b bg-slate-900 text-white">
        <li>
          {user ? (
            <NavLink
              onClick={logout}
              to="/login"
              className="transition-all flex gap-1 items-center group hover:text-blue-100"
            >
              {" "}
              <LogoutIcon className="w-5 h-5 text-white group-hover:text-blue-100" />
              <span>Logout</span>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="transition-all flex gap-1 items-center group hover:text-blue-100"
            >
              {" "}
              <UserIcon className="w-5 h-5 text-white group-hover:text-blue-100" />{" "}
              <span>Login</span>
            </NavLink>
          )}
        </li>
        <li>
          <ShoppingBag />
        </li>
      </ul>
    </header>
  );
};

export default Header;
