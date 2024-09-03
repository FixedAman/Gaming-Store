import { NavLink } from "react-router-dom";


const Error = () => {
  return (
    <>
      <section className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center px-6 py-12 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-6xl font-bold mb-4">404</h2>
          <h4 className="text-2xl mb-4">Sorry! Page not Found</h4>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            soluta tenetur expedita suscipit aliquam eveniet!
          </p>
          <div className="flex gap-4 justify-center">
            <NavLink
              to="/"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Return
            </NavLink>
            <NavLink
              to="/contact"
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
            >
              Report Problem
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
