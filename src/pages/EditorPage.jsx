import { useCallback, useEffect, useRef, useState } from "react";

import EditorView from "../components/EditorView";

import useCode from "../hooks/useCode";

import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { getOneProject, updateOneProjectCode } from "../server/projects";

const EditorPage = () => {
  const handleRef = useRef(null);
  const editorRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState({ "--width": "200px" });
  const [hidden, setHidden] = useState(false);
  const [currentView, setCurrentView] = useState("html");
  const [full, setFull] = useState(false);
  const [fontSize, setFontSize] = useState({
    "--e-font-size": "calc(1rem + 0px )",
  });

  const [code, setCode, fsource] = useCode();

  const { projectId } = useParams();

  useEffect(() => console.log(projectId), []);

  /* Resizable Window logic */

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

  async function handleSave() {
    try {
      const res = await updateOneProjectCode(code, projectId);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleLoad() {
    try {
      const res = await getOneProject(projectId);
      setCode({
        html: res.data.project.html,
        css: res.data.project.css,
        js: res.data.project.js,
      });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="editor-container">
      <NavBar
        full={() => setFull(!full)}
        onSave={handleSave}
        setFontSize={setFontSize}
      />
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
        {/* <div className="test"> */}
        <EditorView
          // className="test"
          code={code}
          setCode={setCode}
          selected={currentView}
          style={fontSize}
        />
        {/* </div> */}
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
