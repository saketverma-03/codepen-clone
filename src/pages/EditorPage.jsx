import { useCallback, useEffect, useRef, useState } from "react";

import EditorView from "../components/EditorView";

import useCode from "../hooks/useCode";

import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./scss/editorPage.scss";

const EditorPage = () => {
  const handleRef = useRef(null);
  const editorRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState({ "--width": "200px" });
  const [hidden, setHidden] = useState(false);
  const [currentView, setCurrentView] = useState("html");
  const [full, setFull] = useState(false);

  const [code, setCode, fsource] = useCode();

  const { projectId } = useParams();

  useEffect(() => console.log(projectId), []);

  const handleWindowMouseMove = useCallback((event) => {
    /* Calculate new width */
    let newWid =
      editorRef.current.offsetWidth +
      (event.clientX - handleRef.current.offsetLeft);

    setWindowWidth({ "--width": `${newWid}px` });
    newWid = null;
  }, []);

  const hadnleMouseDown = () => {
    setHidden(true);
    window.addEventListener("mousemove", handleWindowMouseMove);
  };

  function hadnleMouseUp() {
    setHidden(false);
    window.removeEventListener("mousemove", handleWindowMouseMove);
  }

  return (
    <div className="editor-container">
      <NavBar full={() => setFull(!full)} />
      {/* Pannel 1 */}
      <div
        ref={editorRef}
        style={windowWidth}
        onMouseUp={hadnleMouseUp}
        className="editorpan"
      >
        {/* Tabs */}
        <ul className="tab">
          <li
            className={`${currentView === "html" ? "selected" : ""}`}
            onClick={() => setCurrentView("html")}
          >
            html
          </li>
          <li
            className={`${currentView === "css" ? "selected" : ""}`}
            onClick={() => setCurrentView("css")}
          >
            css
          </li>
          <li
            className={`${currentView === "js" ? "selected" : ""}`}
            onClick={() => setCurrentView("js")}
          >
            js
          </li>
        </ul>
        {/* Editor */}
        <div className="test">
          <EditorView
            // className="test"
            code={code}
            setCode={setCode}
            selected={currentView}
          />
        </div>
      </div>
      {/* divider between pannels */}
      <div
        ref={handleRef}
        className="handle"
        onMouseDown={hadnleMouseDown}
        onMouseUp={hadnleMouseUp}
      ></div>
      {/* Pannel-2  */}
      <div
        className={`frame  ${full ? "full-screen" : ""}`}
        onMouseUp={hadnleMouseUp}
        onMouseDown={hadnleMouseDown}
      >
        <iframe
          className={hidden ? "hide" : ""}
          srcDoc={fsource}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default EditorPage;
