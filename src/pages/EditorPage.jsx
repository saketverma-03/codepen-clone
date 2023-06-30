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

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: 500 }}>
      <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
        <SplitPane sizes={sizes1} onChange={setSizes1}>
          <Editor  className="editor-view" lang={html} />
          <Editor  className="editor-view" lang={css} />
          <Editor className="editor-view"  lang={javascript} />
        </SplitPane>

        <div style={{ ...layoutCSS, background: "#c0c3c6" }}>Bottom Pane1</div>
        {/* </SplitPane> */}
      </SplitPane>
    </div>
  );
};

export default EditorPage;
