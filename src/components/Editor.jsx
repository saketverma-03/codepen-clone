/* eslint-disable react/prop-types */
import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import "./editor.css";
function Editor({ type, state, className, language }) {
  const { code, setCode } = state;

  const onChange = React.useCallback((value, viewUpdate) => {
    setLangState(value);
    console.log(viewUpdate);
  }, []);

  // const onChange = (value) => setLangState(value)

  return (
    <>
      <div className="heading-editor" data-lol={"saket"} >
        <h1>{`lang`}</h1>
      </div>
      <CodeMirror
        value={code.javascrip}
        height="100vh"
        theme={"dark"}
        extensions={[type()]}
        onChange={onChange}
        className={className}
      />
    </>
  );
}
export default Editor;
