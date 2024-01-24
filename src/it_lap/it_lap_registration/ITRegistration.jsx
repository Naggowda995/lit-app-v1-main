import React from 'react'
import "./ITRegistration.css"
import { useState } from 'react';

const ITRegistration = () => {
  const [accordionState, setAccordionState] = useState({
    candidateinfo: false,
    screeningDetails:false,
    interviewdetails:false,
    status:false,
    clientsidedetails:false
   
  });

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className='registration-form'>
      <h2>IT Recruitment Lap Registration</h2>
       <div className="form-section">
        <h4 onClick={() => toggleAccordion("candidateinfo")}>
          {accordionState.candidateinfo ? "Candidate Details -" : "Candidate Details +"}
        </h4>
        {accordionState.candidateinfo && (
          <table>
            <tr>
            <td>Name:</td>
            <td>
              <input type="text" name="" id="" />
            </td>
          </tr>
          <tr>    
            <td>Mobile Number:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Email Id:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Higher Degree:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Passout Year:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>College Name:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>University:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Present Location:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Referd by:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Source:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
          </table>
        )}
      </div>



      <div className="form-section">
        <h4 onClick={() => toggleAccordion("screeningDetails")}>
          {accordionState.screeningDetails ? "Screening Details -" : "Screening Details +"}
        </h4>
        {accordionState.screeningDetails && (
          <table>
            <tr>
            <td>Technology:</td>
            <td>
              <input type="text" name="" id="" />
            </td>
          </tr>
          <tr>    
            <td>C.T.C LPA:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Experience:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Expected CTC:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Current Location:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>Job Type:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
       
        </table>
        )}
      </div>


      <div className="form-section">
        <h4 onClick={() => toggleAccordion("interviewdetails")}>
          {accordionState.interviewdetails ? "Interview Details -" : "Interview Details +"}
        </h4>
        {accordionState.interviewdetails && (
          <table>
            <tr>
            <td>Interview Schedule:</td>
            <td>
              <input type="text" name="" id="" />
            </td>
          </tr>
          <tr>    
            <td>L1:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>L2:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>L3:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        <tr>
            <td>HR Round:</td>
            <td>
              <input type="text" name="" id="" />
            </td>
          </tr>
        </table>
        )}
      </div>


      <div className="form-section">
        <h4 onClick={() => toggleAccordion("status")}>
          {accordionState.status ? "Status -" : "Status +"}
        </h4>
        {accordionState.status && (
           <table>
           <tr>
           <td>Active:</td>
           <td>
             <input type="checkbox" name="" id="" />
           </td>
         </tr>
         <tr>    
           <td>In Active:</td>
           <td><input type="checkbox" name="" id="" /></td>
       </tr>
       
       </table>
        )}
      </div>


      <div className="form-section">
        <h4 onClick={() => toggleAccordion("clientsidedetails")}>
          {accordionState.clientsidedetails ? "Client Side Details -" : "Client Side Details +"}
        </h4>
        {accordionState.clientsidedetails && (
          <table>
            <tr>
            <td>Mobile Number:</td>
            <td>
              <input type="text" name="" id="" />
            </td>
          </tr>
          <tr>    
            <td>Email Id:</td>
            <td><input type="text" name="" id="" /></td>
        </tr>
        
        </table>
        )}
      </div>


    </div>
  )
}

export default ITRegistration
