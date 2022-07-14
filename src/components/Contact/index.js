import { useState, useRef, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import Modal from "../ModalSuccess";
import ModalFailed from "../ModalFailed";
import AnimatedLetter from "../AnimatedLetters";
import emailjs from "@emailjs/browser";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [openModal, setOpenModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState();

  const form = useRef();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    setValue(() => "");
    emailjs
      .sendForm(
        "service_7io2c6p",
        "template_is08rb6",
        form.current,
        "SyDgSPi0hUyp4LOjs"
      )
      .then(
        () => {
          setTimeout(() => {
            setOpenModal(true);
            setLoader(false);
            setTimeout(() => {
              setOpenModal(false);
            }, 10000);
          }, 2000);
        },
        () => {
          setTimeout(() => {
            setOpenErrorModal(true);
            setLoader(false);
            setTimeout(() => {
              setOpenErrorModal(false);
            }, 10000);
          }, 2000);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance oppurtunities - specially ambitious or
            large projects. However, if you have other request or question,
            don't hasitate to contact me using below form either
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    value={value}
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    value={value}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    value={value}
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    value={value}
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <button
                    disabled={loader === true}
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  >
                    {loader && (
                      <i
                        style={{ marginRight: 10 }}
                        className="fa fa-spinner fa-spin"
                      ></i>
                    )}
                    SEND
                  </button>
                </li>
              </ul>
            </form>
            {openModal && (
              <Modal
                closeModal={setOpenModal}
                modalTitle={"Thank you for sending a Message"}
                modalBody={"Your message is successfully sent"}
              />
            )}
            {openErrorModal && (
              <ModalFailed
                closeModal={setOpenErrorModal}
                modalTitle={"Failed to Deliver"}
                modalBody={"We are having a problem on sending your message"}
              />
            )}
          </div>
        </div>
        <div className="info-map">
          Richmond Ramil,
          <br />
          Philippines
          <br />
          Barangay Carino, Santan Street <br />
          Paniqui Tarlac <br />
          <span>toro.richmond.ramil@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[15.6466, 120.58935]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[15.6466, 120.58935]}>
              <Popup>Richmond lives here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
