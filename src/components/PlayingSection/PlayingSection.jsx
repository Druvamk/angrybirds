import "./PlayingSection.css";
import heroes from "../../assets/gameply/heroes.png";
import piges from "../../assets/gameply/piges.png";
function PlayingSection() {
  return (
    <>
      <div className="program-header">
        <span className="stroke-text">Heroes </span>
        <span>And Enemies </span>
        <span className="stroke-text"> Section</span>
      </div>
      <div className="playing">
        <div className="playing-left">
          <img src={heroes} alt="" />
        </div>
        <div className="playing-right">
          <img src={piges} alt="" />
        </div>
      </div>
    </>
  );
}

export default PlayingSection;
