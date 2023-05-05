import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimesions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">
      <h1 className="header__heading">The Planets</h1>
      {width && width < 700 ? (
        <button
          className="header__hamburger"
          type="button"
          aria-label="open menu"
        ></button>
      ) : (
        <nav className="header__nav">
          <ul className="header__nav__list">
            <li>
              <Link to="/">Mercury</Link>
            </li>
            <li>
              <Link to="venus">Venus</Link>
            </li>
            <li>
              <Link to="earth">Earth</Link>
            </li>
            <li>
              <Link to="mars">Mars</Link>
            </li>
            <li>
              <Link to="jupiter">Jupiter</Link>
            </li>
            <li>
              <Link to="saturn">Saturn</Link>
            </li>
            <li>
              <Link to="uranus">Uranus</Link>
            </li>
            <li>
              <Link to="neptune">Nepture</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
