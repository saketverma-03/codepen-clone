import Cookies from "js-cookie";
import { useEffect, useState } from "react";
// const useAuthantication = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const id = localStorage.getItem("id");
//     const token = localStorage.getItem("jwt");

//     if (id !== null || token !== null) {
//       setUser({ token, id });
//     }
//   }, []); // This empty dependency array ensures the effect runs only once

//   return user;
// };

const useAuthantication = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    const token = Cookies.get("token");
    const id = Cookies.get("id");
    setUser(token);
    setId(id);
  }, []); // This empty dependency array ensures the effect runs only once

  return [user, id];
};

export default useAuthantication;
