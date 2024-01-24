import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Userinfo from "../Userinfo/Userinfo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";


export default function MyNavbar() {
  const [profilevisible, setProfileVisible] = useState(false);
  const navigate = useNavigate();
  


  function handleProfile() {
    setProfileVisible(!profilevisible);
  }

  function handleHrLap() {
    navigate("/home");
  }

  // function handleFresherManagement() {
  //   navigate("/fresher-management");
  // }

  // function handleExperienceManagement() {
  //   navigate("/experience-management");
  // }
  function handleSearch() {
    navigate("/search");
  }

  function handleManagement() {
    navigate("/management");
  }
  function handleEmployee() {
    // Handle navigation or other actions for the "Employee" dropdown
  }
  function handleRegistration() {
    navigate("/registration");
  }

  function handleEmployeeSearch() {
    navigate("/empsearch");
  }
  function handleEmployeeManagement() {
    navigate("/emp-management");
  }
  function handleVendor_registration() {
    navigate("/vendor-registration");
  }

  function handleClient_Registration() {
    navigate("/client-registration");
  }

  function handleClient_Search() {
    navigate("/client_search");
  }

  function handleClient_Management(){
    navigate("/client_management")
  }

  function handleFinance() {
    // Handle navigation or other actions for the "Finance" dropdown
  }

  function handleInternSearch(){
    navigate("/intern-search");
  }

  function handleInternManagement(){
    navigate("/intern-management");
  }

  function handleInternRegister(){
    navigate("/intern-register");
  }

  function handleFirstFloor() {
    navigate("/firstfloor");

  }
  function handleSecondFloor() {
    navigate("/secondfloor");
  }

  function handleitlap() {
    navigate("/itlap");
  }

  function handleITSearch(){
    navigate("/itsearch");
  }
   
  function handleITManagement(){
    navigate("/itmanagement")
  }

  // const redirectToHomePage = () => {
  //   history.push("/home"); // Replace "/" with the path of your home page
  // };
  return (
    <>
      <Navbar bg="" expand="lg">
        <Navbar.Brand onClick={handleHrLap}>
          <img src="image/LIT.jpg" alt="logo" className="img" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">

            {/* HR Lap dropdown */}
            <NavDropdown title="HR Lap" id="hr-lap-dropdown">
              <NavDropdown
                title="Vender Lap"
                id="vender-lap-dropdown"
                class="btn-group dropend" >
                <NavDropdown.Item href="#" onClick={handleVendor_registration}>Registration</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleSearch}> Search</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleManagement}>Management</NavDropdown.Item> 
              </NavDropdown>


              <NavDropdown
                title="Client Lap"
                id="client-lap-dropdown"
                class="btn-group dropend">
               <NavDropdown.Item href="#" onClick={handleClient_Registration}>Regestration</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleClient_Search}>Search</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleClient_Management}>Management</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Internship Lap"
                id="internship-lap-dropdown"
                class="btn-group dropend" >
                <NavDropdown.Item href="#" onClick={handleInternRegister} >Registration</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleInternSearch}>Search</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleInternManagement}>Management</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>

            {/* Employee Lap dropdown */}
            <NavDropdown title="Employee Lap" id="employee-lap-dropdown">
              <NavDropdown.Item href="#" onClick={handleRegistration}>
                Registration
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleEmployeeSearch} >Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleEmployeeManagement}>Management</NavDropdown.Item>
            </NavDropdown>

            {/* Finance Lap dropdown */}
            <NavDropdown title="Finance Lap" id="finance-lap-dropdown">
              <NavDropdown.Item href="#">Invoice Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invoice Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Invoice Management</NavDropdown.Item>
            </NavDropdown>


            {/* Asset Lap dropdown */}
            <NavDropdown title="Asset Lap" id="asset-lap-dropdown">
              

              <NavDropdown
                title="Asset Registration"
                id="asset-registration-dropdown"
                class="btn-group dropend" >
                <NavDropdown.Item href="#" onClick={handleFirstFloor}>1st Floor Assets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" onClick={handleSecondFloor}>2nd Floor Assets</NavDropdown.Item>      
              </NavDropdown>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#">Asset Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Asset Management</NavDropdown.Item>
            </NavDropdown>

            {/* Co-w lap dropdown */}
            <NavDropdown title="CO-W Lap" id="co-w-lap-dropdown">
              <NavDropdown.Item href="#">Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Management</NavDropdown.Item>
            </NavDropdown>

            {/* IT Lap dropdown */}
            <NavDropdown
              title="IT Recruitment Lap"
              id="IT-Recruitment-lap-dropdown"
            >
              <NavDropdown.Item href="#" onClick={handleitlap}>Registration</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleITSearch}>Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleITManagement}>Management</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Requirement"
              id="Requirement-dropdown"
            >
              <NavDropdown.Item href="#" >Add Requirement</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" >Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" >Management</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>


        
        <div className="userInfo">
          <FaUserCircle className="user_icon" onClick={handleProfile} />
        </div>
      </Navbar>
      <div className="usrlogo">{profilevisible && <Userinfo />}</div>
    </>
  );
}

