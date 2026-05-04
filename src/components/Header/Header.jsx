import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="linksBlock">
        <nav className="link">
          <Link to="/about">About Me</Link>
        </nav>
        <nav className="link">
          <Link to="/my-city">My City</Link>
        </nav>
        <nav className="link">
          <Link to="/my-future">My Future</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;