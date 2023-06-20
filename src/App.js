import "./App.css";
import HomePage from "./Components/Home page/HomePage";
import Greyjoy from "./Components/Greyjoy/Greyjoy";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greyjoy" element={<Greyjoy />} />
      </Routes>
    </div>
  );
};

export default App;
