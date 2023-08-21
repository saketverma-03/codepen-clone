import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthantication from "../hooks/useAuthantication";

import {
  createProject,
  deleteOneProject,
  getAllProjects,
  getOneProject,
} from "../server/projects";
import { logout, test } from "../server/users";

function getProjectList() {
  // getOneProject()
}

function Homepage() {
  const [formHidden, setFormHidden] = useState(true);
  const [projects, setProjects] = useState([]);
  // const [user] = useAuthantication();
  const nav = useNavigate();

  const getALl = async () => {
    try {
      const res = await getAllProjects();
      // console.log(res.data.porjects);
      setProjects(res.data.projects);
      // notify();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getALl();
  }, []);

  function Logout() {
    logout();
    nav("../");
  }

  function removeOneProjectBuId(id) {
    const newProjects = projects.filter((item) => item.id !== id);
    console.log(newProjects);
    setProjects(newProjects);
  }
  return (
    <>
      <CreateProjectForm hidden={{ get: formHidden, set: setFormHidden }} />
      <div className="home-container">
        <nav>
          <ul className="floating-nav u-ul">
            <li className="btn-logout" onClick={Logout}>
              logout
            </li>
          </ul>
        </nav>
        <div className="body">
          <div className="head">
            <div
              className="card create"
              onClick={() => setFormHidden(!formHidden)}
            >
              <h2>Create New Thing</h2>
            </div>
          </div>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                discription={project.discription}
                removeProjects={removeOneProjectBuId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Homepage;

function ProjectCard({ id, title, discription, removeProjects }) {
  async function handleDelete(id) {
    try {
      const res = await deleteOneProject(id);
      // remove that from state]
      removeProjects(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="card">
      <Link to={`../editor/${id}`}>
        <h2>{title}</h2>
        <span></span>
        <p className="disc">{discription}</p>
      </Link>
      <div className="footer">
        <button onClick={() => handleDelete(id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

function CreateProjectForm({ hidden }) {
  const [inputs, setInputs] = useState({ title: "", discription: "" });
  const [user, id] = useAuthantication();
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const newProject = await createProject(id, {
        title: inputs.title,
        discription: inputs.discription,
      });

      console.log(newProject.data.newProject.id);
      nav(`../editor/${newProject.data.newProject.id}`);
      // window.alert("Created Project Succeffulty");
    } catch (e) {
      console.error(e);
      console.error("errorMessage", e.message);
    }
  }

  const handleInputs = (name) => (e) => {
    setInputs({ ...inputs, [name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`create-project-form ${hidden.get ? "hidden" : ""} `}
    >
      <input
        type="button"
        className="closeBtn"
        onClick={() => hidden.set(!hidden.get)}
        value={"close"}
      />

      <h2>
        <label htmlFor="title">Name Of Project</label>
      </h2>
      <h3>
        <input
          type="text"
          id="title"
          required
          placeholder="My_App"
          onChange={handleInputs("title")}
        />
      </h3>
      <label htmlFor="discription">Descrbe your project (optional)</label>
      <textarea
        id="discription"
        cols="20"
        rows="5"
        onChange={handleInputs("discription")}
      />
      <input type="submit" />
    </form>
  );
}
