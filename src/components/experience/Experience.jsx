import "./Experience.css";
import { FaLaptopCode } from "react-icons/fa";

export default function Experience({ experienceList }) {
  return (
    <div className="exp-container">
      <h2>
        Experience <FaLaptopCode className="icon" />
      </h2>
      {experienceList.map((experience, i) => {
        return (
          <div className="experience-card" key={i}>
            <img src={experience.businessLogo} alt="" />
            <div className="exp-info">
              <p>{experience.date}</p>
              <h3>{experience.title}</h3>
              <p>{experience.role}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
