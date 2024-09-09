import { useNavigate } from "react-router-dom";

const GamesCard = ({ currGame }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/store/game/${currGame.id}`);
  };

  return (
    <li
      className="bg-black rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={handleClick}
    >
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={currGame.background_image}
          alt={currGame.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h2 className="text-white text-2xl font-bold mb-2">{currGame.name}</h2>
        <p className="text-gray-400 text-md mb-1">
          Released: {currGame.released}
        </p>
        <p className="text-gray-400 text-md mb-1">
          Genre: {currGame.genres.length > 0 ? currGame.genres[0].name : "N/A"}
        </p>
        <p className="text-yellow-400 font-semibold text-xl">
          Rating: {currGame.rating}
        </p>
      </div>
    </li>
  );
};

export default GamesCard;
