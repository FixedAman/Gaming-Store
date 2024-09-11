import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Link } from "react-router-dom";
import {
  FaCog,
  FaGamepad,
  FaStar,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaShoppingCart,
} from "react-icons/fa";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=0317e51d08004520b27468dfd9a308cc`
        );
        const data = await res.json();
        setGame(data);

        const screenshotsRes = await fetch(
          `https://api.rawg.io/api/games/${id}/screenshots?key=0317e51d08004520b27468dfd9a308cc`
        );
        const screenshotsData = await screenshotsRes.json();
        setScreenshots(screenshotsData.results);
      } catch (error) {
        console.log("Error fetching game details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900">
        <Spinner animation="grow" variant="secondary" />
        <h1 className="text-2xl font-bold text-gray-300 ml-4">Loading...</h1>
      </div>
    );
  }

  if (!game) {
    return <div className="text-white text-center">Game not found</div>;
  }

  const mainScreenshots = game.short_screenshots || [];
  const allScreenshots = [
    ...mainScreenshots.map((s) => s.image),
    ...screenshots.map((s) => s.image),
  ];

  const metacriticScore =
    game.metacritic_platforms && game.metacritic_platforms.length > 0
      ? game.metacritic_platforms[0].metascore || "N/A"
      : "N/A";

  const releaseDate = game.released || "N/A";
  const genres = game.genres?.map((g) => g.name).join(", ") || "N/A";
  const developer = game.developers?.map((d) => d.name).join(", ") || "N/A";
  const publisher = game.publishers?.map((p) => p.name).join(", ") || "N/A";

  // Filter for PC requirements
  const pcRequirements = game.platforms?.find(
    (platform) => platform.platform.name.toLowerCase() === "pc"
  );
  const minRequirements = pcRequirements?.requirements?.minimum || "N/A";
  const recRequirements = pcRequirements?.requirements?.recommended || "N/A";

  return (
    <div className="bg-zinc-800 min-h-screen p-8 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-500">{game.name}</h1>
        <img
          src={game.background_image}
          alt={game.name}
          className="rounded-lg shadow-md mb-6 max-h-full w-1/2 object-cover"
        />

        {/* Description */}
        <div className="mb-6 text-gray-300 text-lg leading-relaxed bg-zinc-700 rounded-md p-4">
          <p
            className={`transition-all duration-300 ${
              descriptionExpanded ? "max-h-full" : "max-h-32 overflow-hidden"
            }`}
          >
            {game.description_raw}
          </p>
          <button
            onClick={() => setDescriptionExpanded(!descriptionExpanded)}
            className="mt-2 text-blue-400 hover:underline"
          >
            {descriptionExpanded ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Screenshots Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allScreenshots.map((src, index) => (
            <div key={index} className="relative max-w-full">
              <img
                src={src}
                alt="Screenshot"
                className="rounded-lg shadow-md object-cover w-full h-48 md:h-60 lg:h-72 cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          ))}
        </div>

        {/* Display PC Requirements */}
        <div className="mt-8 mb-6 p-6 bg-zinc-700 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCog className="mr-2 text-yellow-400 text-3xl" /> System
            Requirements
          </h2>
          <h3 className="text-xl font-semibold text-gray-200">PC</h3>
          <p className="mb-2">
            <strong>Minimum Requirements:</strong> {minRequirements}
          </p>
          <p className="mb-2">
            <strong>Recommended Requirements:</strong> {recRequirements}
          </p>
          <p className="mb-2 flex items-center">
            <FaGamepad className="mr-2 text-blue-400 text-3xl" />
            <strong>Available Platforms:</strong>{" "}
            {game.platforms?.map((p) => p.platform.name).join(", ") || "N/A"}
          </p>
          <p className="mb-2 flex items-center">
            <FaStar className="mr-2 text-yellow-300 text-3xl" />
            <strong>Metacritic Score:</strong> {metacriticScore}
          </p>
          <p className="mb-2 flex items-center">
            <FaCalendarAlt className="mr-2 text-green-400 text-3xl" />
            <strong>Release Date:</strong> {releaseDate}
          </p>
          <p className="mb-2 flex items-center">
            <FaTag className="mr-2 text-red-400 text-3xl" />
            <strong>Genres:</strong> {genres}
          </p>
          <p className="mb-2 flex items-center">
            <FaUser className="mr-2 text-purple-400 text-3xl" />
            <strong>Developer:</strong> {developer}
          </p>
          <p className="mb-2 flex items-center">
            <FaUser className="mr-2 text-orange-400 text-3xl" />
            <strong>Publisher:</strong> {publisher}
          </p>
        </div>
      </div>

      {/* Sticky Buttons */}
      <div className="fixed bottom-0 left-0 w-full bg-zinc-800 p-4 flex justify-center gap-4">
        <Link
          to={`/games/${id}/payment`}
          className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg font-semibold"
        >
          <FaShoppingCart className="mr-2 text-xl" /> Buy Now
        </Link>
        <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold">
          <FaShoppingCart className="mr-2 text-xl" /> Add to Cart
        </button>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={allScreenshots.map((src) => ({ src }))}
          index={photoIndex}
          onIndexChange={setPhotoIndex}
        />
      )}
    </div>
  );
};

export default GameDetails;
