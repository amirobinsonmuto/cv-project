import BasicInfoInput from "./components/Input/BasicInfoInput";
import EducationInput from "./components/Input/EducationInput";
import ExperienceInput from "./components/Input/ExperienceInput";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Editor</h1>
      </header>
      <main>
        <BasicInfoInput />
        <ExperienceInput />
        <EducationInput />
      </main>
    </div>
  );
}

export default App;
