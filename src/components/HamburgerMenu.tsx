import { SetStateAction } from "react";
import { Link } from "react-router-dom";

type HamburgerMenuProps = {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

const HamburgerMenu = ({ setOpen }: HamburgerMenuProps) => {
  return (
    <nav className="hambruger">
      <ul className="hamburger__list">
        <li className="hamburger__item">
          <div className="hamburger__circle mercury" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="/"
          />
          <p className="hamburger__text">Mercury</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle venus" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="venus"
          />
          <p className="hamburger__text">Venus</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle earth" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="earth"
          />
          <p className="hamburger__text">Earth</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle mars" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="mars"
          />
          <p className="hamburger__text">Mars</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle jupiter" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="jupiter"
          />
          <p className="hamburger__text">Jupiter</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle saturn" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="saturn"
          />
          <p className="hamburger__text">Saturn</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle uranus" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="uranus"
          />
          <p className="hamburger__text">Uranus</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
        <li className="hamburger__item">
          <div className="hamburger__circle neptune" />
          <Link
            className="hamburger__link"
            onClick={() => setOpen(false)}
            to="neptune"
          />
          <p className="hamburger__text">Nepture</p>
          <img
            className="hamburger__image"
            src="/assets/icon-chevron.svg"
            alt="Access link"
          />
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
