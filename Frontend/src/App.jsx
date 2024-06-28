import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { LandingPage } from "./Pages/LandingPage";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Dashboard } from "./Components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./Store/AuthContext.jsx";
import { Logout } from "./Controllers/Logout.jsx";
import { DietFood } from "./Components/Diet Food/DietFood.jsx";
import { VegFood } from "./Components/Diet Food/Veg.jsx";


function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {isAuthenticated && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/diet" element={<DietFood />} />
            <Route path="/veg-food" element={<VegFood />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
