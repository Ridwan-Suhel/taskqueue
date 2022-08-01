import React, { useState } from "react";
import DemoHeader from "../../components/DemoHeader/DemoHeader";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "@tanstack/react-query";
import auth from "../../firebase.init";
import SingleTask from "./SingleTask";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
const Tasks = () => {
  const [user, userLoading] = useAuthState(auth);
  const [todoErr, setTodoErr] = useState(false);

  const url = `http://localhost:5000/todos/${user?.email}`;

  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data?.length === 0) {
      setTodoErr(true);
    } else {
      setTodoErr(false);
    }
  }, [data?.length]);

  if (error)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-center">
          Oops! Something went wrong. please, reload page again.
        </p>
      </div>
    );

  console.log(data);

  const Loading = () => {
    return (
      <>
        <Skeleton height={50} />
        <Skeleton height={50} />
        <Skeleton height={50} />
      </>
    );
  };

  console.log(url);
  console.log(data);

  return (
    <div>
      <DemoHeader />
      <div className="px-4">
        <div className="wrapper mt-10">
          {/* information hint div  */}
          <div className=" border border-slate-200 bg-green-50 mb-2 px-4 py-3 rounded">
            <div className="flex gap-4">
              <InformationCircleIcon className="h-5 w-5 text-blue-500 mt-1" />
              <div className="">
                <h3 className="text-lg font-bold leading-5">Tasks</h3>
                <p>Click on square button to...</p>
              </div>
            </div>
          </div>
          {/* main tasks */}
          {todoErr && (
            <div className="flex items-center justify-between bg-red-300 py-3 px-4 text-lg font-[500] rounded-md">
              <p>You haven't added any todo task.</p>
              <NavLink
                to="/addtasks"
                className="text-white bg-slate-900 py-1 px-4 text-sm rounded-sm"
              >
                Add Todo
              </NavLink>
            </div>
          )}

          {isLoading ? (
            <Loading />
          ) : (
            data.map((todo, i) => (
              <SingleTask todo={todo} key={todo._id} isOdd={Boolean(i % 2)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
