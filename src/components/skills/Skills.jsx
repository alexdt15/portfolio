import "./Skills.css";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import {
  SiExpress,
  SiGraphql,
  SiJirasoftware,
  SiMui,
  SiPostgresql,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="container">
      <h2>
        Stack <GiTechnoHeart className="icon" />
      </h2>
      <div className="lists">
        <div>
          <div>
            <h3>Frontend</h3>
            <ul>
              <li>
                <FaReact className="icon" /> <span>React</span>
              </li>

              <li>
                <FaAngular className="icon" /> <span>Angular</span>
              </li>
              <li>
                <BiLogoJavascript className="icon" />{" "}
                <span>JavaScript</span>
              </li>
              <li>
                <BiLogoTypescript className="icon" />{" "}
                <span>TypeScript</span>
              </li>
              <li>
                <FaHtml5 className="icon" /> <span>HTML5</span>
              </li>
              <li>
                <FaCss3 className="icon" /> <span>CSS</span>
              </li>
              <li>
                <SiMui className="icon" /> <span>Material UI</span>
              </li>
              <li>
                <FaBootstrap className="icon" />
                <span></span> Bootstrap
              </li>
            </ul>
          </div>
          <div>
            <h3>Other tools</h3>
            <ul>
              <li>
                <span>
                  <FaGitAlt className="icon" />
                  Git
                </span>
              </li>
              <li>
                <FaGithub className="icon" />
                <span>Github</span>
              </li>
              <li>
                <SiJirasoftware className="icon" />
                <span>Jira Software</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>
              <FaNodeJs className="icon" />
              <span> Node.js</span>
            </li>
            <li>
              <SiExpress className="icon" />
              <span>Express</span>
            </li>
            <li>
              <GrMysql className="icon" />
              <span>MySQL</span>
            </li>
            <li>
              <SiPostgresql className="icon" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <SiGraphql className="icon" />
              <span>GraphQL</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
