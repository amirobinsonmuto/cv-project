import Header from "./components/Header";
import AddPersonalInfo from "./components/AddPersonalInfo";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperiences from "./components/WorkExperiences";
import Educations from "./components/Educations";
import { useState } from "react";
import AddWorkExperience from "./components/AddWorkExperience";

function App() {
  const [personalInfo, setPersonalInfo] = useState("");
  const [showAddWorkExperience, setShowAddWorkExperience] = useState(false);
  const [workExperiences, setWorkExperiences] = useState("");

  const educations = [
    {
      id: 1,
      school: "Nagoya University",
      program: "Bachelor of Education",
      year: 2013,
    },
    {
      id: 2,
      school: "Chubu University",
      program: "Bachelor of Hospitality",
      year: 2015,
    },
    {
      id: 3,
      school: "Victoria University",
      program: "Bachelor of Medicines",
      year: 2008,
    },
  ];

  // Add personal info
  const addPersonalInfo = (personalInfo) => {
    setPersonalInfo(personalInfo);
  };

  // Delete work experience
  const deleteWorkExperience = (id) => {
    setWorkExperiences(
      workExperiences.filter((workExperience) => workExperience.id !== id)
    );
  };

  // Add work experience
  const addWorkExperience = (workExperience) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newWorkExperience = { id, ...workExperience };
    setWorkExperiences([...workExperiences, newWorkExperience]);
  };

  return (
    <div className="container">
      <div className="forms">
        <p>Enter Your Information</p>
        <h2>Personal Information</h2>
        <AddPersonalInfo onAdd={addPersonalInfo} />
        <Header
          title="Work Experience"
          onAdd={() => setShowAddWorkExperience(!showAddWorkExperience)}
          showAdd={showAddWorkExperience}
        />
        {showAddWorkExperience && (
          <AddWorkExperience onAdd={addWorkExperience} />
        )}
      </div>

      <div className="resume">
        <PersonalInfo personalInfo={personalInfo} />
        <h2>Work Experience</h2>
        {workExperiences.length > 0 ? (
          <WorkExperiences
            workExperiences={workExperiences}
            onDelete={deleteWorkExperience}
          />
        ) : (
          "No work experience"
        )}
        <h2>Education</h2>
        {educations.length > 0 ? (
          <Educations educations={educations} />
        ) : (
          "No education"
        )}
      </div>
    </div>
  );
}

export default App;
