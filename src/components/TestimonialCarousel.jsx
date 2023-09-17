import React from "react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import cincoEstrellas from "../images/estrellas.png";
import fondoHeader from "../images/fondo-header-def.jpg";
import "../style/TestimonialCarousel.css";

SwiperCore.use([Pagination, Autoplay]);

const TestimonialCarousel = () => {
  const testimonials = [
    {
      testimonio:
        "I was absolutely impressed with responsiveness and professionalism  that I got from every employee during my case with Keithston Law.",
      nombre: "Justin P",
    },
    {
      testimonio:
        "THIS PLACE IS TRULY THE BEST! The ATTORNEYS ARE AMAZING  AND ARE WILLING TO HELP... IF I COULD RATE THEM MORE THAN 5 STARS I WOULD!",
      nombre: "David G",
    },
    {
      testimonio:
        "Keithston Law delivered a grand slam, if you want to win big, then use this law firm and follow the advice they give you.",
      nombre: "Santiago R",
    },
  ];

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
      >
        {testimonials.map((testimonio, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{ background: `url(${fondoHeader})` }}
              className="carousel-slide"
            >
              <img
                src={cincoEstrellas}
                alt="5 Estrellas"
                className="star-image"
              />
              <p className="testimonial-text">{testimonio.testimonio}</p>
              <h5>{testimonio.nombre}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
