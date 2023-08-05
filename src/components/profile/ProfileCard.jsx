import "./ProfileCard.css";
import profilePic from "/assets/images/profile-pic.jpg";
import { HiMail, HiPhone } from "react-icons/hi";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={profilePic} alt="" />
      <div className="content">
        <div className="headers">
          <div className="name">
            <h3>Alejandro Delgado</h3>
            <p>Full-Stack Developer</p>
          </div>
          <div className="contact">
            <div className="">
              <span>
                <HiPhone className="vertical-align" />
              </span>
              <p>664666270</p>
            </div>
            <div className="">
              <span>
                <HiMail className="vertical-align " />
              </span>
              <p>alejandro.delgadotrujillo@outlook.com</p>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            Self-motivated developer, who is willing to learn and create
            outstanding UI applications.
          </p>
          <p>
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
      </div>
    </div>
  );
}
