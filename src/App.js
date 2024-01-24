//import Assets from "./Assets/Assets";
import Forget_Password from "./Forget_Password/Forget_Password";
// import Empdetails from "./Hr management/employee/Empdetails";
import Hr from "./Hr_Home/Hr_Home";
import Client_Registration from "./Hr_lap/Client lap/Regestration/Client_Registration";
import Client_Management from "./Hr_lap/Client lap/clientmanagement/Client_Management";
import Client_Search from "./Hr_lap/Client lap/clientsearch/Client_Search";
import Management from "./Hr_lap/Vender lap/Management/Management";
import Vender_registration from "./Hr_lap/Vender lap/Registration/Vender_registration";
import Vendor_Search from "./Hr_lap/Vender lap/Search/Vendor_Search";
import Internship_Management from "./Internship_lap/Management_lap/Internship_Management";
import Internship_Register from "./Internship_lap/Register_lap/Internship_Register";
import Internship_Search from "./Internship_lap/Search_lap/Internship_Search";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Userinfo from "./Userinfo/Userinfo";

import FirstFloor from "./assets lap/assetregistration/1stfloor/FirstFloor";
import SecondFloor from "./assets lap/assetregistration/2ndfloor/SecondndFloor";
import Employee_Management from "./employee lap/management/Employee_Management";
import Registration from "./employee lap/register/Registration";
import Employee_search from "./employee lap/search/Employee_search";
import ITSearch from "./it_lap/it_lap_Search/ITSearch";
import ITManagement from "./it_lap/it_lap_management/ITManagement";
import ITRegistration from "./it_lap/it_lap_registration/ITRegistration";
import Main from "./main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">
    //   <Main/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/signUp" element={<Main/>}/>
      <Route path="/home" element={<Hr/>}/>
      <Route path="/Forget_Password" element={<Forget_Password/>}/>

      <Route path="/home/userinfo" element={<Userinfo/>}/>
      <Route path="/registration" element={<Registration/>}/>
     
      <Route path="/firstfloor" element={<FirstFloor/>}/>
      <Route path="/secondfloor" element={<SecondFloor/>}/>
      <Route path="/vendor-registration" element={<Vender_registration/>}/>
      <Route path="/itlap" element={<ITRegistration/>}/>
      <Route path="/client-registration" element={<Client_Registration/>}/>
      <Route path="/search" element={<Vendor_Search/>}/>
      <Route path="/intern-search" element={<Internship_Search/>}/>
      <Route path="/intern-management" element={<Internship_Management/>}/>
      <Route path="/itsearch" element={<ITSearch/>}/>
      <Route path="/itmanagement" element={<ITManagement/>}/>
      <Route path="/client_search" element={<Client_Search/>}/>
      <Route path="/client_management" element={<Client_Management/>}/>
      <Route path="/empsearch" element={<Employee_search/>}/>
      <Route path="/management" element={<Management/>}/>
      <Route path="/intern-register" element={<Internship_Register/>}/>
      <Route path="/emp-management" element={<Employee_Management/>}/>


    </Routes>
    </BrowserRouter>
  );
}
export default App;
