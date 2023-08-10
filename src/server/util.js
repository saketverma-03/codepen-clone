export function isAuthanticated() {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  }
  return false;
}

export function authanticate(data, next) {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data.token));
    localStorage.setItem("id", JSON.stringify(data.id));
    next();
  }
}
