import axios from "axios";
import Cookies from "js-cookie";
import { authanticate } from "./util";
const baseUrl = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;
export async function createUser(userInfo) {
  const params = {
    method: "post",
    url: `${baseUrl}/user/signup`,
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
    url: `${baseUrl}/user/signin`,
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
    url: `${baseUrl}/user/test`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Sec-Fetch-Site": "cross-site",
    },
    withCredentials: true,
  };

  return await axios(requestProps);
}

export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("id");
};
