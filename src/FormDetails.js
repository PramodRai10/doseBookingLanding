import React, { useState } from 'react';
import "./FormDetails.css";

function FormDetails(props) {

  const [data, setData] = useState({
    Name: '',
    Email: '',
    DOB: '',
    AadharId: undefined,
    Phone: '',
  })
 
  const { Name, Email, DOB, AadharId, Phone } = data;

  const handleChange = (e) => {
  
      setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/pramodrai/google_sheets/JNnueqGmEovoITnU?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[Name, Email, DOB, AadharId, Phone]])
      }
      );
      await response.json();
      setData({...data, Name: '', Email: '', DOB: '', AadharId: null, Phone: ''});
      props.hideFn(true);

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleFormSubmit} >
      <div className="formDetails">
        <h1> Certificate Details</h1>
        <hr />
        <div className="form">
          <div className="details">
            <h3>Email</h3>
            <p>(Certicate will be emailed to this ID)</p>
            <input type="email" name="Email" value={Email} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Aadhaar ID</h3>
            <input type="number" name="AadharId" value={AadharId} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Name</h3>
            <p>(As shown in Aadhar)</p>
            <input type="text" name="Name" value={Name} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Year of Birth</h3>
            <input type="date" name="DOB" value={DOB} onChange={handleChange} />
          </div>
          <div className="details">
            <h3>Phone number</h3>
            <input type="tel" name="Phone" value={Phone} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormDetails
