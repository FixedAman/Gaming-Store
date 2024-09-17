import { useNavigate } from "react-router-dom";


const GamesCard = ({ currGame }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/store/game/${currGame.id}`);
  };
 

  return (
    <li
      className="bg-zinc-900 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:border-2 hover:border-blue-500 "
      onClick={handleClick}
      style={{ width: "calc(100% - 2.4rem)" }}
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
        <p className="text-blue-400 text-md mb-1">
          Released: {currGame.released}
        </p>
        <p className="text-white text-md mb-1">
          Genre:{" "}
          {currGame.genres.length > 0
            ? currGame.genres.map((curr) => curr.name).join(" / ")
            : "N/A"}
        </p>
        <p className="text-yellow-400 font-semibold text-xl">
          Rating: {currGame.rating}
        </p>
      </div>
    </li>
  );
};

export default GamesCard;
