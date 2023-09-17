import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Practice.css";
import accident from "../images/accident-work.jpg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Practice() {
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
    <section id="practice">
      <div className="container-practice">
        <div className="row">
          <div className="col-lg-12 text-center d-flex flex-column w-100 justify-content-center content-img-title align-items-center ">
            <animated.div style={h2Animation}>
              <h2 className="text-practice ">If you were hurt, we can help</h2>
            </animated.div>
          </div>
        </div>
        <div className="d-flex w-100 gap-3 text-start justify-content-around section-text-practice text-white flex-column">
          <animated.div style={h2Animation}>
            <div className=" text-center img-practice" ref={ref}>
              <img src={accident} alt="" />
            </div>
          </animated.div>
          <div className="section-only-text">
            <div className="line-p-practice"></div>

            <animated.div style={h3Animation}>
              <h2 className="h2-text-practice">
                If you or a loved one have been seriously injured in a
                preventable accident or on the job, the attorneys at Bighorn Law
                can help.
              </h2>
              <p className="parraf-text-practice">
                A serious injury can dramatically affect your life, leaving you
                unable to work, saddled with significant medical expenses, and
                facing the prospect of temporary or permanent disability. You
                need an experienced advocate on your side. At Bighorn Law, we
                have dedicated our practice to helping those who have been
                injured in Las Vegas and throughout Nevada get their lives back
                on track. We can help you fight for the compensation you are
                entitled to.
              </p>
              <p className="parraf-text-practice">
                Best of all, we don’t charge any upfront or out-of-pocket fees
                for our service. Our team will handle every aspect of your case,
                while you focus on what matters – your health and your family.
                If you have suffered a serious injury in Nevada, please, contact
                an attorney at Bighorn Law as soon as you are able. We offer a
                free and confidential case evaluation and are ready to listen to
                your story and help ease your burden.
              </p>
            </animated.div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center aling-items-center  margintop-practice">
        <div className="w-100 d-flex justify-content-center">
          <h2 id="section-nine-title">PRACTICE AREAS</h2>
        </div>
        <ul id="section-nine-pa-list">
          <li>
            <a href="">Personal injury</a>
          </li>
          <li>
            <a href="">Workers' compensation</a>
          </li>
          <li>
            <a href="">Elder abuse</a>
          </li>
          <li>
            <a href="">Drug & medical lawsuits</a>
          </li>
          <li>
            <a href="">Litigation</a>
          </li>
          <li>
            <a href="">Wrongful Death</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
