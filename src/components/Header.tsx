import { Link } from "react-router-dom";
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-2 px-3">
      <Link to="/">
        <img src={logoSpotify} alt="" />
      </Link>
      <Link to="/" className="text-2xl">
        Spotify
      </Link>
    </div>
  );
};

export default Header;
