import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("Submitting:", user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const object = await response.json();

      if (response.ok) {
        storeTokenInLS(object.token);
        toast.success("Log in Successful");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        if (object.message) {
          alert("Login failed: " + object.message);
        } else {
          toast.error("Login failed: Unknown error");
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
        <source src="/videos/Dmc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main className="relative z-10 shadow-2xl rounded-lg flex flex-col md:flex-row max-w-5xl w-full bg-opacity-0 overflow-hidden backdrop-blur-md mx-4 md:mx-6 lg:mx-8">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images7.alphacoders.com/928/thumb-1920-928728.jpg"
            alt="Login Image"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Login Form */}
        <div className="flex-1 p-10 bg-zinc-700 bg-opacity-60 backdrop-blur-md md:w-3/5 lg:w-2/5 mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Log in
          </h1>
          <form onSubmit={handleForm} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-white font-medium">
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
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-white font-medium"
              >
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
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Login;
