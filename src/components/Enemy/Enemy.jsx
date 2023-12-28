import "./Enemy.css";
import enemy1 from "../../assets/enemy/enemy1.jpg";
import enemy2 from "../../assets/enemy/enemy2.jpg";
import pig1 from "../../assets/enemy/enemy3.jpg";
import pig2 from "../../assets/enemy/enemy4.jpg";
import pig3 from "../../assets/pig3.png";
import pig4 from "../../assets/pig1.png";
import pig5 from "../../assets/pig2.png";
import pig6 from "../../assets/pig4.png";

function Enemy() {
  return (
    <div className="enemy" id="enemy">
      <div className="left-r">
        <img src={enemy1} alt="" />
        <img src={enemy2} alt="" />
        <img src={pig1} alt="" />
        <img src={pig2} alt="" />
      </div>
      <div className="right-r">
        <span>Pigs Family</span>
        <div>
          <span className="stroke-text">The Bad</span>
          <span> Piggies</span>
        </div>
        <div className="details-r">
          <div>
            <img src={pig3} alt="" width="70rem"></img>
            <span className="stroke-text">King Pig</span>
          </div>
          <div>
            <img src={pig4} alt="" width="70rem" />
            <span>Bad Pig</span>
          </div>
          <div>
            <img src={pig5} alt="" width="70rem" />
            <span>Countney Pig</span>
          </div>
          <div>
            <img src={pig6} alt="" width="70rem" />
            <span>Garry Pig</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enemy;
