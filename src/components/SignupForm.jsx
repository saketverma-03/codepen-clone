import { useState } from "react";
import { toast } from "react-toastify";
import { createUser } from "../server/users";
// import "./scss/userForm.scss";

function SigupForm(params) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    try {
      toast.promise(createUser(inputs), {
        pending: "creating user",
        success: "Created Successfully, pleas login know",
        error: "opps something went wrong",
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (type) => (e) => {
    setInputs({ ...inputs, [type]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <h3>Create a new account 😄</h3>
      <label htmlFor="em">Email</label>
      <input
        onChange={handleChange("email")}
        type="email"
        required={true}
        id="em"
      />
      <label htmlFor="password">password</label>
      <input onChange={handleChange("password")} type="password" id="ps" />
      <label htmlFor="cps">ConfirmPassowrd</label>
      <input onChange={handleChange("password")} type="password" id="cps" />
      <span className="forgot-password">forgot password</span>
      <input type="submit" value="Login" />
    </form>
  );
}

export default SigupForm;
