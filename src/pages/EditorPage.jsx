import "split-pane-react/esm/themes/default.css";
// import Editor from "../components/Editor";
import "./editorPage.css";

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

  const handleChange = (lang) => (e) => {
    setCode({ ...code, [lang]: e });
  };

  return (
    <div className="editor-container">
      <div
        ref={widnowRef}
        style={coords}
        onMouseUp={hadnleMouseUp}
        className="editorpan"
      >
        <CodeMirror
          value={code.html}
          height="100vh"
          theme={"dark"}
          extensions={[html()]}
          className="editor-view"
          onChange={handleChange("html")}
        />
        <CodeMirror
          value={code.css}
          height="100vh"
          theme={"dark"}
          extensions={[css()]}
          className="editor-view"
          onChange={handleChange("css")}
        />
        <CodeMirror
          value={code.javascript}
          height="100vh"
          theme={"dark"}
          extensions={[javascript()]}
          className="editor-view"
          onChange={handleChange("javascript")}
        />
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

export default EditorPage;
