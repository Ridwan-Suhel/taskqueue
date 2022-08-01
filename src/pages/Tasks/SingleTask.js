import React, { useState } from "react";
import { HeartIcon, TrashIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";
import TaskDetails from "./TaskDetails";

import ConfirmModal from "./ConfirmModal";
const SingleTask = ({ todo, isOdd, refetch }) => {
  const [handleClick, setHandleClick] = useState(false);
  const [handleClickModal, setHandleClickModal] = useState(false);

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
      <div
        className={`${
          isOdd ? "bg-red-50" : "bg-green-50"
        } relative cursor-pointer flex justify-between gap-4 border border-slate-400 mb-2 px-4 rounded`}
      >
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
            {/* <h2 className="text-lg">{title.toUpperCase().slice(0, 1)}</h2> */}
            <h2 className="text-lg">
              {title.charAt(0).toUpperCase() + title.slice(1, 50)}
            </h2>
            <div className="pointer-events-none  z-[10] opacity-0  group-hover:opacity-90 group-hover:visible transition-all duration-500 rounded-lg arrow-content absolute  bottom-[100%] left-[0px] bg-blue-500 border border-blue-600">
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
            <button
              onClick={() => {
                setHandleClickModal(!handleClickModal);
              }}
              title="Delete Item"
              className="group"
            >
              <TrashIcon className="h-7 w-7 text-red-500 mt-1 transition-all duration-500 group-hover:text-red-400" />
            </button>
          </div>
        </div>
      </div>
      <TaskDetails
        todo={todo}
        handleClick={handleClick}
        setHandleClick={setHandleClick}
      />
      <ConfirmModal
        todo={todo}
        refetch={refetch}
        handleClickModal={handleClickModal}
        setHandleClickModal={setHandleClickModal}
      />
    </div>
  );
};

export default SingleTask;
