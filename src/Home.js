import React from "react";
import "./Home.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="home">
      <div className="homeTop">
        <h1>
          <div className="logo"></div>
          DoseBooking.com
        </h1>
      </div>
      <div className="homeMiddle">
        <div className="homeMiddle-left">
          <h2>Welcome to DoseBooking.com</h2>
          <p>
            This a vaccination booking portal where you can keep tract of your vaccination process.
            Three easy steps to get yourself vaccinated.
          </p>
          <div className="buttonGroup">
            <button onClick={handleClick}>Book Appointment</button>

            <button>Certificate</button>
          </div>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/hospitals" className="linkButton">
              <MenuItem onClick={handleClose}>Starcity Hospital</MenuItem>
            </Link>

            {/* <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
        </div>
        <div className="homeImage"></div>
      </div>
      <div className="homeBottom">
        <h1>Steps to follow:</h1>
        <div className="cardRow">
          <div className="homeCard">
            <div className="bookIt"></div>
            <h3>Book it</h3>
            <p>Book an appointment through our website.</p>
            <br />
            <p>आमच्या वेबसाइटच्या माध्यमातून अपॉइंटमेंट बुक करा.</p>
          </div>
          <div className="homeCard">
            <div className="attend-it"></div>
            <h3>Attend it</h3>
            <p>Attend the event of taking vaccine by going to the hospital.</p>
            <br />
            <p>हॉस्पिटलमध्ये जाऊन लस घेण्याच्या कार्यक्रमाला उपस्थित राहा.</p>
          </div>
          <div className="homeCard">
            <div className="vaccinated"></div>
            <h3>vaccinated</h3>
            <p>Get vaccinated at your booked date.</p>
            <br />
            <p>तुमच्या बुक केलेल्या तारखेला लस घ्या.</p>
          </div>
        </div>
      </div>
      <div className="youtube">
        <h1>video tutorial</h1>
        <hr />
        <iframe
          title="video-Tutorial"
          width="760"
          height="415"
          src="https://www.youtube.com/embed/_iq-fy4Kpx4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="benefits">
        <h1>Benefits For Hospitals</h1>

        <ul>
          <li>Crowd control and management.</li>
          <li>Reduce no show with prior payments</li>
          <li>Data compliance(keep evidence in digital record).</li>
          <li>
            Fully managed data entry in cowin portal, delivering certificates to the recipients(via
            email).
          </li>
          <li>Generation daily reports required by Maharastra government.</li>
        </ul>
      </div>
      <div className="benefits">
        <h1>Benefits For Patients</h1>
        <ul>
          <li>Priority Queue(Need to come on time).</li>
          <li>Spend less time at the centre.</li>
          <li>No extra charges.</li>
        </ul>
      </div>
      <div className="footer">
        <div className="footerTop">
          <h1>
            <div className="logo"></div>
            DoseBooking.com
          </h1>
        </div>
        <div className="footerBottom">
          <div className="footerBottom-left">
            <p>Designed with ❤️ by Qualyval Team</p>
          </div>
          <div className="footerBottom-right">
            <h4>Hospital details</h4>
             <p>Starcity Hospital</p>
             <p>Chakki Naka, Kalyan East, 421306</p>
             <p>Phone:9082274680</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
