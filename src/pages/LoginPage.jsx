import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SigupForm from "../components/SignupForm";
import useAuthantication from "../hooks/useAuthantication";
import { isAuthanticated } from "../server/util";
import "./scss/loginPage.scss";
function LoginPage() {
  const [tab, setTab] = useState("Login");
  const [user] = useAuthantication();
  const nav = useNavigate();

  function handleTab(e) {
    setTab(e.target.outerText);
    // console.log(e.target.outerText);
  }
  function isSelectedTab(tabName) {
    const l = console.log(l);
    return l;
  }
  useEffect(() => {
    if (user) {
      nav("/home");
    }
  }, [user]);

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
