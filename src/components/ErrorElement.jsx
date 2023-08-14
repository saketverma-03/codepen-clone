import { Link } from "react-router-dom";
import "./scss/errorElement.scss";
function ErrorElement() {
  return (
    <>
      <div className="error-conainer">
        <h1>404page not found</h1>
        <Link to="../">Go to home page</Link>
      </div>
    </>
  );
}

export default ErrorElement;
