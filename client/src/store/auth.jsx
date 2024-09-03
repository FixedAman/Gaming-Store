import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [person, setPerson] = useState("");
  const isLoggedin = !!token;

  // Function to store token in LocalStorage and update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // Function to log out the user and clear the token
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // Function to authenticate the user based on the stored token
  const userAuthentication = async () => {
    if (!token) return; // Avoid fetching if no token is available

    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPerson(data.userData);
        
      } else {
        // Handle non-200 status codes
        const errorData = await response.json();
        console.error("Authentication failed:", errorData.message);
      }
    } catch (error) {
      console.error("Network error during authentication:", error);
    }
  };

  // Run authentication whenever the token changes
  useEffect(() => {
    userAuthentication();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ isLoggedin, LogoutUser, storeTokenInLS, person }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
