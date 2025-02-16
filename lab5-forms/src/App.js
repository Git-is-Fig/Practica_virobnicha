import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./Components/Registration";
import ProfileInfo from "./Components/ProfileInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/profile-info" element={<ProfileInfo />} />
      </Routes>
    </Router>
  );
}

export default App;