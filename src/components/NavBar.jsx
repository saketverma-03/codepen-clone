import { BsArrowsFullscreen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./scss/navbar.scss";
function NavBar({ full, onSave }) {
  const nav = useNavigate();
  return (
    <>
      <ul className="floating-nav u-ul">
        <li onClick={full}>
          <BsArrowsFullscreen />
        </li>
        <li onClick={() => nav("../home")}>Home</li>
        <li onClick={onSave}>save</li>
      </ul>
    </>
  );
}

export default NavBar;
