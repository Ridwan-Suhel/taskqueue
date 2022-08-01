import { XIcon } from "@heroicons/react/solid";
import React from "react";

const TaskDetails = ({ todo, handleClick, setHandleClick }) => {
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
    <div
      className={`${
        handleClick ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex items-center justify-center bg-slate-900 w-full h-screen z-20`}
    >
      <div className="relative w-3/5 bg-blue-100 py-6 px-8 rounded-lg">
        <div>
          <div>
            <h2 className="text-xl font-[500]">
              Your Task Title:{" "}
              <span className="font-[400]">
                {title.charAt(0).toUpperCase() + title.slice(1, 50)}
              </span>
            </h2>
            <h2 className="text-xl font-[500]">
              Task For:{" "}
              <span className="font-[400]">
                {taskfor.charAt(0).toUpperCase() + taskfor.slice(1)}
              </span>
            </h2>
            <h2 className="text-xl font-[500] mt-4">
              Task Description:{" "}
              <span className="font-[400]">
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </span>
            </h2>
          </div>
          <div className="flex gap-3 items-center mt-4">
            <div>
              <span className="text-sm font-[500]">Create Date</span>
              <p className="text-right text-xl bg-green-300 px-5 py-1 rounded-md">
                {todosCreateDate}
              </p>
            </div>
            <div>
              <span className="text-sm font-[500]">Planning to end</span>
              <p className="text-right text-xl bg-red-300 px-5 py-1 rounded-md">
                {todosEndDate}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setHandleClick(!handleClick)}
          className="absolute top-[15px] right-[15px] hover:scale-105 transition-all bg-slate-900 w-8 h-8 rounded-full"
        >
          <XIcon className="w-5 h-5 text-white mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
