import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hasScrolled = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", hasScrolled);
    return () => window.removeEventListener("scroll", hasScrolled);
  }, []);

  return (
    <div className={scrolled ? "nav nav__scrolled" : "nav"}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__user"
        src="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755"
        alt="Netflix User"
      />
    </div>
  );
};

export default Navbar;
