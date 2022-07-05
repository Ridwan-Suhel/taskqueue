import React from "react";
import DemoHeader from "../../components/DemoHeader/DemoHeader";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
const Tasks = () => {
  return (
    <div>
      <DemoHeader />
      <div className="px-4">
        <div class="wrapper mt-10">
          {/* information hint div  */}
          <div className=" border border-slate-200 bg-green-50 mb-2 px-4 py-3 rounded">
            <div className="flex gap-4">
              <InformationCircleIcon className="h-5 w-5 text-blue-500 mt-1" />
              <div className="">
                <h3 className="text-lg font-bold leading-5">Tasks</h3>
                <p>Malcolm Lockyer</p>
              </div>
            </div>
          </div>
          {/* main tasks */}
          <div className="flex justify-between gap-4 border border-slate-400 bg-gray-300 mb-2 px-4 py-3 rounded">
            <div className="flex gap-4">
              <div className="flex gap-4 mt-1">
                <input
                  type="checkbox"
                  className="border-slate-900 rounded h-5 w-5 cursor-pointer"
                />
                <button className="heart-btn h-6 w-6">
                  <HeartIcon className="h-6 w-6 text-slate-900 mt-[-4px]" />
                </button>
              </div>

              <h2 className="text-lg">
                Descriptin Lorem ipsum dolor sit amet consectetur Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Animi, deserunt
                quisquam! Culpa magni ullam consectetur officiis magnam dolorem
                suscipit blanditiis ad commodi illo asperiores obcaecati
                excepturi, eligendi ea, ratione quia amet ipsa dolor veniam est
                recusandae porro cumque modi. Ex.
              </h2>
            </div>
            {/* right side  */}
            <div className="w-[500px] ">
              <div className="flex gap-2 items-center justify-end">
                <p className="text-lg text-slate-900 font-medium">05-07-2022</p>
                <InformationCircleIcon className="h-7 w-7 text-gray-500 mt-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
