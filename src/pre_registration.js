import React from "react";
import "./pre_registration.css";
import { Link } from "react-router-dom";

function PreRegistration() {

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
            <div className="buttonGroup2">
                <div className="booking">
                    <div className="bookingButton">
                        <div className="bookingButton-left">
                            <a href="https://shravan-vaccination.netlify.app/" className="linkButton10">
                                <button>SHRAVAN Hospital</button>
                            </a>
                            <a href="https://ncp-vaccination.netlify.app/" className="linkButton10">
                                <button>NCP Hospital</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PreRegistration;
