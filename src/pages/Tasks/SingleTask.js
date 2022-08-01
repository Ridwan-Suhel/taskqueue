import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";
import TaskDetails from "./TaskDetails";
const SingleTask = ({ todo }) => {
  const [handleClick, setHandleClick] = useState(false);

  const {
    description,
    email,
    name,
    title,
    userPhoto,
    todosCreateDate,
    todosEndDate,
    _id,
    taskfor,
  } = todo;
  return (
    <div>
      <div className="relative cursor-pointer flex justify-between gap-4 border border-slate-400 bg-gray-300 mb-2 px-4 rounded">
        <div className="flex gap-4 w-full">
          <div className="flex gap-4 mt-1 w-[80px]  py-3">
            <input
              type="checkbox"
              className="border-slate-900 rounded h-5 w-5 cursor-pointer"
            />
            <button className="heart-btn h-6 w-6">
              <HeartIcon className="h-6 w-6 text-slate-900 mt-[-4px]" />
            </button>
          </div>

          <div
            onClick={() => {
              setHandleClick(!handleClick);
            }}
            className="group relative w-full py-3"
          >
            <h2 className="text-lg">{title}</h2>
            <div className="pointer-events-none  z-[10] opacity-0  group-hover:opacity-90 group-hover:visible transition-all duration-500 rounded-lg arrow-content absolute translate-y-[-40%] bottom-[100%] left-[0px] bg-blue-500 border border-blue-600">
              <p className="text-sm text-white py-2 px-4">
                Click for view details
              </p>
              <div class="absolute top-full left-[10%] h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-blue-500"></div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="w-[150px]  py-3">
          <div className="flex gap-2 items-center justify-end">
            <p className="text-lg text-slate-900 font-medium">{todosEndDate}</p>
            <InformationCircleIcon className="h-7 w-7 text-gray-500 mt-1 cursor-pointer" />
          </div>
        </div>
      </div>
      <TaskDetails
        todo={todo}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
    </div>
  );
};

export default SingleTask;
