const basturl = "http://localhost:3001/api";
import axios from "axios";
axios.defaults.withCredentials = true;

// Creat a project
export async function createProject(id, project) {
  const params = {
    method: "post",
    url: `${basturl}/projects/createOne`,
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
    url: `${basturl}/getAll/${id}`,
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
    url: `${basturl}/getOne/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await axios(params);
  return { data: res.data, message: res.message };
}
