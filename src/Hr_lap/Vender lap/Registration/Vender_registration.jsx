import React, { useState } from "react";
import "./Vender_registration.css";
 
export default function Vender_registration() {
  const [state, setState] = useState({
    vendor_register: false,
  });
 
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., send data to a server)
  };
 
  return (
<div className="Register-form">
<h3>Vendor Registration</h3>
 
      {/* Section: Registration */}
 
 
 <div className="form-section">
<form onSubmit={handleFormSubmit}>
 
<label htmlFor="vendorId">Vendor ID</label>
<input type="text" name="vendorId" id="vendorId" />
 
          <label htmlFor="vendorName">Vendor Name</label>
<input type="text" name="vendorName" id="vendorName" />
 
          <label htmlFor="rateCard">Rate Card</label>
<input type="text" name="rateCard" id="rateCard" />
 
          <label htmlFor="location">Location</label>
<input type="text" name="location" id="location" />
 
          <label htmlFor="jobType">Job Type</label>
<input type="text" name="jobType" id="jobType" />
 
          <label htmlFor="payRoll">Payroll</label>
<input type="text" name="payRoll" id="payRoll" />
 
          <label htmlFor="candidateName">Candidate Name</label>
<input type="text" name="candidateName" id="candidateName" />
 
          <label htmlFor="technology">Technology</label>
<input type="text" name="technology" id="technology" />
 
          <label htmlFor="years">Years</label>
<input type="text" name="years" id="years" />
 
          <label htmlFor="firstReviewed">First Reviewed</label>
<input type="text" name="firstReviewed" id="firstReviewed" />
 
          <label htmlFor="secondReviewed">Second Reviewed</label>
<input type="text" name="secondReviewed" id="secondReviewed" />
 
          <label htmlFor="cvFormat">CV Format</label>
<input type="text" name="cvFormat" id="cvFormat" />
 
          <button type="submit">Submit</button>
</form>
</div>
</div>
  );
}