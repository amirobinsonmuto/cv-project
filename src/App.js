import BasicInfoInput from "./components/Input/BasicInfoInput";
import EducationInput from "./components/Input/EducationInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Editor</h1>
      </header>
      <main>
        <BasicInfoInput />
        <EducationInput />
      </main>
    </div>
  );
}

export default App;
