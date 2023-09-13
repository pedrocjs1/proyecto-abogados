import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../style/Tecnologies.css";

// Importa las imágenes
import nvidia from "../images/globant.png";
import gxGaming from "../images/globant.png";
import genius from "../images/globant.png";
import msi from "../images/globant.png";
import asus from "../images/globant.png";
import kingston from "../images/globant.png";
import intel from "../images/globant.png";
import amd from "../images/globant.png";
import evga from "../images/globant.png";
import hyperex from "../images/globant.png";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isWideScreen = window.innerWidth >= 1200;

  const titleCarouselAnimation = useSpring({
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

  const carosuelAnimation = useSpring({
    opacity: isWideScreen ? (inView ? 1 : 0) : 1,
    transform: isWideScreen
      ? inView
        ? "translateY(0)"
        : "translateY(-40px)"
      : "translateY(0)",
    delay: isWideScreen && inView ? 2000 : 0,
    config: { duration: isWideScreen ? 500 : 0 },
  });

  return (
    <section
      id="tecnologies"
      className="d-flex w-100 justify-content-center align-items-center  "
    >
      <div className="container-carousel flex-wrap">
        <div className="row flex-wrap">
          <div className="col-lg-12 d-flex align-items-center justify-content-center text-center flex-wrap">
            <animated.div style={titleCarouselAnimation}>
              <h2 className="carousel-heading flex-wrap" ref={ref}>
                Who We've Represented
              </h2>
              <h3 className="carousel-subheading text-muted mb-5">
                Trusted by Leading Companies
              </h3>
            </animated.div>
          </div>
        </div>
        <animated.div style={carosuelAnimation}>
          <div className="d-flex justify-content-center carousel-tec flex-wrap gap-3 srow text-center pb-5">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="d-flex carrr"
            >
              <SwiperSlide>
                <img
                  src={nvidia}
                  alt="Nvidia"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "20px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={gxGaming}
                  alt="Gx Gaming"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottoom: "20px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={genius}
                  alt="Genius"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={msi}
                  alt="MSI"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={asus}
                  alt="Asus"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={kingston}
                  alt="Kingston"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={intel}
                  alt="Intel"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={amd}
                  alt="AMD"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={evga}
                  alt="EVGA"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={hyperex}
                  alt="Hyperex"
                  style={{
                    height: "100px",
                    width: "auto",
                    marginBottom: "40px",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
