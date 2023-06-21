import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/BillForm';
import Summary from './components/Summary';

const App = () => {
  const [billData, setBillData] = useState([]);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleEdit = () => {
    return <Navigate to="/form/add" state={{ formData }} />;
  };

  const handleSave=(formData) =>{
    setBillData((prevData) => [...prevData, formData]);
    console.log("save")
    setFormData(null);
  };

  const test=()=>{
    console.log("test");
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home billData={billData} setBillData={setBillData}/>} />
        <Route
          path="/form"
          element={
            formData ? (
              <Summary data={formData} onEdit={handleEdit} handleSave={handleSave} test={test} />
            ) : (
              <Form onSubmit={handleFormSubmit} />
            )
          }
        />
        <Route path='/summary' element={<Summary/>} />
      </Routes>
    </Router>
  );
};

export default App;
