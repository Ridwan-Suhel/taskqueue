import React from "react";
import GoogleSignIn from "./GoogleSignIn";
import "./Login.css";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="bg-roose-50">
      <div className="w-2/5 mx-auto bg-white border shadow mt-12 px-8 pt-10 pb-5 rounded-xl">
        <div>
          <div className="title text-center mb-8">
            <h2 className="text-2xl font-medium text-slate-900 mb-2">
              User Login
            </h2>
            <h2 className="text-xl leading-[25px] text-slate-900">
              Hey, Enter your details to get sign in <br /> to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <input
                placeholder="Enter Email"
                className="outline-none px-4 py-2 rounded-md border w-full"
                {...register("email", { required: true })}
              />
              {errors.email && <p>Email is required</p>}
            </div>

            <div className="form-control mb-4">
              <input
                placeholder="Passcode"
                className="outline-none px-4 py-2 rounded-md border w-full"
                {...register("password", { required: true })}
              />
              {errors.password && <p>Password is required</p>}
            </div>
            <p className="mb-4 font-[500]">Having trouble in sign in?</p>
            <button
              type="submit"
              className="font-[500] text-white outline-none px-4 py-2 rounded-md border w-full bg-slate-900"
            >
              Sign in
            </button>
          </form>
        </div>
        <div className="text-center my-5">
          <span className="text-sm font-[500] or-hr-line relative">Or</span>
        </div>

        <GoogleSignIn />

        <p className="mb-4 text-center mt-5">
          Don't have an account?{" "}
          <span className=" font-[500]">Request Now.</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
