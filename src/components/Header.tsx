import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>The Planets</h1>
      <nav>
        <ul>
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
    </header>
  );
};

export default Header;
