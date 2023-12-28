import Header from "../Header/Header";
import "./Hero.css";
import herologo from "../../assets/angry birds hero.png";
import calories from "../../assets/calories.png";
import sidelogo from "../../assets/sedebird.png";
function Hero() {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* it's a hero add section */}
        <div className="the-best-add">
          <div></div>
          <span>The best entainering game</span>
        </div>
        {/* here the hero add section */}
        {/* This the hero text section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Angry </span>
            <span>Birds</span>
          </div>
          <div>
            <span>
              Angry Birds is a Finnish action, puzzle, and strategy based media
              franchise created by Rovio Entertainment, and owned by Sega
            </span>
          </div>
        </div>
        {/* This the hero text section end */}
        {/* This the figures setion */}
        <div className="figures">
          <div>
            <span>iOS</span>
            <span>11 December 2009</span>
          </div>
          <div>
            <span>CEO</span>
            <span>Alexandre Pelletier-Normand</span>
          </div>
          <div>
            <span>Founders</span>
            <span>Niklas Hed, Jarno Väkeväinen and Kim Dikert</span>
          </div>
        </div>
        {/* This the figures section end */}
        {/* This the hero-buttons section */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* This the fhero-buttons section end */}
      </div>

      {/* Right side hero content */}

      <div className="right-h">
        <button className="btn">Join Club</button>
        <div className="heart-rate">
          <img src={sidelogo} alt="" className="sidelogo" />
          <span>Matilda</span>
        </div>
        {/* Right side hero content */}
        {/* angry birds images */}
        <img src={herologo} alt="" className="heroimg" />
        {/* angry birds images end */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
