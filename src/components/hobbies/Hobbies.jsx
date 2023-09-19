import "./hobbies.css";
import { IoGameController } from "react-icons/io5";

export default function Hobbies() {
  return (
    <div className="hobbies-container">
      <h2>
        Hobbies <IoGameController className="icon" />
      </h2>
      <ul>
        <li>
          <div className="hobby-card">
            <h3>Hobbie 1</h3>
            <img></img>
            <p>nice description hehe</p>
          </div>
        </li>
        <li>
          <div className="hobby-card">
            <h3> Hobbie 2</h3>
            <img src="" alt="" />
            <p>Another nice description</p>
          </div>
        </li>
        <li>
          <div className="hobby-card">
            <h3> Hobbie 3</h3>
            <img src="" alt="" />
            <p>Another nice description</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
