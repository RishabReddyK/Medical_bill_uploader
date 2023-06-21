import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import "./../App.css"
const Home = (props) => {
  const [bills, setBills] = useState([]);
  const location = useLocation()
  const [formValues, setFormValues] = useState([]);
  // Function to handle adding a new bill
  const handleAddBill = (newBill) => {
    setBills((prevBills) => [...prevBills, newBill]);
  };
  useEffect(() => {
    console.log(3,location.state)
    if (location.state.firstName) {
        console.log(1)
        setFormValues((prevFormValues) => ([
            ...prevFormValues,
            location.state
        ]));
    }
    console.log(2, bills.length)
    props.setBillData((prevFormValues) => ([
        ...prevFormValues,
        location.state
    ]));
    console.log("props.billData")
    console.log(props.billData)
    
  }, []);

  return (
    <div className='main'>
      <h2>Medical Bill Uploader </h2>
      <Link to="/form">Add New Bill</Link>
      
      
      {props.billData.length > 0 ? (
        <div>
          <h3>Uploaded Bills</h3>
          <ul>
            {props.billData.map((bill, index) => (
              <div className='patient'>
                <h1 key={index}>{bill.firstName},{bill.lastName}</h1>
                <p key={index}>Address:{bill.address}</p>
                <p key={index}>Date of Service:{bill.dateOfService}</p>
                <p key={index}>Bill Amount:{bill.billAmount}</p>
                <p key={index}>Hospital Name:{bill.hospitalName}</p>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>no bills</p>
      )}
    </div>
  );
};

export default Home;
