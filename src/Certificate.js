import React, { useState } from "react";
import "./Certificate.css";
import { Link } from "react-router-dom";
import FormDetails from "./FormDetails";
import Thanks from "./Thanks";

function Certificate() {
  const [temp, setTemp] = useState(false);
  function hideFn(flag){
    setTemp(flag);
  }

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
        {!temp && <FormDetails hideFn={hideFn} />}
        {temp && <Thanks hideFn={hideFn} />}
      </div>
    </div>
  );
}

export default Certificate;
