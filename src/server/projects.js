// const baseUrl = "http://localhost:3001/api";
const baseUrl = import.meta.env.VITE_BASE_URL;
import axios from "axios";
axios.defaults.withCredentials = true;

// Creat a project
export async function createProject(id, project) {
  const params = {
    method: "post",
    url: `${baseUrl}/projects/createOne`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      id,
      project,
    },
    // withCredentials: true,
  };
  const res = await axios(params);
  return { data: res.data, message: res.message };
}
// delete a project

// getALlProjects
export async function getAllProjects(id) {
  const params = {
    method: "get",
    url: `${baseUrl}/projects/getAll`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios(params);
  return { data: res.data, message: res.message };
}

// getALlProjects
export async function getOneProject(id) {
  const params = {
    method: "get",
    url: `${baseUrl}/projects/getOne/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios(params);
  return { data: res.data, message: res.message };
}

export async function updateOneProjectCode(data, id) {
  const params = {
    method: "put",
    url: `${baseUrl}/projects/updateOne/code/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  const res = await axios(params);
  return { data: res.data, message: res.message };
}
export async function deleteOneProject(id) {
  const params = {
    method: "delete",
    url: `${baseUrl}/projects/deleteOne/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios(params);
  return { message: res.data.message, res: res };
}
