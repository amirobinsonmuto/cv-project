import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import AddPersonalInfo from "./components/AddPersonalInfo";
import WorkExperiences from "./components/WorkExperiences";
import RenderWorkExperienceForms from "./components/RenderWorkExperienceForms";
import Educations from "./components/Educations";
import RenderEducationForms from "./components/RenderEducationForms";
import Button from "./components/Button";
import { useState } from "react";
import jsPDF from "jspdf";

function App() {
  const [personalInfo, setPersonalInfo] = useState("");
  const [workExperienceForms, setWorkExperienceForms] = useState([]);
  const [workExperiences, setWorkExperiences] = useState("");
  const [educationForms, setEducationForms] = useState([]);
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

  // Add work education form
  const addEducationForm = () => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEducationForm = { id };

    setEducationForms(educationForms.concat(newEducationForm));
  };

  // Add education
  const addEducation = (education) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newEducation = { id, ...education };
    setEducations([...educations, newEducation]);
  };

  // update education
  const updateEducation = (updatedEducation) => {
    const matchedEducation = educations.find(
      (education) => education.id === updatedEducation.id
    );
    const index = educations.indexOf(matchedEducation);

    let educationsCopy = [...educations];
    let item = educationsCopy[index];
    item = updatedEducation;
    educationsCopy[index] = item;
    setEducations(educationsCopy);
  };

  // Delete education
  const deleteEducation = (id) => {
    setEducationForms(
      educationForms.filter((educationForm) => educationForm.id !== id)
    );
    setEducations(educations.filter((education) => education.id !== id));
  };

  // Save the resume as PDF
  const saveAsPDF = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    doc.setFont('"Poppins", sans-serif;');
    const resumeElement = document.getElementById("resume");
    doc.html(resumeElement, {
      async callback(doc) {
        const pageCount = doc.internal.getNumberOfPages();
        doc.deletePage(pageCount);
        await doc.save("Your-resume");
      },
    });
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
          className="btn btn-block add-btn"
          text="Add Work Experience"
          onClick={addWorkExperienceForm}
        />

        <Header title="Education" />
        <RenderEducationForms
          educationForms={educationForms}
          onAdd={addEducation}
          onUpdate={updateEducation}
          onDelete={deleteEducation}
        />
        <Button
          color="green"
          className="btn btn-block add-btn"
          text="Add Education"
          onClick={addEducationForm}
        />
      </div>
      <div className="resume-container">
        <div className="resume" id="resume">
          <PersonalInfo personalInfo={personalInfo} />
          <div className="resume-work-experience">
            <h2 className="blue-text">Work Experience</h2>
            {workExperiences.length > 0 ? (
              <WorkExperiences workExperiences={workExperiences} />
            ) : (
              "No work experience"
            )}
          </div>
          <div className="resume-education">
            <h2 className="blue-text">Education</h2>
            {educations.length > 0 ? (
              <Educations educations={educations} onDelete={deleteEducation} />
            ) : (
              "No education"
            )}
          </div>
        </div>
        <Button
          color="green"
          className="btn btn-block add-btn"
          text="Save as PDF"
          onClick={saveAsPDF}
        />
      </div>
    </main>
  );
}

export default App;
