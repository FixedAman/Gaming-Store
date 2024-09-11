import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUsers, FaAddressBook, FaServicestack, FaHome } from "react-icons/fa"; // Icons from react-icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu toggle

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-800 ">
      {/* Sidebar */}
      <aside
        className={`bg-zinc-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0 lg:w-64 text-2xl `}
      >
        <div className="flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <AiOutlineClose
            className="lg:hidden cursor-pointer text-2xl"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
        <nav className="mt-10">
          <NavLink
            to="/admin/users"
            className="flex items-center text-white px-3 py-2 hover:text-blue-400"
          >
            <FaUsers className="mr-2 text-orange-400 "  />
            Users
          </NavLink>
          <NavLink
            to="/admin/contacts"
            className="flex items-center text-white px-3 py-2 hover:text-blue-400"
          >
            <FaAddressBook className="mr-2 text-blue-600" />
            Contacts
          </NavLink>
          <NavLink
            to="/plans"
            className="flex items-center text-white px-3 py-2 hover:text-blue-400"
          >
            <FaServicestack className="mr-2 text-purple-800" />
            Plans
          </NavLink>
          <NavLink
            to="/"
            className="flex items-center text-white px-3 py-2 hover:text-blue-400"
          >
            <FaHome className="mr-2 text-green-600" />
            Home
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <div className=" flex-1 lg:ml-21">
        {/* Header */}
        <header className="bg-zinc-800 text-white p-4 flex justify-between items-center lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white focus:outline-none"
          >
            <AiOutlineMenu className="text-2xl" />
          </button>
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>

        <main className="p-4 bg-zinc-800 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
