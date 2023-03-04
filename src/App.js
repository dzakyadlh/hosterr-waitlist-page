import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./pages/landing";

import { useNavigate } from "react-router";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
