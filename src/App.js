import Header from "./components/Header";
import WorkExperiences from "./components/WorkExperiences";
import { useState } from "react";
import AddWorkExperience from "./components/AddWorkExperience";

function App() {
  const [workExperiences, setWorkExperiences] = useState("");

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
      <Header />
      <AddWorkExperience onAdd={addWorkExperience} />
      {workExperiences.length > 0 ? (
        <WorkExperiences
          workExperiences={workExperiences}
          onDelete={deleteWorkExperience}
        />
      ) : (
        "No work experience"
      )}
    </div>
  );
}

export default App;
