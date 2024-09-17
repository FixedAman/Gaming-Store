import { useEffect, useState } from "react";
import GamesCard from "./GamesCard";

const RandomGameCards = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchRandomGames = async () => {
      try {
        const res = await fetch(
          "https://api.rawg.io/api/games?key=0317e51d08004520b27468dfd9a308cc&page_size=100"
        );
        const data = await res.json();
        const shuffledGames = data.results
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setGames(shuffledGames);
      } catch (error) {
        console.log("Error fetching random games:", error);
      }
    };

    fetchRandomGames();
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Explore Games 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {games.map((game) => (
          <GamesCard key={game.id} currGame={game} />
        ))}
      </div>
    </section>
  );
};

export default RandomGameCards;
