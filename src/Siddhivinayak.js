import React from "react";
import { Link } from "react-router-dom";
import "./Siddhivinayak.css";

function Siddhivinayak() {
  return (
    <div className="siddhivinayak">
      <div className="siddhivinayakTop">
        <Link to="/" className="siddhivinayakTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="siddhivinayakBottom">
        <iframe
          title="siddhivinayak"
          src="https://calendly.com/dose-booking/siddhivinayak-hospital-vaccine-appointment-clone?embed_domain=siddhivinayak-appointment.dosebooking.com&amp;embed_type=Inline&amp;hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Siddhivinayak;
