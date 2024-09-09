import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Store from "./pages/Store";
import GameDetails from "./pages/GameDetails";
import CustomNavbar from "./components/Navbar";
import { Logout } from "./pages/Logout";
import Error from "./pages/Error";
import PaymentPage from "./pages/PaymentPage";
import Plans from "./pages/Plans";
import AdminUsers from "./pages/Admin-Users";
import AdminLayout from "./components/layout/Admin-layout";
import AdminContacts from "./pages/Admin-Contacts";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/game/:id" element={<GameDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/games/:id/payment" element={<PaymentPage />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/admin" element={<AdminLayout/>}>
           <Route path="users" element={<AdminUsers/>}/>
           <Route path="contacts" element={<AdminContacts/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
