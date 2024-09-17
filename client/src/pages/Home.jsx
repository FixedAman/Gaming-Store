import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { useAuth } from "../store/auth";
import { Footer } from "../components/Footer";
import RandomGameCards from "./RandomCard";

const Home = () => {
  const [consumer, setConsumer] = useState({
    username: "",
  });
  const { person, isLoggedin } = useAuth();

  useEffect(() => {
    if (person && person.username) {
      setConsumer({
        username: person.username,
      });
    }
  }, [person]);

  return (
    <>
      <main className="bg-zinc-800 min-h-screen flex justify-center flex-col">
        <section className="section-hero w-full h-3/4 flex items-center justify-center">
          <div className="hero-two-section w-full h-full flex flex-col lg:flex-row items-center rounded-lg overflow-hidden">
            {/* Content Section */}
            <div className="hero-content p-8 lg:w-1/2 h-full text-center lg:text-left text-white flex flex-col justify-between gap-64 ">
              <div className="h-full">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 fade-in g  ">
                  Welcome To
                  <span className="text-red-600 blink"> Gaming Store</span>
                </h1>
                <p className="text-white mb-6 font-bold leading-relaxed text-center text-xl lg:text-2xl whitespace-normal mt-24 fade-in-up g">
                  {isLoggedin ? <>'Hi {consumer.username}'</> : <>"Hi User"</>}
                  <br />
                  <span className="text-red-600">
                    your premier destination for gaming
                  </span>
                  excellence! Whether you're hunting for the latest blockbuster
                  or searching for hidden gems, we've got you covered.
                </p>
              </div>
              <div className="btn-group flex gap-4 justify-center lg:justify-start mt-auto mb-8">
                <a href="/discover">
                  <button className="px-6 py-3 border-2 border-blue-600 bg-transparent rounded-md hover:border-blue-800 hover:text-blue-800 transition duration-300 transform hover:scale-105 text-white">
                    Discover
                  </button>
                </a>
                <a href="/contact-us">
                  <button className="px-6 py-3 border-2 border-red-600 text-white bg-transparent rounded-md hover:border-red-800 hover:text-red-800 transition duration-300 transform hover:scale-105">
                    Contact
                  </button>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="hero-image lg:w-1/2 h-full ">
              <img
                src="https://i.pinimg.com/originals/c7/b9/05/c7b905f7e8637a1709d06ad0c502b3ce.gif"
                alt="Gaming background"
                className="w-full h-full object-cover shadow-lg "
              />
            </div>
          </div>
        </section>
        <section className="border-2 border-zinc-700 ">
          <ImageSlider />
        </section>
        <section className="bg-zinc-800 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              <div className="div bg-zinc-800 p-6 rounded-lg shadow-lg fade-in-up">
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="text-red-500">Registered Companies</p>
              </div>
              <div className="div2 bg-zinc-800 p-6 rounded-lg shadow-lg fade-in-up">
                <h2 className="text-3xl font-bold">100,000+</h2>
                <p className="text-red-500">Happy Clients</p>
              </div>
              <div className="div3 bg-zinc-800 p-6 rounded-lg shadow-lg fade-in-up">
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-red-500">Logins</p>
              </div>
              <div className="div4 bg-zinc-800 p-6 rounded-lg shadow-lg fade-in-up">
                <h2 className="text-3xl font-bold">100+</h2>
                <p className="text-red-500">Well Played</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-hero w-full h-3/4 flex items-center justify-center">
          <div className="hero-two-section w-full h-full flex flex-col lg:flex-row items-center rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="hero-image lg:w-1/2 h-full ml-8">
              <img
                src="https://giffiles.alphacoders.com/219/219281.gif"
                alt="Gaming background"
                className="w-full h-full object-cover  shadow-lg "
              />
            </div>
            {/* Content Section */}
            <div className="hero-content p-8 lg:w-1/2 h-full text-center lg:text-left text-white flex flex-col justify-between gap-64">
              <div className="h-full">
                <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 fade-in">
                  Discover <span className="text-red-600 blink">New</span>
                </h1>
                <p className="text-white mb-6 font-bold leading-relaxed text-center text-xl lg:text-2xl whitespace-normal mt-24 fade-in-up">
                  Discover ,
                  <span className="text-red-600">
                    your premier destination for gaming
                  </span>
                  excellence! Whether you're hunting for the latest blockbuster
                  or searching for hidden gems, we've got you covered.
                </p>
              </div>
              <div className="btn-group flex gap-4 justify-center lg:justify-start mt-auto mb-8">
                <a href="/discover">
                  <button className="px-6 py-3 border-2 border-blue-600 bg-transparent rounded-md hover:border-blue-800 hover:text-blue-800 transition duration-300 transform hover:scale-105 text-white">
                    Discover
                  </button>
                </a>
                <a href="/contact-us">
                  <button className="px-6 py-3 border-2 border-red-600 text-white bg-transparent rounded-md hover:border-red-800 hover:text-red-800 transition duration-300 transform hover:scale-105">
                    Contact
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* // bar  */}
        </section>
        {/* bar */}
        <section className="flex flex-col ml-11">
          <RandomGameCards />
        </section>
        <section className="flex flex-col ml-11 mr-11">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Expolore new offers✨
          </h1>
          <img
            src="https://media.giphy.com/media/s3FBywPqyFuxO/giphy.gif"
            alt="Gaming background"
            className="w-full h-[40vh] md:h-[50vh] lg:h-[75vh] object-cover"
          />
        </section>
        <section className="flex flex-col ml-11">
          <RandomGameCards />
        </section>
      </main>
    </>
  );
};

export default Home;
