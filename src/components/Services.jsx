import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../style/App.css';


export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Servicios</h2>
            <h3 className="section-subheading text-muted">Mis Servicios</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 srow text-center">
          <div className="card card-edit p-3">
            <img  className="card-img-top" alt="FrontEnd" />
            <div className="card-body">
              <p className="card-text text-break style-p">Desarrollo FrontEnd</p>
            </div>
          </div>
          <div className="card card-edit p-3" >
            <img  className="card-img-top" alt="BackEnd" />
            <div className="card-body">
              <p className="card-text text-break style-p">Desarrollo BackEnd</p>
            </div>
          </div>
          <div className="card card-edit p-3">
              <img  className="card-img-top" alt="BaseDeDatos" />
              <div className="card-body">
                <p className="card-text text-break style-p">Base de datos</p>
              </div>         
          </div>
          <div className="card card-edit p-3" >
            <img  className="card-img-top" alt="Ceo" />
            <div className="card-body">
              <p className="card-text style-p text-break"><span className='text-break'>Posicionamiento&nbsp;SEO</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

