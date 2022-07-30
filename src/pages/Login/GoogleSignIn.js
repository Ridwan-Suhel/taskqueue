import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import loaderImg from "../../images/loading.gif";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const Loader = () => {
    return <img className="mx-auto w-6 h-6" src={loaderImg} alt="Loading..." />;
  };

  const ErrorMsg = () => {
    return <p className="text-sm text-red-500 mt-2">{error?.message}</p>;
  };

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="font-[500] text-slate-900 outline-none px-4 py-[6px] rounded-md border-2 border-slate-900 w-full duration-500 transition-all hover:text-white hover:bg-slate-900 "
      >
        {loading ? <Loader /> : "CONTINUE WITH GOOGLE"}
      </button>
      {/* {error && <ErrorMsg />} */}
    </div>
  );
};

export default GoogleSignIn;
