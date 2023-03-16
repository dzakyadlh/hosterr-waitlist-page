import * as ReactDOM from "react-dom/client";
import "./style.css";
import Logo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // const toggleBtn = () => {
  //   ddmenu.style.display = "block";
  // };
  const ddmenu = document.getElementsByClassName("dropdown_menu")[0];
  window.onclick = function (e) {
    if (e.target.matches(".toggle-btn")) {
      ddmenu.render(ddmenu);
      e.preventDefault();
    } else {
      ddmenu.style.display = "none";
    }
  };
  return (
    <div className="navbar">
      <div className="nav-item">
        <img src={Logo} alt="hosterrlogo" className="logo" />
        <a className="hiring">Hosterr is hiring!</a>
      </div>
      <div className="nav-item">
        <a className="alink">Plans</a>
        <a className="alink">Find domain</a>
        <a className="alink">Why Hosterr</a>
      </div>
      <div className="nav-item">
        <a className="alink">Sign In</a>
        <button className="joinWaitNav">Join Waitlist</button>
      </div>
      <a className="toggle_btn">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <div className="dropdown_menu">
        <li>
          <a className="dropdown_item">Plans</a>
        </li>
        <li>
          <a className="dropdown_item">Find domain</a>
        </li>
        <li>
          <a className="dropdown_item">Why Hosterr</a>
        </li>
        <li>
          <a className="dropdown_item">Sign In</a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
