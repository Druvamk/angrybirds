import game1 from "../assets/gameversion/game1.jpg";
import game2 from "../assets/gameversion/game2.jpg";
import game3 from "../assets/gameversion/game3.jpg";
import game4 from "../assets/gameversion/game4.jpg";

export const games = [
  {
    image: (
      <img
        src={game1}
        alt=""
        width="250rem"
        height="200rem"
        style={{ borderRadius: "1.5rem" }}
      />
    ),
    name: "Angry Birds 2",
    features:
      "The 26th game of the series, the game takes place aboard the Piggy Gadget Lab that the main characters use to get to Eagle Island for the film's climactic confrontation.",
  },
  {
    image: (
      <img
        src={game2}
        alt=""
        width="250rem"
        height="200rem"
        style={{ borderRadius: "1.5rem" }}
      />
    ),
    name: "Angry Birds: Bird Island ",
    features:
      "The 27th game of the series. Features the gameplay of the original game with new visuals, characters and worlds for the video game subscription service Apple Arcade.",
  },
  {
    image: (
      <img
        src={game3}
        alt=""
        width="250rem"
        height="200rem"
        style={{ borderRadius: "1.5rem" }}
      />
    ),
    name: "Angry Birds Reloaded",
    features:
      "The 28th game of the series, available exclusively on the MMOG platform Roblox. Features an open world map with tasks, a customizable bird, drivable cars, houses, and the ability to hatch and raise hatchlings.",
  },
  {
    image: (
      <img
        src={game4}
        alt=""
        width="250rem"
        height="200rem"
        style={{ borderRadius: "1.5rem" }}
      />
    ),
    name: "Angry Birds: Bird Island ",
    features:
      "The 29th game of the series. Features similar mechanics and level structure of Angry Birds 2 but with chapters. The players will have 5 birds with different abilities to complete the level objective to advance to the next level.",
  },
];
