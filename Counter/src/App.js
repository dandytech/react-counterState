import "./index.css";
import Step1 from "./components/step";
import DateChecker from "./components/step2";

function App() {
  return (
    <>
      <div className="container">
        <Step1 />
      </div>
      <div className="container">
        <DateChecker />
      </div>
    </>
  );
}

export default App;
