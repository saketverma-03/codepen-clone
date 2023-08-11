export function isAuthanticated() {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return localStorage.getItem("id");
  }
  return false;
}

export function authanticate(data, next) {
  if (typeof window !== "undefined") {
    // localStorage.setItem("jwt", data.token);
    localStorage.setItem("id", data.id);
    next();
  }
}
