import React from "react";

const AsideNav = () => {
  return (
    <aside className="w-[290px] bg-slate-900 h-screen sticky top-0 left-0 p-4">
      <div className="flex gap-4 items-center">
        <img
          className="w-[50px] h-[50px] rounded-full border border-slate-200 object-cover"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="Icon"
        />
        <h2 className="text-lg text-white">Ridwan</h2>
      </div>
    </aside>
  );
};

export default AsideNav;
