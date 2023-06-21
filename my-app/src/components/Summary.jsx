import React from 'react';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Summary = ({ data,handleSave }) => {
  const location = useLocation();
  const Navigate = useNavigate();

  const handleEdit = () => {
    console.log(location)
    // Navigate back to the form page with the existing form data
    Navigate('/form', {state: {firstName: location.state.firstName, lastName: location.state.lastName,
    address: location.state.address, hospitalName: location.state.hospitalName,
    dateOfService: location.state.dateOfService, billAmount: location.state.billAmount}})
    //  <Navigate to={{ pathname: '/form' }} />;
  };

  const handleSubmit = () => {
    Navigate('/', {state: {firstName: location.state.firstName, lastName: location.state.lastName,
      address: location.state.address, hospitalName: location.state.hospitalName,
      dateOfService: location.state.dateOfService, billAmount:location.state.billAmount,
      uploadBill: location.state.uploadBill}})
  }
  return (
    <div className='summary'>
      <div className='centered-div'>

      
        <h2>Information Summary</h2><br />
        <p><b>Name:</b>{location.state.firstName},{location.state.lastName}</p><br />
        <p><b>Address:</b>{location.state.address}</p>
        <p><b>Hospital Name:</b>{location.state.hospitalName}</p>
        <p><b>Date of Service:</b>{location.state.dateOfService}</p>
        <p><b>Bill Amount:</b>{location.state.billAmount}</p>
        <p><b>Picture:</b>{location.state.uploadBill}</p>
      {/* <h2>Summary Page</h2>
      <p>Patient Name: {data.patientName}</p>
      <p>Address: {data.address}</p>
      <p>Hospital Name: {data.hospitalName}</p>
      <p>Date of Service: {data.dateOfService}</p>
      <p>Bill Amount: {data.billAmount}</p> */}
    <div className='button'>
    <Button variant="contained" onClick={handleSubmit} 
        sx ={{width:'30%', marginTop:'10px'}}>Submit</Button>

    <Button variant="contained" onClick={handleEdit} 
        sx ={{width:'30%', marginTop:'10px'}}>Edit</Button>
    </div>
      {/* <button onClick={handleEdit}>Edit</button>

      <button onClick={handleSubmit}>Submit</button> */}
      </div>
    </div>
  );
};

export default Summary;
