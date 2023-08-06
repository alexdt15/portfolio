import "./App.css";
import ProfileCard from "./components/profile/ProfileCard";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import companyLogo from "/assets/images/bestseller-logo.jpeg";
import companyLogoBlack from "/assets/images/bestseller-logo-black.jpeg";

function App() {
  const experienceList = [
    {
      title: "Bestseller",
      date: "Sep-2022 - Current",
      role: "Full-Stack Developer",
      description:
        "Design and develop the planning and forecast software required for a granular control of stock, sales of goods across the world. Maintain and extend the datamodel, work on server efficiency and provide a smooth UI experience",
      businessLogo: companyLogo,
    },
    {
      title: "Bestseller",
      role: "Full-Stack Developer Trainee",
      date: "Mar-2022 - Sep-2022",
      description:
        "Participate in all the various aspects of Front/Back end development",
      businessLogo: companyLogoBlack,
    },
  ];

  return (
    <>
      <div>
        <ProfileCard />
      </div>
      <div className="skills-experience">
        <Skills />
        <Experience experienceList={experienceList} />
      </div>
    </>
  );
}

export default App;
