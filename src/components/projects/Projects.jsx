import "./Projects.css";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";

export default function Projects() {
  const projectList = [
    {
      title: "project 1",
      stack: ["HTML", "CSS", "React"],
      img: "",
      description: "text to generate",
    },
    {
      title: "project 1",
      stack: ["HTML", "CSS", "React"],
      img: "",
      description: "text to generate",
    },
    {
      title: "project 3",
      stack: ["HTML", "CSS", "React"],
      img: "",
      description: "text to generate",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-title">
        <h2>
          Projects <HiMiniCodeBracketSquare className="icon" />
        </h2>
      </div>
      <div className="projects">
        {projectList.map((project) => {
          return (
            <div>
              <p>{project.title}</p>
              <img src={project.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
