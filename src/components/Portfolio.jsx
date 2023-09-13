import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Portfolio.css";
import grand from "../images/abuelos.jpg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Portfolio() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isWideScreen = window.innerWidth >= 1200;

  const h2Animation = useSpring({
    clipPath: isWideScreen
      ? inView
        ? "inset(0% 0% 0% 0%)"
        : "inset(0% 100% 0% 0%)"
      : "inset(0% 0% 0% 0%)",
    transform: isWideScreen
      ? inView
        ? "translateY(0)"
        : "translateY(40px)"
      : "translateY(0)",
    delay: isWideScreen && inView ? 500 : 0,
    config: { duration: isWideScreen ? 500 : 0 },
  });

  const h3Animation = useSpring({
    opacity: isWideScreen ? (inView ? 1 : 0) : 1,
    transform: isWideScreen
      ? inView
        ? "translateY(0)"
        : "translateY(-40px)"
      : "translateY(0)",
    delay: isWideScreen && inView ? 2000 : 0,
    config: { duration: isWideScreen ? 300 : 0 },
  });

  return (
    <section id="about">
      <div className="container-port">
        <div className="row">
          <div className="col-lg-12 text-center d-flex flex-column w-100 justify-content-center justify-content-center align-items-center">
            <animated.div style={h2Animation}>
              <div className=" text-center img-grand move-up" ref={ref}>
                <img src={grand} alt="" />
              </div>
            </animated.div>
          </div>
        </div>
        <div className="d-flex w-100 gap-3 text-start justify-content-around section-text text-white flex-column">
          <animated.div style={h2Animation}>
            <h2 className="text-about ">Get to know BigHorn Law</h2>
          </animated.div>
          <div className="line-p"></div>

          <animated.div style={h3Animation}>
            <p className="parraf-text">
              An attorney can make or break a case based on how the case is
              documented, developed, and positioned for insurance companies and
              juries. At Bighorn Law, we make sure that nothing is missed in
              your case and our results prove it. With more than a dozen
              attorneys and decades of experience, our knowledge translates to
              more cases won, higher settlements, and happier clients. We
              implement a team approach so that all of our clients benefit from
              our firm’s collective knowledge, experience, and successes.
            </p>
            <p className="parraf-text">
              It’s no surprise Bighorn Law was named in the Top 100 personal
              injury attorneys in the nation in 2020. If you need an attorney,
              let us put our experience and resources to work for you.
            </p>
          </animated.div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-center aling-items-center  margintop">
        <TestimonialCarousel />
      </div>
    </section>
  );
}
