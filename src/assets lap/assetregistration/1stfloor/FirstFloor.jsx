import React, { useState } from "react";
import "./1stFloor.css";

export default function FirstFloor() {
  const [accordionState, setAccordionState] = useState({
    Chairs: false,
    Remote: false,
    Pedestals: false,
    AirConditioners: false,
    OtherAssets: false,
    Fans: false,
    Dustbins: false,
    Tables: false,
  });

  const toggleAccordion = (section) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="">
      <h2>1st Floor Assets</h2>
      {/* Section 1: chairs */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("chairs")}>
          {accordionState.chairs ? "1. Chairs  -" : "1. Chairs +"}
        </h6>
        {accordionState.chairs && (
          <table>
            <tr>
              <td>Normal Chairs</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Wheel Chairs:</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 2: Remote */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Remote")}>
          {accordionState.Remote ? "2. Remotes  -" : "2. Remotes +"}
        </h6>
        {accordionState.Remote && (
          <table>
            <tr>
              <td>AC Remotes:</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Fan Remotes:</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
          </table>
        )}
      </div>

      {/* Section 3: Pedestals */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Pedestals")}>
          {accordionState.Pedestals ? "3. Pedestals -" : "3. Pedestals+"}
        </h6>
        {accordionState.Pedestals && (
          <div>
            <input type="text" />
          </div>
        )}
      </div>
      {/* Section 4: AirConditioners */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("AirConditioners")}>
          {accordionState.AirConditioners
            ? "4. AirConditioners -"
            : "4. AirConditioners+"}
        </h6>
        {accordionState.AirConditioners && (
          <div>
            <input type="text" />
          </div>
        )}
      </div>
      {/* Section 5: OtherAssets */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("OtherAssets")}>
          {accordionState.OtherAssets
            ? "5. OtherAssets  -"
            : "5. OtherAssets +"}
        </h6>
        {accordionState.OtherAssets && (
          <table>
            <tr>
              <td>Laptops</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Mouses:</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Chargers</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>Bags</td>
              <td>
                <input type="text" name="" id="" />
              </td>
            </tr>
          </table>
        )}
      </div>
      {/* Section 6: Fans */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Fans")}>
          {accordionState.Fans ? "6. Fans -" : "6. Fans+"}
        </h6>
        {accordionState.Fans && (
          <div>
            <input type="text" />
          </div>
        )}
      </div>
      {/* Section 7: Dustbins */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Dustbins")}>
          {accordionState.Dustbins ? "7. Dustbins -" : "7. Dustbins+"}
        </h6>
        {accordionState.Dustbins && (
          <div>
            <input type="text" />
          </div>
        )}
      </div>
      {/* Section 8: Tables */}
      <div className="form-section">
        <h6 onClick={() => toggleAccordion("Tables")}>
          {accordionState.Tables ? "8. Tables -" : "8. Tables+"}
        </h6>
        {accordionState.Tables && (
          <div>
            <input type="text" />
          </div>
        )}
      </div>
    </div>
  );
}
