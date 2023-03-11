import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="app container mx-auto">
      <div className="upperlevel-contents min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
