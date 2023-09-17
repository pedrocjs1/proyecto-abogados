import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="row d-flex justify-content-center flex-column w-100 footer-global">
          <div className="title-footer">
            <span className="ilawyer-text-gradient">Bighorn Has Your Back</span>
          </div>
          <div className="footer-group-container">
            <div className="footer-col">
              <span className="footer-subtitle">HeADQUARTERS</span>
              <address className="footer-address">
                3675 W Cheyenne Ave
                <br />
                Suite 100
                <br />
                North Las Vegas, NV 89032
              </address>
              <a
                class="get-directions"
                href="https://goo.gl/maps/Rgtz8MxyEn8ukPkSA"
                target="_blank"
                rel="noopener"
              >
                Get Directions{" "}
              </a>
              <a class="footer-phone" href="tel:+17023331111">
                <span>P</span> 702-333-1111
              </a>
            </div>
            <div class="footer-col">
              <span class="footer-subtitle">UTAH OFFICE</span>
              <address class="footer-address">
                2230 N University Parkway
                <br /> Suite 2C
                <br /> Provo, UT 84604
              </address>
              <a
                class="get-directions"
                href="https://goo.gl/maps/3pcty3jP2tF7xedt9"
                target="_blank"
                rel="noopener"
              >
                Get Directions{" "}
              </a>
              <a class="footer-phone" href="tel:+17023331111">
                <span>P</span> 702-333-1111
              </a>
            </div>
          </div>
          <div className="">
            <ul className="d-flex justify-content-center gap-2 social-buttons">
              <a href="https://github.com/pedrocjs1" target="_blank">
                <AiFillGithub style={{ fontSize: "3rem", color: "white" }} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-vega-72a7a8239/"
                target="_blank"
              >
                <AiFillLinkedin style={{ fontSize: "3rem", color: "white" }} />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
