import React from "react";
import "./Certificate.css";
import { Link } from "react-router-dom";

function Certificate() {
  return (
    <div className="certificate">
      <div className="certificateTop">
        <Link to="/" className="certificateTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </Link>
      </div>
      <div className="certificateBottom">
        <iframe
          title="certificate"
          src="https://airtable.com/embed/shrWb6W8lLJflCTf4?backgroundColor=yellow"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}

export default Certificate;
