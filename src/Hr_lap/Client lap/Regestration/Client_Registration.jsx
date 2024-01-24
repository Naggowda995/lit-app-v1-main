import React from "react";
import './Client_Registration.css';

export default function Client_Registration() {
  return (
    <div className="Register-form">
      <h4>Client Registration</h4>

      {/* Section: Registration */}
      <div className="form-section">
        <table>
          <tbody>
            <tr>
              <td><strong>Client_ID</strong></td>
              <td><input type="text" name="clientId" id="clientId" /></td>
            </tr>

            <tr>
              <td><strong>Date</strong></td>
              <td><input type="date" name="date" id="date" /></td>
            </tr>

            <tr>
              <td><strong>Client_NAME</strong></td>
              <td><input type="text" name="clientName" id="clientName" /></td>
            </tr>

            <tr>
              <td><strong>Website</strong></td>
              <td><input type="text" name="website" id="website" /></td>
            </tr>

            <tr>
              <td><strong>Contact_Person</strong></td>
              <td><input type="text" name="contactPerson" id="contactPerson" /></td>
            </tr>

            <tr>
              <td><strong>Contact_No</strong></td>
              <td><input type="number" name="contactNo" id="contactNo" /></td>
            </tr>

            <tr>
              <td><strong>Email_id</strong></td>
              <td><input type="text" name="emailId" id="emailId" /></td>
            </tr>

            <tr>
              <td><strong>Meeting_Time</strong></td>
              <td><input type="time" name="meetingTime" id="meetingTime" /></td>
            </tr>

            <tr>
              <td><strong>Who_involved</strong></td>
              <td><input type="text" name="whoInvolved" id="whoInvolved" /></td>
            </tr>

            <tr>
              <td><strong>Remarks</strong></td>
              <td><input type="text" name="remarks" id="remarks" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}