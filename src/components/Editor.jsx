import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import "./editor.css"
function Editor({ lang, setValue,className }) {
  const onChange = React.useCallback((value, viewUpdate) => {
    // setValue(value);
  }, []);
  return (
    <>
    <div className="heading-editor" ><h1>{`lang`}</h1></div>
    <CodeMirror
      value=""
      height="100vh"
      theme={"dark"}
      extensions={[lang()]}
      onChange={onChange}
      className={className}
    />
    </>
  );
}
export default Editor;
