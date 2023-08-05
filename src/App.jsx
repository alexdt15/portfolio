import "./App.css";
import ProfileCard from "./components/profile/ProfileCard";
import Experience from "./components/experience/Experience";
import companyLogo from "/assets/images/bestseller-logo.jpeg";
import companyLogoBlack from "/assets/images/bestseller-logo-black.jpeg";

function App() {
  const experienceList = [
    {
      title: "Bestseller",
      description: "Fashion company",
      date: "Sep-2022 - Current",
      role: "Full-Stack Developer",
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
        <div>
          <p>I'm the Skills Component!</p>
        </div>
        <Experience experienceList={experienceList} />
      </div>
    </>
  );
}

export default App;
