import Cookies from "js-cookie";

export function isAuthanticated() {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return localStorage.getItem("id");
  }
  return false;
}

export function authanticate(data) {
  Cookies.set("id", data);
  // next();
}
