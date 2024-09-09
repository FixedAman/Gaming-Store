import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaUsers, FaAddressBook, FaServicestack, FaHome } from "react-icons/fa"; // Icons from react-icons

const AdminLayout = () => {
  return (
    <>
      <header className="bg-zinc-800 text-white">
        <Container>
          <Navbar expand="lg" className="py-4">
            <Navbar.Brand className="text-white text-xl font-semibold">
              Admin Panel
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  as={NavLink}
                  to="/admin/users"
                  className="flex items-center text-white px-3 hover:text-blue-400"
                >
                  <FaUsers className="mr-2" />
                  Users
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/admin/contacts"
                  className="flex items-center text-white px-3 hover:text-blue-400"
                >
                  <FaAddressBook className="mr-2" />
                  Contacts
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/plans"
                  className="flex items-center text-white px-3 hover:text-blue-400"
                >
                  <FaServicestack className="mr-2" />
                  Plans
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className="flex items-center text-white px-3 hover:text-blue-400"
                >
                  <FaHome className="mr-2" />
                  Home
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
      <main className="p-4 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
