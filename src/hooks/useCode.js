import { useEffect, useState } from "react";

function useCode() {
  const [code, setCode] = useState({
    html: "",
    css: "",
    javascript: "",
  });

  const [src, setSrc] = useState({});

  useEffect(() => {
    setSrc(`
        <html>
        <body>${code.html}</body>
        <style>${code.css}</style>
        <script>${code.javascript}</script>
        </html>
    `);
  }, [code]);

  return [code, setCode, src];
}

export default useCode;
