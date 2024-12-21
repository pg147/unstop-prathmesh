// React Router DOM
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Login from "./pages/login/Login";
import Mainpage from "./pages/main/Mainpage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </Router>
  )
}
