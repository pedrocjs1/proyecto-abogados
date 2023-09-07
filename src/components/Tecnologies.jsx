import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../style/Tecnologies.css'

// Importa las imágenes
import nvidia from '../images/globant.png';
import gxGaming from '../images/globant.png';
import genius from '../images/globant.png';
import msi from '../images/globant.png';
import asus from '../images/globant.png';
import kingston from '../images/globant.png';
import intel from '../images/globant.png';
import amd from '../images/globant.png';
import evga from '../images/globant.png';
import hyperex from '../images/globant.png';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
    return (
        <section id="tecnologies">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Who We've Represented</h2>
                <h3 className="section-subheading text-muted">Trusted by Leading Companies</h3>
              </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap gap-3 srow text-center">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    >
                    <SwiperSlide><img src={nvidia} alt="Nvidia" style={{ height: '100px', width: 'auto', marginBottom: '20px'}} /></SwiperSlide>
                    <SwiperSlide><img src={gxGaming} alt="Gx Gaming" style={{ height: '100px', width: 'auto', marginBottoom: '20px' }} /></SwiperSlide>
                    <SwiperSlide><img src={genius} alt="Genius" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                    <SwiperSlide><img src={msi} alt="MSI" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                    <SwiperSlide><img src={asus} alt="Asus" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                    <SwiperSlide><img src={kingston} alt="Kingston" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                    <SwiperSlide><img src={intel} alt="Intel" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                    <SwiperSlide><img src={amd} alt="AMD" style={{ height: '100px', width: 'auto', marginBottom: '40px'}} /></SwiperSlide>
                    <SwiperSlide><img src={evga} alt="EVGA" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                    <SwiperSlide><img src={hyperex} alt="Hyperex" style={{ height: '100px', width: 'auto', marginBottom: '40px' }} /></SwiperSlide>
                </Swiper>
            </div>
          </div>
        </section>
      );
}


