import { useEffect, useState } from "react";
import GamesCard from "./GamesCard";
import { AiOutlineSearch } from "react-icons/ai";
import Spinner from "react-bootstrap/Spinner";

const Store = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch PC platform games
  const PcGameFetch = async () => {
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
      setLoading(false);
    }
  };

  useEffect(() => {
    PcGameFetch();
  }, [currentPage]);

  // Search functionality
  const searchDetails = games.filter((curr) => {
    return curr.name.toLowerCase().includes(search.toLowerCase());
  });

  // Load more games
  const loadMoreGames = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setLoading(true);
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
    <section className="bg-zinc-800 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="sticky top-0 p-4 z-10 w-1/3">
          <div className="relative">
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full max-w-4xl pl-10 pr-4 py-4 border  rounded bg-zinc-900 text-white focus:outline-none focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        make the bar in right
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
