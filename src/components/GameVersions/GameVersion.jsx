import { games } from "../../data/gameversions";
import "./GameVersion.css";

function GameVersion() {
  return (
    <div className="gameversion">
      <div className="program-header">
        <span className="stroke-text"> The Latest </span>
        <span> Versions Of </span>
        <span className="stroke-text"> Angry Birds </span>
      </div>
      {/* the game versions start */}
      <div className="games">
        {games.map((game, i) => (
          <div className="plan" key={i}>
            <span>{game.image}</span>
            <span>{game.name}</span>
            <span>{game.features}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameVersion;
