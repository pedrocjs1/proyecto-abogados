import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../style/Contant.css";
import { send, init } from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const Swal = require("sweetalert2");

  useEffect(() => {
    init("nTXaQ2Lg9vkjyoBHt");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !lastname ||
      !phone ||
      !email ||
      !msg ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      Swal.fire({
        title: "Error!",
        text: "Por favor complete todos los campos.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    send("service_c37lbu8", "template_q0o8sz5", {
      from_name: email,
      to_name: name,
      message: msg,
      phone_number: phone,
      email_user: email,
    });
    setName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMsg("");
    Swal.fire({
      title: "Correo enviado!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <section id="contact" className="p-4">
      <div className="container-contact">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading-contant">FREE CONSULTATION</h2>
            <h3 className="section-subheading contact-subtitle ">
              Talk To A Person About Your Case Today. Were Ready To Fight For
              You.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="">
                <div className="input-group-personal">
                  <div className="group-form-one">
                    <div className="form-group">
                      <input
                        value={name}
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        id="name"
                        required
                        data-validation-required-message="Please enter your name."
                        onChange={(event) => setName(event.target.value)}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group">
                      <input
                        value={lastname}
                        type="text"
                        className="form-control"
                        placeholder="Your LastName *"
                        id="lastname"
                        required
                        data-validation-required-message="Please enter your name."
                        onChange={(event) => setLastName(event.target.value)}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="group-form-two">
                    <div className="form-group">
                      <input
                        value={phone}
                        type="tel"
                        pattern="^(\+?[0-9]*)$"
                        className="form-control"
                        placeholder="Your Phone *"
                        id="phone"
                        required
                        data-validation-required-message="Please enter your phone."
                        onInput={(event) => {
                          const value = event.target.value;
                          if (!/^(\+?[0-9]*)$/.test(value)) {
                            event.target.setCustomValidity(
                              "Only numbers and a starting + are allowed."
                            );
                          } else {
                            event.target.setCustomValidity("");
                            setPhone(value);
                          }
                        }}
                      />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="form-group w-100">
                      <input
                        value={email}
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        id="email"
                        required
                        data-validation-required-message="Please enter your email address."
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    value={msg}
                    className="form-control"
                    placeholder="Your Message *"
                    id="message"
                    required
                    data-validation-required-message="Please enter a message."
                    onChange={(event) => setMsg(event.target.value)}
                  />
                  <p className="help-block text-danger" />
                </div>

                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-send btn-xl"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
