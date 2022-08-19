import React, { useState } from "react";
import DemoHeader from "../../../components/DemoHeader/DemoHeader";
import { useForm } from "react-hook-form";
import { PlusIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import DatePick from "../../AddTasks/DatePick";
import auth from "../../../firebase.init";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const UpdateTask = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [taskData, setTaskData] = useState([]);
  // const [descData, setDescData] = useState(null);

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

    // if (data.title === " " || data.description === " ") {
    //   setTitleData(true);
    //   setDescData(true);
    // } else {
    //   setTitleData(null);
    //   setDescData(null);
    // }

    // console.log(todosInfo);

    fetch(`http://localhost:5000/todos/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(todosInfo),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          Swal.fire(
            "Welldone!",
            "You successfully updated a todo task!",
            "success"
          );
          navigate("/tasks");
        }
      });

    reset();
    setSelectedDate(new Date());
  };

  //   geting specific task data for preview, which data is updating
  const url = `http://localhost:5000/todo/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTaskData(data);
        console.log(data);
      });
  }, [url]);
  return (
    <div>
      <DemoHeader />

      <div className="px-4">
        <div className="wrapper mt-10">
          <h2 className="mb-2">
            <strong>Update Task:</strong>{" "}
            <span>{taskData?.title?.slice(0, 50)}</span>{" "}
          </h2>

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
                  {errors.taskfor?.type === "required" && (
                    <p className="text-sm text-red-600">
                      Task name is required
                    </p>
                  )}
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
                </div>
              </div>
              {/* separate row  */}

              <div className="flex gap-2 mb-2">
                <div className="form-control w-full">
                  <input
                    type="text"
                    className="border-slate-500 w-full border px-3 py-2"
                    placeholder="Task Title"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-600">Title is required</p>
                  )}
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
                {errors.description && (
                  <p className="text-sm text-red-600">
                    Description is required
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-5">
                <div className="form-control">
                  <button
                    onClick={() => {
                      navigate("/tasks");
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
                    UPDATE
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

export default UpdateTask;
