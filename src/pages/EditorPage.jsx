// import Editor from "../components/Editor";
import "./scss/editorPage.scss";

import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";

// mirror language modules
import { useCallback, useRef, useState } from "react";
import useCode from "../hooks/useCode";

const EditorPage = () => {
  const [code, setCode, fsource] = useCode();
  const [coords, setCoords] = useState({ "--width": "200px" });
  const ref = useRef(null);
  const widnowRef = useRef(null);
  const [val, setVal] = useState(false);
  const [currentView, setCurrentView] = useState("html");

  const handleWindowMouseMove = useCallback((event) => {
    console.log(event.clientX);
    let newWid =
      widnowRef.current.offsetWidth + (event.clientX - ref.current.offsetLeft);
    setCoords({ "--width": `${newWid}px` });
    newWid = null;
  }, []);

  const hadnleMouseDown = () => {
    setVal(true);
    window.addEventListener("mousemove", handleWindowMouseMove);
  };
  function hadnleMouseUp() {
    setVal(false);
    window.removeEventListener("mousemove", handleWindowMouseMove);
  }

  return (
    <div className="editor-container">
      <div
        ref={widnowRef}
        style={coords}
        onMouseUp={hadnleMouseUp}
        className="editorpan"
      >
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
        <div className="test">
          <EditorView
            // className="test"
            code={code}
            setCode={setCode}
            selected={currentView}
          />
        </div>
      </div>
      <div
        ref={ref}
        className="handle"
        onMouseDown={hadnleMouseDown}
        onMouseUp={hadnleMouseUp}
      ></div>
      <div
        className="frame"
        onMouseUp={hadnleMouseUp}
        onMouseDown={hadnleMouseDown}
      >
        {/* <iframe
        // srcDoc={source}
        // title="Output"
        // sandbox="allow-scripts"
        ></iframe> */}
        <iframe
          className={val ? "hide" : ""}
          // src="https://www.google.com/search?client=firefox-b-d&q=yi"
          srcDoc={fsource}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

const EditorView = ({ code, setCode, selected }) => {
  const handleChange = (lang) => (e) => {
    setCode({ ...code, [lang]: e });
  };

  if (selected === "html")
    return (
      <CodeMirror
        value={code.html}
        // height="100%
        theme={"dark"}
        extensions={[html()]}
        className="editor-view"
        onChange={handleChange("html")}
      />
    );
  if (selected === "css")
    return (
      <CodeMirror
        value={code.css}
        // height="100vh"
        theme={"dark"}
        extensions={[css()]}
        className="editor-view"
        onChange={handleChange("css")}
      />
    );

  if (selected === "js")
    return (
      <CodeMirror
        value={code.javascript}
        // height="100vh"
        theme={"dark"}
        extensions={[javascript()]}
        className="editor-view"
        onChange={handleChange("javascript")}
      />
    );
};

export default EditorPage;
