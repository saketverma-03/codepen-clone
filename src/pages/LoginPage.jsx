import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SigupForm from "../components/SignupForm";
import "./scss/loginPage.scss";
function LoginPage() {
  const [tab, setTab] = useState("Login");

  function handleTab(e) {
    setTab(e.target.outerText);
    // console.log(e.target.outerText);
  }
  function isSelectedTab(tabName) {
    const l = console.log(l);
    return l;
  }
  return (
    <>
      <div className="login-container">
        <div>
          <ul>
            <li
              className={tab === "Login" ? "selected" : ""}
              onClick={handleTab}
            >
              Login
            </li>
            <li
              className={tab === "Signup" ? "selected" : ""}
              onClick={handleTab}
            >
              Signup
            </li>
          </ul>
          <div>{<Form type={tab} />}</div>
        </div>
      </div>
    </>
  );
}

function Form({ type }) {
  if (type == "Login") return <LoginForm />;
  if (type == "Signup") return <SigupForm />;
}
export default LoginPage;
