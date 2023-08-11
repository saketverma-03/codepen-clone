import axios from "axios";
import { authanticate } from "./util";
const basturl = "http://localhost:3001/api/user/signup";
axios.defaults.withCredentials = true;
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
      "Access-Control-Allow-Credentials": "true",
      "Sec-Fetch-Site": "cross-site",
    },
    data: userInfo,
    withCredentials: true,
  };

  return await axios(requestProps);
}

export async function test() {
  const requestProps = {
    method: "get",
    url: "http://localhost:3001/api/user/test",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Sec-Fetch-Site": "cross-site",
    },
    withCredentials: true,
  };

  return await axios(requestProps);
}
