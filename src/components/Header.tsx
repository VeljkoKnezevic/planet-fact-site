import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimesions";

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">
      <h1 className="header__heading">The Planets</h1>
      {width && width < 768 ? (
        <button
          className="header__hamburger"
          type="button"
          aria-label="open menu"
        ></button>
      ) : (
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__list__item">
              <Link to="/">Mercury</Link>
            </li>
            <li className="nav__list__item">
              <Link to="venus">Venus</Link>
            </li>
            <li className="nav__list__item">
              <Link to="earth">Earth</Link>
            </li>
            <li className="nav__list__item">
              <Link to="mars">Mars</Link>
            </li>
            <li className="nav__list__item">
              <Link to="jupiter">Jupiter</Link>
            </li>
            <li className="nav__list__item">
              <Link to="saturn">Saturn</Link>
            </li>
            <li className="nav__list__item">
              <Link to="uranus">Uranus</Link>
            </li>
            <li className="nav__list__item">
              <Link to="neptune">Nepture</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
