import { ClipboardListIcon, DocumentAddIcon } from "@heroicons/react/solid";
import { CubeIcon, HomeIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import "./AsideNav.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const AsideNav = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <aside className="w-[290px] bg-slate-900 h-screen sticky top-0 left-0 p-4">
      <div className="flex gap-2 items-center pl-4">
        {user?.photoURL ? (
          <img
            className="w-[40px] h-[40px] rounded-full border border-slate-200 object-cover"
            src={user?.photoURL}
            alt="Icon"
          />
        ) : (
          <img
            className="w-[40px] h-[40px] rounded-full border border-slate-200 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Icon"
          />
        )}

        <h2 className="text-lg text-white">
          {user ? user.displayName : "Welcome"}
        </h2>
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
        <NavLink
          to="/products"
          className="block transition  hover:text-white hover:bg-slate-800 py-2 pl-4 rounded"
        >
          <li className="flex items-center gap-2">
            {/* <CubeIcon className="w-6 h-6" /> */}
            <CubeIcon className="w-6 h-6" />
            <span>Products</span>
          </li>
        </NavLink>
        {/* <NavLink
          to="/login"
          className="block transition  hover:text-white hover:bg-slate-800 py-2 pl-4 rounded"
        >
          <li className="flex items-center gap-2">
            <UserIcon className="w-6 h-6" />
            <span>Login</span>
          </li>
        </NavLink> */}
      </ul>
    </aside>
  );
};

export default AsideNav;
