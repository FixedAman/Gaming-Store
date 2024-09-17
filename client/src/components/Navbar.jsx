import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const CustomNavbar = () => {
  const { isLoggedin } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand href="/" className="fw-bold me-auto">
          Gaming Store
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-400 me-3" : "text-white me-3"
              }
            >
              Home
            </Nav.Link>

            {isLoggedin ? (
              <Nav.Link
                as={NavLink}
                to="/store"
                className={({ isActive }) =>
                  isActive ? "text-red-400 me-3" : "text-white me-3"
                }
              >
                Store
              </Nav.Link>
            ) : (
              <Nav.Link
                as={NavLink}
                to="/discover"
                className={({ isActive }) =>
                  isActive ? "text-red-400 me-3" : "text-white me-3"
                }
              >
                Discover
              </Nav.Link>
            )}

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-400 me-3" : "text-white me-3"
              }
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-400 me-3" : "text-white me-3"
              }
            >
              About Us
            </Nav.Link>

            {isLoggedin ? (
              <Nav.Link
                as={NavLink}
                to="/logout"
                className={({ isActive }) =>
                  isActive ? "text-red-400 me-3" : "text-white me-3"
                }
              >
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-red-400 me-3" : "text-white me-3"
                  }
                >
                  Register
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-red-400" : "text-white"
                  }
                >
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
