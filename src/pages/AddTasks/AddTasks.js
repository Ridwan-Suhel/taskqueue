import React, { useState } from "react";
import DemoHeader from "../../components/DemoHeader/DemoHeader";
import { useForm } from "react-hook-form";
import { PlusIcon } from "@heroicons/react/solid";
import DatePick from "./DatePick";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const AddTasks = () => {
  const [user] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const date = new Date();
  const today =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  const userSelectedDate =
    selectedDate.getDate() +
    "-" +
    (selectedDate.getMonth() + 1) +
    "-" +
    selectedDate.getFullYear();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const userImg = user?.photoURL;
  const userEmail = user?.email;

  const onSubmit = (data) => {
    const todosInfo = {
      taskfor: data.taskfor,
      name: data.name,
      title: data.title,
      description: data.description,
      todosEndDate: userSelectedDate,
      todosCreateDate: today,
      userPhoto: userImg,
      email: userEmail,
    };

    fetch("http://localhost:5000/todos", {
      method: "POST",
      body: JSON.stringify(todosInfo),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));

    reset();
    setSelectedDate(new Date());
  };
  return (
    <div>
      <DemoHeader />
      <div className="px-4">
        <div className="wrapper mt-10">
          <h2 className="mb-2">Add Task</h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* separate row  */}
              <div className="flex gap-2 w-full mb-2">
                <div className="form-control w-full">
                  <select
                    placeholder="Project For.."
                    className="border-slate-500  w-full border px-3 py-2"
                    {...register("taskfor", { required: true })}
                  >
                    <option value="">Task For</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="personal">Personal</option>
                    <option value="school">School</option>
                    <option value="study">Study</option>
                  </select>
                  {errors.taskfor?.type === "required" &&
                    "Project name is required"}
                </div>

                <div className="form-control w-full">
                  <input
                    type="text"
                    value={user.displayName}
                    readOnly
                    placeholder="Your Name"
                    className="border-slate-500 w-full border px-3 py-2 bg-blue-50 outline-none"
                    {...register("name")}
                  />
                  {/* {errors.name && <p>Name is required</p>} */}
                </div>
              </div>
              {/* separate row  */}

              <div className="flex gap-2 items-center mb-2">
                <div className="form-control w-full">
                  <input
                    type="text"
                    className="border-slate-500 w-full border px-3 py-2"
                    placeholder="Project Title"
                    {...register("title", { required: true })}
                  />
                  {errors.title && <p>Title is required</p>}
                </div>
                <div className="form-control w-full">
                  <DatePick
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                </div>
              </div>

              <div className="form-control mb-2">
                <textarea
                  className="border-slate-500 w-full h-[150px] border px-3 py-2"
                  placeholder="Decribe Your Tasks"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && <p>Description is required</p>}
              </div>

              <div className="flex justify-end gap-5">
                <div className="form-control">
                  <button
                    onClick={() => {
                      reset();
                      setSelectedDate(new Date());
                    }}
                    className="font-medium transition-all hover:bg-rose-600 hover:text-white border-slate-500 w-[150px] text-slate-900 cursor-pointer border px-3 py-2"
                    type="button"
                  >
                    CANCEL
                  </button>
                </div>
                <div className="form-control">
                  <button
                    className="group font-medium flex items-center justify-center transition-all hover:bg-blue-50 hover:text-black border-blue-500 w-[150px] text-blue-700 cursor-pointer border px-3 py-2"
                    type="submit"
                  >
                    <PlusIcon className="w-5 h-5 text-blue-700 mr-1 group-hover:text-black" />{" "}
                    CREATE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
