import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
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

        <main className="relative z-10 shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full bg-opacity-0 overflow-hidden backdrop-blur-md">
          {/* Image Section */}
          <div className="hidden md:block md:w-1/2">
            <img
              src="https://images7.alphacoders.com/928/thumb-1920-928728.jpg"
              alt="Registration Image"
              className="object-cover h-full w-full "
            />
          </div>

          {/* Registration Form */}
          <div className="flex-1 p-8 bg-white bg-opacity-50  backdrop-blur-md md:w-3/5 lg:w-2/5 mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Log in
            </h1>
            <form onSubmit={handleForm} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
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
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium"
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
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
