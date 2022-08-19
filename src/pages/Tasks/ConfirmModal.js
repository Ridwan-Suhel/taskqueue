import { XIcon } from "@heroicons/react/solid";
import React from "react";
import Swal from "sweetalert2";

const ConfirmModal = ({
  handleClickModal,
  setHandleClickModal,
  todo,
  refetch,
}) => {
  const { _id, title } = todo;

  const handleDelete = (id) => {
    const url = `http://localhost:5000/todos/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          Swal.fire(
            "Welldone!",
            "You successfully deleted a todo task!",
            "success"
          );
          refetch();
          setHandleClickModal(!handleClickModal);
        }
      });
  };

  return (
    <div
      className={`${
        handleClickModal ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-all duration-500 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex items-center justify-center bg-slate-900 w-full h-screen z-20`}
    >
      <div className="relative w-2/5 bg-blue-100 py-6 px-8 rounded-lg">
        <div>
          <div className="mt-4">
            <div>
              <span className="text-lg font-[500]">
                Are you sure? want to delete <strong>{title}</strong>
              </span>
            </div>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="mt-4 hover:scale-105 transition-all text-white bg-red-500 rounded-lg px-6 py-2"
            >
              Delete
            </button>
          </div>
        </div>

        <button
          onClick={() => setHandleClickModal(!handleClickModal)}
          className="absolute top-[15px] right-[15px] hover:scale-105 transition-all bg-slate-900 w-8 h-8 rounded-full"
        >
          <XIcon className="w-5 h-5 text-white mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default ConfirmModal;
