import { useCallback, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthantication from "../hooks/useAuthantication";
import { userSignin } from "../server/users";
import { authanticate } from "../server/util";
// import "./scss/userForm.scss";

function LoginForm(params) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();

  const [user] = useAuthantication();
  /* Redirect on Soccesfull login */
  // Login Functinality
  useEffect(
    function () {
      if (user) nav("/home");
    },
    [user]
  );

  const success = useCallback(() => {
    return nav("/home");
  }, []);

  async function handleSubit(e) {
    e.preventDefault();
    try {
      const res = await toast.promise(userSignin(inputs), {
        pending: "signing up",
        success: "signed up succfully",
        error: "opps something went wrong please try later 🤯",
      });
      const { data } = res;
      console.log("Data", data);
      authanticate(data);
      success();
      // authanticate(data);
    } catch (e) {
      console.log("ERROR SIGNING IN");
      console.log(e);
    }
  }

  const handleChange = (type) => (e) => {
    setInputs({ ...inputs, [type]: e.target.value });
  };

  return (
    <form onSubmit={handleSubit} action="">
      <h3>Login to your existing account</h3>
      <label htmlFor="em">Email</label>
      <input
        onChange={handleChange("email")}
        type="email"
        required={true}
        id="em"
      />
      <label htmlFor="ps">password</label>
      <input onChange={handleChange("password")} type="password" id="ps" />
      <a href="#">forgot password</a>
      <input onSubmit={handleSubit} type="submit" value="Login" />
    </form>
  );
}

export default LoginForm;
