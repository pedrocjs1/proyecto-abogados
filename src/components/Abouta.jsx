import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Abouta.css";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Abouta() {
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
    config: { duration: isWideScreen ? 1000 : 0 },
  });

  const h3Animation = useSpring({
    opacity: isWideScreen ? (inView ? 1 : 0) : 1,
    transform: isWideScreen
      ? inView
        ? "translateY(0)"
        : "translateY(-40px)"
      : "translateY(0)",
    delay: isWideScreen && inView ? 1000 : 0,
    config: { duration: isWideScreen ? 500 : 0 },
  });

  return (
    <section id="abouta">
      <div className="containerab">
        <div className="row">
          <div className="col-lg-12 text-center jh2 d-flex flex-column w-100 justify-content-center justify-content-center align-items-center">
            <animated.div style={h2Animation}>
              <h2 className="section-headinga" ref={ref}>
                YOUR PERSONAL INJURY & WORKERS COMP LAWYERS
              </h2>
            </animated.div>
            <div className="container-subheadinga">
              <animated.div style={h3Animation}>
                <h3 className="section-subheadinga">
                  IF YOU NEED HELP – YOU NEED Keithston LAW. OUR ATTORNEYS HAVE
                  RECOVERED OVER $250 MILLION FOR OUR CLIENTS. WE’VE FOUGHT FOR
                  CLIENTS WHO WERE INJURED IN A WIDE RANGE OF SITUATIONS –
                  PERSONAL INJURY, WORKERS’ COMPENSATION, MEDICAL MALPRACTICE,
                  AND MUCH MORE. Keithston LAW HAS YOUR BACK IN ANY SCENARIO.
                </h3>
              </animated.div>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 gap-3 justify-content-around">
          <div className="d-flex  justify-content-center flex-wrap gap-3 container-abouta text-start ">
            <div className="w-100 gala ">
              <h2 className="text-abouta">
                Keithston Law is one of Nevada’s premier injury law firms. Our
                attorneys are among the nation’s best at fighting for the rights
                of the seriously injured.
              </h2>

              <p>
                Whether you have been injured in a motor vehicle collision, a
                work-related incident, or as a result of medical malpractice,
                our attorneys can help. We founded our firm with one goal in
                mind – to take care of our community. As attorneys, our mission
                is to fight for the everyday person and prevent insurance
                companies and corporations from taking advantage of them when
                they are at their most vulnerable.
              </p>
              <p>
                The unfortunate truth is that personal injury and workers’
                compensation claims can be complex and frustrating processes,
                especially when you are dealing with a serious injury and the
                financial fallout that it can create.
              </p>
              <p>
                Without proper legal representation, injury victims rarely find
                justice for what has happened to them. In fact, insurance
                companies are set up to pay as little as possible – or nothing
                at all – to claimants. This is where Keithston Law comes in.
              </p>
              <p>
                We’ve been through the process countless times and understand
                how insurance companies approach claims.
              </p>
              <p>
                Our attorneys work tirelessly to build strong cases for our
                clients and recover the compensation that they need both in the
                short term and in the future. Our approach gets results and the
                insurance companies know it. In fact, we have recovered over
                $250 million on behalf of our clients.
              </p>
              <h2 className="text-abouta">
                We Can Allow You To Focus on What’s Important
              </h2>
              <p>
                Part of our winning strategy is simply caring more about our
                clients and treating them with the respect they deserve.
                However, for us, it goes much further than that. If you choose
                Keithston Law to handle your case, you get access to a team of
                talented attorneys and our significant resources. This includes
                our comprehensive network of the best doctors, surgeons, and
                conservative treatment specialists available.
              </p>
              <p>
                We want our clients’ cases to be successful, but we also want to
                help them get better. Our entire process is focused on allowing
                clients to focus on recovery while we fight with the insurance
                companies and other people who will take advantage of you.
              </p>
              <h2>
                If you have been injured, call Keithston Law today for a free
                and confidential case evaluation.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
