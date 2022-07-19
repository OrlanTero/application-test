import { useEffect, useState } from "react";
import { matchPath } from "react-router-dom";
import { ReactComponent as Hamburger } from "../Assets/media/icons/hamburger.svg";

export default function Navbar() {
  const [scrollOver, setScrollOver] = useState(false);
  const [show, setShow] = useState(false);
  const LINKS = [
    {
      text: "Home",
      path: "./",
    },
    {
      text: "Discover",
      path: "./discover",
    },
    {
      text: "About Us",
      path: "./about",
    },
  ];

  const BUTTONS = [
    {
      text: "Sign Up",
      onClick: () => alert("Sign Up Clicked!"),
      extend: ["bordered"],
    },
    {
      text: "Log In",
      onClick: () => alert("Log In Clicked!"),
      extend: ["filled"],
    },
  ];

  const adJustNav = () => {
    const scrollTop = document.documentElement.scrollTop;
    const width = window.innerWidth;
    const goal = 100;
    const hamburgerShowGoal = 925;

    setScrollOver(scrollTop >= goal);
    setShow(width >= hamburgerShowGoal);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => adJustNav());

    adJustNav();
  }, []);

  return (
    <nav
      className={
        "main-navbar " +
        (scrollOver
          ? ""
          : matchPath("/", window.location.pathname)
          ? "large"
          : "")
      }
    >
      <div className="nav-contents">
        <div className="nav-left">
          <div className="left-contents">
            <div className="brand-name">
              <h1>AnimeBinge</h1>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div
            className={"nav-right-bg " + (show ? "show" : "")}
            onClick={() => setShow(false)}
          ></div>
          <div className={"nav-left-container " + (show ? "show" : "")}>
            <div className="right-contents">
              <div className="links">
                {LINKS.map(({ text, path }) => (
                  <div className="nav-link">
                    <a href={path}>
                      <span>{text}</span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="buttons">
                {BUTTONS.map(({ text, onClick, extend = [] }) => (
                  <div
                    className={
                      "button " +
                      (extend.length ? extend.join(" ").toString() : "")
                    }
                    onClick={onClick}
                  >
                    <div className="text">
                      <span>{text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hamburger-container">
            <div className="hamburger" onClick={() => setShow(!show)}>
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
