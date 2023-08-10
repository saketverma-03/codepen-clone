import { useState } from "react";
import "./scss/Homepage.scss";

function Homepage() {
  const [formHidden, setFormHidden] = useState(true);
  const [projects, setProjects] = useState([]);

  //  useEffects loadProjects
  // onClickNavigate to editor/xxxxxid

  return (
    <>
      <CreateProjectForm hidden={{ get: formHidden, set: setFormHidden }} />
      <div className="home-container">
        <nav>
          <button>logout</button>
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
          {projects.forEach((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                discription=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Homepage;

function ProjectCard({ id, title, discription }) {
  discription = "";
  return (
    <div className="card">
      <h2>{title}</h2>
      <span></span>
      <p>{discription}</p>
      <div className="footer">
        <button className="delete">Delete</button>
      </div>
    </div>
  );
}

function CreateProjectForm({ hidden }) {
  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Submiting Form");
  }
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
        <input type="text" id="title" />
      </h3>
      <label htmlFor="dedtails">Descrbe your project (optional)</label>
      <textarea id="dedtails" cols="20" rows="5"></textarea>
      <input type="submit" />
    </form>
  );
}
