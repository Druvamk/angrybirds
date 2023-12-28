import "./Programs.css";
import { data, data1 } from "../../data/Data";
import Images from "./Images";
import Images1 from "./Images1";
function Programs() {
  return (
    <div className="programs" id="programs">
      {/* program header start */}
      <div className="program-header">
        <span className="stroke-text">Play The</span>
        <span>Game</span>
        <span className="stroke-text">In order to relax</span>
      </div>
      {/* program header end */}
      <div className="program-catagories">
        {data.map((program) => (
          <Images
            image={program.img}
            heading={program.heading}
            details={program.details}
            key={program.heading}
          />
        ))}
      </div>
      <div className="program-catagories">
        {data1.map((program) => (
          <Images1
            image={program.img}
            heading={program.heading}
            details={program.details}
            key={program.heading}
          />
        ))}
      </div>
    </div>
  );
}

export default Programs;
