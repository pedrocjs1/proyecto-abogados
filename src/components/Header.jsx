import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Header.css";


function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500); 
  }, []);

  return (
    <header id="inicio" className={loaded ? "ilawyer-page-loaded" : ""}>
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">
            {Array.from(
              "El bufete de abogados donde nuestros clientes siempre son lo primero"
            ).map((char, index) =>
              char === " " ? (
                <span key={index} className="ilawyer-space">
                  &nbsp;
                </span>
              ) : (
                <span key={index} className="ilawyer-char sloganH">
                  {char}
                </span>
              )
            )}
          </div>
          <div className="intro-heading">
            <div className="container-char">
              <div className="oneGroup">
                {Array.from("Está protegido").map((char, index) =>
                  char === " " ? (
                    <span key={index} className="ilawyer-space">
                      &nbsp;
                    </span>
                  ) : (
                    <span key={index} className="ilawyer-char">
                      {char}
                    </span>
                  )
                )}
              </div>
              <div className="Twogroup">
                {Array.from("por la manada").map((char, index) =>
                  char === " " ? (
                    <span key={index} className="ilawyer-space">
                      &nbsp;
                    </span>
                  ) : (
                    <span key={index} className="ilawyer-char">
                      {char}
                    </span>
                  )
                )}
              </div>
              
            </div>
            
          </div>
          <a
            
            className="page-scroll text-white btn btn-xl background"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar Cv
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
