import "./style.css";
import Logo from "../../assets/Logo.svg";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
