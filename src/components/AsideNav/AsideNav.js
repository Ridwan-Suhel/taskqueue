import { ClipboardListIcon, DocumentAddIcon } from "@heroicons/react/solid";
import { HomeIcon } from "@heroicons/react/outline";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AsideNav.css";
const AsideNav = () => {
  return (
    <aside className="w-[290px] bg-slate-900 h-screen sticky top-0 left-0 p-4">
      <div className="flex gap-4 items-center pl-4">
        <img
          className="w-[50px] h-[50px] rounded-full border border-slate-200 object-cover"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Icon"
        />
        <h2 className="text-lg text-white">Ridwan</h2>
      </div>
      <ul className="text-slate-300 mt-8 text-xl aside-nav">
        <NavLink
          to="/home"
          className="block transition  hover:text-white hover:bg-slate-800 py-2 pl-4 rounded"
        >
          <li className="flex items-center gap-2">
            <HomeIcon className="w-6 h-6" />
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink
          to="/tasks"
          className="block transition  hover:text-white hover:bg-slate-800 py-2 pl-4 rounded"
        >
          <li className="flex items-center gap-2">
            <ClipboardListIcon className="w-6 h-6" />
            <span>Tasks</span>
          </li>
        </NavLink>
        <NavLink
          to="/addtasks"
          className="block transition  hover:text-white hover:bg-slate-800 py-2 pl-4 rounded"
        >
          <li className="flex items-center gap-2">
            <DocumentAddIcon className="w-6 h-6" />
            <span>Add Tasks</span>
          </li>
        </NavLink>
      </ul>
    </aside>
  );
};

export default AsideNav;
