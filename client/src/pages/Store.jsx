import { useEffect, useState } from "react";
import GamesCard from "./GamesCard";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const navigate = useNavigate();

  // Fetch PC platform games
  const PcGameFetch = async () => {
    setLoading(true); // Set loading true when the fetch starts
    try {
      const res = await fetch(
        "https://api.rawg.io/api/platforms?key=0317e51d08004520b27468dfd9a308cc"
      );
      const data = await res.json();
      const pcPlatform = data.results.find(
        (platform) => platform.name.toLowerCase() === "pc"
      );

      // Fetching data for PC games
      if (pcPlatform) {
        const gamesRes = await fetch(
          `https://api.rawg.io/api/games?platforms=${pcPlatform.id}&key=0317e51d08004520b27468dfd9a308cc&page_size=50&page=${currentPage}`
        );
        const gamesData = await gamesRes.json();
        // Filter out games that are already in the state
        setGames((prevGames) => [
          ...prevGames,
          ...gamesData.results.filter(
            (game) => !prevGames.some((prevGame) => prevGame.id === game.id)
          ),
        ]);
      } else {
        console.log("PC Platform not found");
      }
    } catch (error) {
      console.log("Error fetching games:", error);
    } finally {
      setLoading(false); // Always set loading to false after fetching completes
    }
  };

  const fetchGenres = async () => {
    try {
      const res = await fetch(
        "https://api.rawg.io/api/genres?key=0317e51d08004520b27468dfd9a308cc"
      );
      const data = await res.json();
      setGenres(data.results); // Ensure you're setting the correct data
    } catch (error) {
      console.log("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
    PcGameFetch();
  }, [currentPage]);

  // Search and genre filtering
  const searchDetails = games
    .filter((curr) => curr.name.toLowerCase().includes(search.toLowerCase()))
    .filter((curr) =>
      selectedGenre
        ? curr.genres.some((genre) => genre.id === selectedGenre)
        : true
    );

  // Load more games
  const loadMoreGames = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (loading && currentPage === 1) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900">
        <Spinner animation="grow" variant="secondary" />
        <h1 className="text-2xl font-bold text-gray-300 ml-4">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="bg-zinc-800 min-h-screen p-8 flex flex-row-reverse">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 md:w-1/5 sticky top-0 bg-zinc-900 p-4 text-xl flex flex-col h-screen rounded">
        <div className="flex items-center mb-6">
          <AiOutlineMenu className="text-gray-400 text-2xl mr-3" />
          <h2 className="text-2xl font-bold text-white">Store</h2>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Genres</h3>
          <ul>
            {genres.map((genre) => (
              <li
                key={genre.id}
                className={`text-gray-400 cursor-pointer py-1 px-2 rounded hover:bg-gray-700 ${
                  selectedGenre === genre.id ? "font-bold bg-gray-700" : ""
                }`}
                onClick={() =>
                  setSelectedGenre(genre.id === selectedGenre ? null : genre.id)
                }
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="sticky top-0 p-4 z-10 bg-zinc-800">
          <div className="relative">
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-4xl pl-10 pr-4 py-4 border rounded-2xl bg-zinc-900 text-white focus:outline-none focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {searchDetails.map((currGame) => (
            <GamesCard key={currGame.id} currGame={currGame} />
          ))}
        </ul>
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMoreGames}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Store;
