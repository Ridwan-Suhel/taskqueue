import React from "react";
import GoogleSignIn from "./GoogleSignIn";
import "./Login.css";
import { useForm } from "react-hook-form";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import loaderImg from "../../images/loading.gif";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const Loader = () => {
    return <img className="mx-auto w-6 h-6" src={loaderImg} alt="Loading..." />;
  };

  const ErrorMsg = () => {
    return <p className="text-sm text-red-500 mt-2">{error?.message}</p>;
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password, data.name);
    await updateProfile({ displayName: data.name });

    reset();
  };

  if (user) {
    navigate("/home");
  }

  return (
    <div className="bg-roose-50">
      <div className="w-2/5 mx-auto bg-white border shadow mt-12 px-8 pt-10 pb-5 rounded-xl">
        <div>
          <div className="title text-center mb-8">
            <h2 className="text-2xl font-medium text-slate-900 mb-2">
              Sign Up
            </h2>
            <h2 className="text-xl leading-[25px] text-slate-900">
              Hey, Enter your details to create <br /> an account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <input
                placeholder="Enter Name"
                className="outline-none px-4 py-2 rounded-md border w-full"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-2">Name is required</p>
              )}
            </div>
            <div className="form-control mb-4">
              <input
                placeholder="Enter Email"
                className="outline-none px-4 py-2 rounded-md border w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-2">Email is required</p>
              )}
            </div>

            <div className="form-control mb-4">
              <input
                placeholder="Passcode"
                className="outline-none px-4 py-2 rounded-md border w-full"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-2">
                  Password is required
                </p>
              )}
            </div>
            {/* <p className="mb-4 font-[500]">Having trouble in sign in?</p> */}
            <button
              type="submit"
              className="font-[500] text-white outline-none px-4 py-2 rounded-md border w-full bg-slate-900"
            >
              {loading || updating ? <Loader /> : "Sign Up"}
            </button>
            {(error || updateError) && <ErrorMsg />}
            {/* {updateError && <ErrorMsg />} */}
          </form>
        </div>
        <div className="text-center my-5">
          <span className="text-sm font-[500] or-hr-line relative">Or</span>
        </div>

        <GoogleSignIn />

        <p className="mb-4 text-center mt-5">
          Already have an account?{" "}
          <NavLink to="/login" className="font-[500] hover:text-slate-700">
            Signin Now.
          </NavLink>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
