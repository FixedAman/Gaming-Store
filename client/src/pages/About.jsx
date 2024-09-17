import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about who we are and our journey. We’re passionate about
            games, tech, and building amazing experiences for our users.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-5xl font-semibold mb-4 text-blue-500">
              Our Mission
            </h2>
            <p className=" text-gray-300 text-4xl">
              We aim to bring the best games and tech content to users
              worldwide. Our mission is to create an immersive experience,
              filled with fun, excitement, and endless opportunities.
            </p>
          </div>
          <div>
            <img
              src="https://i.redd.it/qdzec7l46a651.gif"
              alt="Our Mission"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="text-4xl font-bold mb-6 text-blue-500">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-700 rounded-lg shadow-md hover:bg-zinc-600 transition">
              <h3 className="text-2xl font-bold mb-4 ">Innovation</h3>
              <p className="text-gray-300 ">
                We believe in staying ahead of the curve with innovative
                solutions to bring new experiences to our community.
              </p>
            </div>
            <div className="p-6 bg-zinc-700 rounded-lg shadow-md hover:bg-zinc-600 transition">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-300 ">
                Our commitment to honest and ethical practices is at the core of
                everything we do.
              </p>
            </div>
            <div className="p-6 bg-zinc-700 rounded-lg shadow-md hover:bg-zinc-600 transition">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-300">
                We are dedicated to building a strong, inclusive community where
                everyone feels welcome.
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="mt-6  px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-full"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-zinc-900 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
