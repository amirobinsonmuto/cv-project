import Header from "./components/Header";
import AddPersonalInfo from "./components/AddPersonalInfo";
import RenderWorkExperienceForms from "./components/RenderWorkExperienceForms";
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
    const newWorkExperienceForm = { id };

    setWorkExperienceForms(workExperienceForms.concat(newWorkExperienceForm));
  };

  // Add work experience
  const addWorkExperience = (workExperience) => {
    const newWorkExperience = { ...workExperience };
    setWorkExperiences([...workExperiences, newWorkExperience]);
  };

  // update work experience
  const updateWorkExperience = (updatedWorkExperience) => {
    const matchedWorkExperience = workExperiences.find(
      (workExperience) => workExperience.id === updatedWorkExperience.id
    );
    const index = workExperiences.indexOf(matchedWorkExperience);

    // 1. Make a shallow copy of the workExperiences state
    let workExperiencesCopy = [...workExperiences];
    // 2. find the object I want to replace with
    let item = workExperiencesCopy[index];
    // 3. Replace the object
    item = updatedWorkExperience;
    // 4. Put it back into our array
    workExperiencesCopy[index] = item;
    // 5. Set the copy array to the state
    setWorkExperiences(workExperiencesCopy);
  };

  // Delete work experience form and item
  const deleteWorkExperience = (id) => {
    setWorkExperienceForms(
      workExperienceForms.filter(
        (workExperienceForm) => workExperienceForm.id !== id
      )
    );
    setWorkExperiences(
      workExperiences.filter((workExperience) => workExperience.id !== id)
    );
  };

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
        <RenderWorkExperienceForms
          workExperienceForms={workExperienceForms}
          onAdd={addWorkExperience}
          onUpdate={updateWorkExperience}
          onDelete={deleteWorkExperience}
        />
        <Button
          color="green"
          className="btn btn-block"
          text="Add Work Experience"
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
