import BasicInfoInput from "./components/input/BasicInfoInput";
import EducationInput from "./components/input/EducationInput";
import WorkExperienceInput from "./components/input/WorkExperienceInput";
import Resume from "./components/output/resume";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Editor</h1>
      </header>
      <main>
        <section class="input-section">
          <BasicInfoInput />
          <WorkExperienceInput />
          <EducationInput />
        </section>
      </main>
    </div>
  );
}

export default App;
