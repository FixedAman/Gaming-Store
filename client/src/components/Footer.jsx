import { NavLink } from "react-router-dom";
import { FaStore, FaPhoneAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa"; // importing icons

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8">
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome to Gaming Store</h1>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/store"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors text-lg"
              >
                <FaStore /> <span>Store</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors text-lg"
              >
                <FaPhoneAlt /> <span>Contact</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors text-lg"
              >
                <FaUserPlus /> <span>Register</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="flex items-center space-x-2 hover:text-gray-300 transition-colors text-lg"
              >
                <FaSignInAlt /> <span>Login</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">123 Gaming Street</p>
          <p className="text-lg">City, State, 12345</p>
          <p className="text-lg">Email: support@gamingstore.com</p>
          <p className="text-lg">Phone: +1 234 567 890</p>
        </div>
      </section>
    </footer>
  );
};
