import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimesions";

type HeaderProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Header = ({ open, setOpen }: HeaderProps) => {
  const { width } = useWindowDimensions();

  return (
    <header className="header">
      <h1 className="header__heading">The Planets</h1>
      {/* Depending on screen size render either hamburger menu or nav element */}
      {width && width < 700 ? (
        <button
          className="header__hamburger"
          type="button"
          aria-label="open menu"
          onClick={() => setOpen(!open)}
        ></button>
      ) : (
        <nav className={`header__nav `}>
          <ul className="header__nav__list">
            <li>
              <Link className="mercury" to="/">
                Mercury
              </Link>
            </li>
            <li>
              <Link className="venus" to="venus">
                Venus
              </Link>
            </li>
            <li>
              <Link className="earth" to="earth">
                Earth
              </Link>
            </li>
            <li>
              <Link className="mars" to="mars">
                Mars
              </Link>
            </li>
            <li>
              <Link className="jupiter" to="jupiter">
                Jupiter
              </Link>
            </li>
            <li>
              <Link className="saturn" to="saturn">
                Saturn
              </Link>
            </li>
            <li>
              <Link className="uranus" to="uranus">
                Uranus
              </Link>
            </li>
            <li>
              <Link className="neptune" to="neptune">
                Nepture
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
