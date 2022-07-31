import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function useAuthUser(user) {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
}
export default useAuthUser;
