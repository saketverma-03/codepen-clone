import { useState } from "react";
import SplitPane from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import "./editorPage.css";
import Editor from "../components/Editor";

// mirror language modules
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";

const EditorPage = () => {
  const [sizes, setSizes] = useState([250, "auto"]);
  const [sizes1, setSizes1] = useState(["32%", "32%", "auto"]);

  const [jsCode, setJsCode] = useState("");
  const [htmlCode, setHtmlCode] = useState("<h1>saket</h1>");
  const [cssCode, setCssCode] = useState("");

  const srcDoc = `
    <html>
    <body>${htmlCode}</body>
    <style>${cssCode}</style>
    <script>${jsCode}</script>
    </html>
    `;

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: "100vh" }}>
      <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
        <SplitPane sizes={sizes1} onChange={setSizes1}>
          <Editor
            className="editor-view"
            man={{ langState: htmlCode, setLangState: setHtmlCode }}
            lang={html}
          />
          <Editor
            className="editor-view"
            man={{ langState: cssCode, setLangState: setCssCode }}
            lang={css}
          />
          <Editor
            className="editor-view"
            man={{ langState: jsCode, setLangState: setJsCode }}
            lang={javascript}
          />
        </SplitPane>

        <div className="frame-container">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-scripts"
            // frameBorder="0"
            className="iframe-css"
          />
        </div>
      </SplitPane>
    </div>
  );
};

export default EditorPage;
