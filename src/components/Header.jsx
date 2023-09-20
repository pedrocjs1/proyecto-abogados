import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Header.css";
import { useSpring, animated } from "react-spring";

function Header() {
  const isWideScreen = window.innerWidth >= 1200;

  const h1Animation = useSpring({
    clipPath: isWideScreen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 0%)",
    transform: isWideScreen ? "translateY(0)" : "translateY(0)",
    delay: isWideScreen ? 500 : 0,
    from: isWideScreen
      ? { clipPath: "inset(0% 100% 0% 0%)", transform: "translateY(40px)" }
      : { clipPath: "inset(0% 0% 0% 0%)", transform: "translateY(0)" },
    config: { duration: isWideScreen ? 1000 : 0 },
  });

  const h2Animation = useSpring({
    opacity: isWideScreen ? 1 : 1,
    transform: isWideScreen ? "translateY(0)" : "translateY(0)",
    delay: isWideScreen ? 2000 : 0,
    from: isWideScreen
      ? { opacity: 0, transform: "translateY(-40px)" }
      : { opacity: 1, transform: "translateY(0)" },
    config: { duration: isWideScreen ? 500 : 0 },
  });

  const buttonAnimation = useSpring({
    opacity: isWideScreen ? 1 : 1,
    transform: isWideScreen ? "translateY(0)" : "translateY(0)",
    delay: isWideScreen ? 2000 : 0,
    from: isWideScreen
      ? { opacity: 0, transform: "translateY(40px)" }
      : { opacity: 1, transform: "translateY(0)" },
    config: { duration: isWideScreen ? 500 : 0 },
  });

  return (
    <header id="inicio">
      <div className="intro-text d-flex w-100 h-100 flex-column justify-content-center align-items-center gap-3">
        <animated.div style={h2Animation} className="intro-lead-ina">
          <h2>The law firm where our Clients always come first</h2>
        </animated.div>
        <animated.div style={h1Animation} className="intro-headinga">
          <div className="container-char">
            <h1>Be protected</h1>
            <h1>by the herd</h1>
          </div>
        </animated.div>
        <animated.a
          style={buttonAnimation}
          className="btn-consult"
          href="#contact"
        >
          click for free consultation
        </animated.a>
      </div>
    </header>
  );
}

export default Header;
