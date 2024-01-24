import React, { useState } from 'react';
import './Client_Search.css'; // Corrected import statement for CSS

const Client_Search = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleInputChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  const handleSearch = () => {
    // Call your API to fetch data based on criteria
    // For demonstration purposes, using static data
    const data = [
      // Your data array
      { S_no: 1, id: '001', name: 'Dhana', phone: '123457891', date: '17 Jan 2024', web: 'sunil.private limited.com', cotactPerson: 'Gopal', emailId: 'dhana1@gmail.com', meetingTime: '2:30pm', whoInvolved: 'manish', remarks: 'na' },
       {  S_no:2,id:'002', name: 'kamal', phone: '9879803212' ,date:'25 Feb 2024',web:'pavan.private limited.com',cotactPerson:'Gopal',emailId:'kamal12@gmail.com',meetingTime:'2:30pm',whoInvolved:'manish',remarks:'na'},
      {  S_no:3,id:'003', name: 'Madhu', phone: '9876543214',date:'30 March 2024',web:'anil.private limited.com',cotactPerson:'Gopal',emailId:'Madhu1@gmail.com',meetingTime:'2:30pm',whoInvolved:'janani',remarks:'na'},
      {  S_no:4,id:'004', name: 'Kalyani', phone: '9871233212',date:'03 May 2024',web:'bramma.private limited.com',cotactPerson:'Gopal',emailId:'Kalyani1@gmail.com',meetingTime:'2:30pm',whoInvolved:'manish',remarks:'na' },
      {  S_no:5,id:'005', name: 'Ramesh', phone: '9876543243',date:'25 July 2024',web:'tej.private limited.com',cotactPerson:'Gopal',emailId:'Ramesh1@gmail.com',meetingTime:'2:30pm',whoInvolved:'malini',remarks:'na'},
      {  S_no:6,id:'006', name: 'Shaker', phone: '9873453267',date:'30 Aug 2024',web:'thiru.private limited.com',cotactPerson:'Gopal',emailId:'Shaker@gmail.com',meetingTime:'2:30pm',whoInvolved:'manish',remarks:'na' },
    ];

    // Filter data based on the provided criteria
    const filteredData = data.filter(
      (item) =>
        (!searchCriteria ||
          item.id.toString().includes(searchCriteria) ||
          item.name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
          item.phone.includes(searchCriteria))
    );

    setSearchResults(filteredData);
    setIsTableVisible(true); // Show the table after clicking the search symbol
  };

  return (
    <div className="search-page-container">
      <h1>Client Search </h1>

      <div className="search-bar-container">
        <div className={`search-input-container ${isTableVisible ? 'hidden' : ''}`}>
          <input
            type="text"
            id="searchInput"
            value={searchCriteria}
            onChange={handleInputChange}
            placeholder="Search by Client ID/Client Name/Phone No"
          />
          <span className="search-symbol" onClick={handleSearch}>
            &#128269; {/* Unicode for magnifying glass */}
          </span>
        </div>
      </div>

      {isTableVisible && (
        <table className="result-table">
          <thead>
            <tr>
              <th>S No</th>
              <th>Client ID</th>
              <th>Client Name</th>
              <th>Phone Number</th>
              <th>Date</th>
              <th>Website</th> {/* Corrected attribute name */}
              <th>Contact Person</th>
              <th>Email Id</th>
              <th>Meeting Time</th>
              <th>Who Involved</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item) => (
              <tr key={item.S_no}>
                <td>{item.S_no}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.date}</td>
                <td>{item.web}</td>
                <td>{item.cotactPerson}</td>
                <td>{item.emailId}</td>
                <td>{item.meetingTime}</td>
                <td>{item.whoInvolved}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Client_Search;
