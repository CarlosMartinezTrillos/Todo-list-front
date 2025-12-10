import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";      // ⬅️ Importas Home
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />           {/* Home ahora es la principal */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />           {/* Redirige cualquier ruta a Home */}
      </Routes>
    </BrowserRouter>
  );
}
