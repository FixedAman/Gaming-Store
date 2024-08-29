import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Register from "./pages/Register";
import About from "./pages/About";
// import Navbar from "./components/Navbar";
import CustomNavbar from "./components/Navbar";



const App = () => {
  return (
    <>
      <BrowserRouter>
      <CustomNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
