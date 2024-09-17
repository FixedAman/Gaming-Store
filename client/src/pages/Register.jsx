import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // context api
  const { storeTokenInLS } = useAuth();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const object = await response.json();
      console.log(object);
      toast.error(object.message);
      if (response.ok) {
        toast.success("Register Successful");
        // store the token chilo 
        console.log("from server", object);

        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      } else {
        if (object.errors) {
          const errorMessages = object.errors
            .map((error) => error.message || "Unknown error")
            .join("\n");
          toast.error(errorMessages);
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error: " + error.message);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-sm bg-opacity-10"
      >
        <source src="/videos/gta-6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="relative z-10 shadow-lg rounded-lg flex flex-col md:flex-row max-w-5xl w-full bg-opacity-0 overflow-hidden backdrop-blur-md">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
            alt="Registration Image"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Registration Form */}
        <div className="flex-1 p-8 bg-white bg-opacity-30  backdrop-blur-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Registration Form
          </h1>
          <form onSubmit={handleForm} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                id="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Register now
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Register;
