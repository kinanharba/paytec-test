import "./App.css";
import AppContainer from "./Component/AppContainer";
import { Route, Routes } from "react-router";
import Registrieren from "./Component/RegistrierenPages/Registrieren";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="Registrieren" element={<Registrieren />} />
      </Routes>
    </div>
  );
}

export default App;
