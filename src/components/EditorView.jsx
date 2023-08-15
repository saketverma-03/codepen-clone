import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import "./scss/editorView.scss";

/* Returs codeeditor depending on selected value */
const EditorView = ({ code, setCode, selected, ...rest }) => {
  const handleChange = (lang) => (e) => {
    setCode({ ...code, [lang]: e });
  };

  if (selected === "html")
    return (
      <>
        <CodeMirror
          value={code.html}
          // height="100%
          theme={"dark"}
          extensions={[html()]}
          className="editor-view"
          onChange={handleChange("html")}
          {...rest}
        />
      </>
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
        {...rest}
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
        {...rest}
      />
    );
};

export default EditorView;
