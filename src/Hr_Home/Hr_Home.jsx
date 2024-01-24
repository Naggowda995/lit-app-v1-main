// import Empdetails from "../Hr management/employee/Empdetails"
import "../Hr_Home/Hr_Home.css"
import Navbar from "../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"
import Employee_Management from "../employee lap/management/Employee_Management"
import Registration from "../employee lap/register/Registration"

export default function Hr(){
    return(
        <div className="home">
            <Navbar />
           
            <div className="Home_partition">
                <div className="sidebar">
                    <SideBar/>
                </div>
                {/* <div className="home_screen">
                     <h2>Welcome to Home</h2> 
                    <Empdetails/>
                </div> */}
            </div>
        </div>
    )
}