import "./style.css";
import Navbar from "../../components/navbar";
import HeroImageModel from "../../assets/HeroImage(Model).png";
import PurpleShape from "../../assets/PurpleShape.svg";
import PinkShape from "../../assets/PinkShape.svg";
import BlueShape from "../../assets/BlueShape.svg";
import Checkmark from "../../assets/Checkmark.svg";
import HelpAvatar from "../../assets/HelpAvatar.svg";

const LandingPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="container-40">
        <div className="image-group">
          <img src={HeroImageModel} alt="heromodel" className="heromodel" />
          <img src={PurpleShape} alt="heromodel" className="purpleshape" />
          <img src={PinkShape} alt="heromodel" className="pinkshape" />
          <img src={BlueShape} alt="heromodel" className="blueshape" />
        </div>
      </div>
      <div className="container-40">
        <h1>Host your website in less than 5 minutes.</h1>
        <p>
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>
        <div className="input-groups">
          <input type={"email"} placeholder="Enter e-mail address"></input>
          <button type="submit" className="joinWait">
            Join Waitlist
          </button>
        </div>
        <div className="input-note">
          <img src={Checkmark} alt="checkmark" className="checkmark" />
          <p>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <a href="#" className="alink">
            Facebook
          </a>
          <a href="#" className="alink">
            Instagram
          </a>
          <a href="#" className="alink">
            Twitter
          </a>
        </div>
        <div className="d-flex align-items-center helpCenter">
          <img src={HelpAvatar} alt="helpavatar" className="helpAvatar mx-2" />
          <div>
            <h5>Have any questions?</h5>
            <h6>Talk to a specialist</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
