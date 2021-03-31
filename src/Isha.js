import React from "react";
import { Link } from "react-router-dom";
import "./Isha.css";

function Isha() {
  return (
    <div className="isha">
      <div className="ishaTop">
        <Link to="/" className="ishaTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="ishaBottom">
        <iframe
          title="isha"
          src="https://calendly.com/dose-booking/isha-hospital?hide_gdpr_banner=1"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Isha;
