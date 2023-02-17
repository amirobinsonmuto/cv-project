import Header from "./components/Header";
import AddPersonalInfo from "./components/AddPersonalInfo";
import AddWorkExperience from "./components/AddWorkExperience";
import AddEducation from "./components/AddEducation";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperiences from "./components/WorkExperiences";
import Educations from "./components/Educations";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState("");
  const [showAddWorkExperience, setShowAddWorkExperience] = useState(false);
  const [showAddEducation, setShowAddEducation] = useState(false);
  const [workExperiences, setWorkExperiences] = useState("");
  const [educations, setEducations] = useState("");

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

  // Delete education
  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  // Add work experience
  const addWorkExperience = (workExperience) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newWorkExperience = { id, ...workExperience };
    setWorkExperiences([...workExperiences, newWorkExperience]);
  };

  // Add education
  const addEducation = (education) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newEducation = { id, ...education };
    setEducations([...educations, newEducation]);
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
        <Header
          title="Education"
          onAdd={() => setShowAddEducation(!showAddEducation)}
          showAdd={showAddEducation}
        />
        {showAddEducation && <AddEducation onAdd={addEducation} />}
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
          <Educations educations={educations} onDelete={deleteEducation} />
        ) : (
          "No education"
        )}
      </div>
    </div>
  );
}

export default App;
