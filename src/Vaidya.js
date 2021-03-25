import React from "react";
import "./Vaidya.css";
import { Link } from "react-router-dom";

function Vaidya() {
  return (
    <div className="vaidya">
      <div className="vaidyaTop">
        <Link to="/" className="vaidyaTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="vaidyaBottom">
        <iframe
          title="vaidya"
          src="https://calendly.com/dose-booking/cb-vaidya?embed_domain=vaidya-appointment.dosebooking.com&amp;embed_type=Inline&amp;hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Vaidya;
