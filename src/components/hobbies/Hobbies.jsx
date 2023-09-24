import "./hobbies.css";
import surfPic from "/assets/images/surf.jpg"
import gamingPic from "/assets/images/gaming.jpg"
import readingPic from "/assets/images/reading.jpg"
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
            <h3>Sports</h3>
            <img src={surfPic}>
            </img>
            <p>From Surf to calisthenics, any sense of movement brings me joy</p>
          </div>
        </li>
        <li>
          <div className="hobby-card">
            <h3> Gaming</h3>
            <img src={gamingPic} alt="" />
            <p>Console  or PC, spending time with friends on co-op or online games makes a real difference in my day!</p>
          </div>
        </li>
        <li>
          <div className="hobby-card">
            <h3>Reading</h3>
            <img src={readingPic} alt="" />
            <p>No matter if it's epic fantasy or non-fiction, there's not a single day in which I don't have a book with me</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
