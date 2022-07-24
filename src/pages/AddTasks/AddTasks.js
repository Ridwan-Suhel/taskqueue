import React from "react";
import DemoHeader from "../../components/DemoHeader/DemoHeader";
import { useForm } from "react-hook-form";
import { DocumentAddIcon, PlusIcon, PlusSmIcon } from "@heroicons/react/solid";
const AddTasks = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <DemoHeader />
      <div className="px-4">
        <div class="wrapper mt-10">
          <h2>Add Task</h2>
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* separate row  */}
              <div className="flex gap-2 w-full mb-2">
                <div className="form-control w-full">
                  <select
                    placeholder="Project For.."
                    className="border-slate-500  w-full border px-3 py-2"
                    {...register("project", { required: true })}
                  >
                    <option value="">Project For</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                    <option value="study">Study</option>
                    <option value="personal">Personal</option>
                  </select>
                  {errors.project?.type === "required" &&
                    "Project name is required"}
                </div>

                <div className="form-control w-full">
                  <input
                    placeholder="Your Name"
                    className="border-slate-500 w-full border px-3 py-2"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p>Name is required</p>}
                </div>
              </div>
              {/* separate row  */}

              <div className="form-control mb-2">
                <input
                  className="border-slate-500 w-full border px-3 py-2"
                  placeholder="Project Title"
                  {...register("title", { required: true })}
                />
                {errors.title && <p>Title is required</p>}
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
                  <input
                    className="font-medium transition-all hover:bg-rose-600 hover:text-white border-slate-500 w-[150px] text-slate-900 cursor-pointer border px-3 py-2"
                    type="submit"
                    value="CANCEL"
                  />
                </div>
                <div className="form-control">
                  <button
                    className="group font-medium flex items-center justify-center transition-all hover:bg-blue-50 hover:text-black border-blue-500 w-[150px] text-blue-700 cursor-pointer border px-3 py-2"
                    type="submit"
                  >
                    {/* <PlusSmIcon className="w-5 h-5 text-blue-700" />  */}
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
