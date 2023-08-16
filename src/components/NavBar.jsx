import { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import "./scss/navbar.scss";
function NavBar({ full, onSave, setFontSize }) {
  const nav = useNavigate();
  const [size, setSize] = useState(0);

  function handleIncreseFont(s) {
    setFontSize({ "--e-font-size": `calc(1rem + ${s + 1}px)` });
    setSize(s + 1);
  }

  function hhandleDecressFont(s) {
    setFontSize({ "--e-font-size": `calc(1rem + ${s - 1}px)` });
    setSize(s - 1);
  }
  return (
    <>
      <ul className="floating-nav u-ul">
        <ul className="editor-btn floating-nav u-ul">
          <li onClick={() => handleIncreseFont(size)}>+</li>
          <li onClick={() => handleIncreseFont(-1)}>{size}</li>
          <li onClick={() => hhandleDecressFont(size)}>-</li>
        </ul>
        <li className="divider"></li>
        <li onClick={full}>
          <BsArrowsFullscreen />
        </li>
        <li className="divider"></li>

        <li onClick={() => nav("../home")}>Home</li>
        <li className="divider"></li>

        <li onClick={onSave}>save</li>
      </ul>
    </>
  );
}

export default NavBar;
