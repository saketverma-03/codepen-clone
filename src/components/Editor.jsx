import CodeMirror from "@uiw/react-codemirror";
import React from "react";
import "./editor.css";
function Editor({ lang, man, className }) {

  const {langState, setLangState} = man;

  const onChange = React.useCallback((value, viewUpdate) => {
    setLangState(value);
    console.log(viewUpdate);
  }, []);

  // const onChange = (value) => setLangState(value)

  return (
    <>
      <div className="heading-editor">
        <h1>{`lang`}</h1>
      </div>
      <CodeMirror
        value={langState}
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
