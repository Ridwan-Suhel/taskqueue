import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (user) {
    console.log(user);
  }

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="font-[500] text-slate-900 outline-none px-4 py-[6px] rounded-md border-2 border-slate-900 w-full duration-500 transition-all hover:text-white hover:bg-slate-900 "
    >
      CONTINUE WITH GOOGLE
    </button>
  );
};

export default GoogleSignIn;
