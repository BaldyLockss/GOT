import "./App.css";
import HomePage from "./Components/Home page/HomePage";
import Greyjoy from "./Components/Greyjoy/Greyjoy";
import Stark from "./Components/Stark/Stark";
import Lannister from "./Components/Lannister/Lannister";
import Targeryan from "./Components/Targeryan/Targeryan";
import Tully from "./Components/Tully/Tully";
import Baratheon from "./Components/Beratheon/Beratheon";
import Arryn from "./Components/Arryn/Arryn";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greyjoy" element={<Greyjoy />} />
        <Route path="/stark" element={<Stark />} />
        <Route path="/lannister" element={<Lannister />} />
        <Route path="/targeryan" element={<Targeryan />} />
        <Route path="/tully" element={<Tully />} />
        <Route path="/baratheon" element={<Baratheon />} />
        <Route path="/arryn" element={<Arryn />} />
      </Routes>
    </div>
  );
};

export default App;
