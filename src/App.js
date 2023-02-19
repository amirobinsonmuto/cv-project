import Header from "./components/Header";
import AddPersonalInfo from "./components/AddPersonalInfo";
import AddWorkExperience from "./components/AddWorkExperience";
import AddEducation from "./components/AddEducation";
import PersonalInfo from "./components/PersonalInfo";
import WorkExperiences from "./components/WorkExperiences";
import Educations from "./components/Educations";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState("");
  const [workExperienceForms, setWorkExperienceForms] = useState([]);
  const [workExperiences, setWorkExperiences] = useState("");
  const [showAddEducation, setShowAddEducation] = useState(false);
  const [educations, setEducations] = useState("");

  // Add personal info
  const addPersonalInfo = (personalInfo) => {
    setPersonalInfo(personalInfo);
  };

  // Add work experience form
  const addWorkExperienceForm = () => {
    const id = Math.floor(Math.random() * 10000) + 1;

    setWorkExperienceForms(
      workExperienceForms.concat(
        <AddWorkExperience
          key={id}
          onAdd={addWorkExperience}
          onDelete={deleteWorkExperienceForm}
          id={id}
        />
      )
    );
  };

  // Delete work experience form
  const deleteWorkExperienceForm = (id) => {
    setWorkExperienceForms(
      workExperienceForms.filter(
        (workExperienceForm) => workExperienceForm.key !== id
      )
    );
    setWorkExperiences(
      workExperiences.filter((workExperience) => workExperience.id !== id)
    );
  };

  // Add work experience
  const addWorkExperience = (workExperience) => {
    // add if the item does not already exist
    const newWorkExperience = { ...workExperience };
    setWorkExperiences([...workExperiences, newWorkExperience]);
    // edit if the item already exist
  };

  // Delete work experience
  // const deleteWorkExperience = (id) => {
  //   setWorkExperiences(
  //     workExperiences.filter((workExperience) => workExperience.id !== id)
  //   );
  // };

  // Add education
  const addEducation = (education) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newEducation = { id, ...education };
    setEducations([...educations, newEducation]);
  };

  // Delete education
  const deleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id !== id));
  };

  return (
    <main className="container">
      <div className="forms">
        <p>Enter Your Information</p>
        <h2>Personal Information</h2>
        <AddPersonalInfo onAdd={addPersonalInfo} />
        <Header title="Work Experience" />
        {workExperienceForms}
        <Button
          color="green"
          className="btn btn-block"
          text="Add"
          onClick={addWorkExperienceForm}
        />

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
          <WorkExperiences workExperiences={workExperiences} />
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
    </main>
  );
}

export default App;
