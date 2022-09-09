import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const footerException = "/rick-and-morty";
  const { pathname: location } = useLocation();
  return (
    <footer>
      <div
        className={
          location === footerException
            ? "footer__content__rickAndMorty"
            : "footer__content"
        }
      >
        <p className="footer-text">
          Made by <a href="http://www.github.com/avilalte">Alan Vilalte</a> &{" "}
          <a href="https://github.com/CamiStefano">Cami Stéfano</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
