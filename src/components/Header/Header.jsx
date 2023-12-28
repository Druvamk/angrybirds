import "./Header.css";
import logo from "../../assets/logo (2).png";
function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testmonials</li>
      </ul>
    </div>
  );
}

export default Header;
