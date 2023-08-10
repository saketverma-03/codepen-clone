import axios from "axios";
import { authanticate } from "./util";
const basturl = "http://localhost:3001/api/user/signup";

export async function createUser(userInfo) {
  const params = {
    method: "post",
    url: "http://localhost:3001/api/user/signup",
    data: userInfo,
    headers: {
      "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
    },
  };
  const res = await axios(params);
  return { data: res.data, message: res.message };
}

export async function userSignin(userInfo) {
  const requestProps = {
    method: "POST",
    url: "http://localhost:3001/api/user/signin",
    headers: {
      "Content-Type": "application/json",
    },
    data: userInfo,
  };

  return await axios(requestProps);
}
