import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Stack from "@mui/material/Stack";
import '../components/BillForm.css';


const Form = ({ onSubmit, formData }) => {

  const Navigate = useNavigate()
  const location = useLocation()
 
  const firstName = location.state?.firstName || '';
  const lastName = location.state?.lastName || '';
  const address = location.state?.address || '';
  const hospitalName= location.state?.hospitalName || '';
  const dateOfService = location.state?.dateOfService || new Date();
  const billAmount = location.state?.billAmount || '';
  const uploadBill = location.state?.uploadBill || null;

  const [formValues, setFormValues] = useState({
    firstName: firstName,
    lastName: lastName,
    address: address,
    hospitalName: hospitalName,
    dateOfService: dateOfService,
    billAmount: billAmount,
    uploadBill: uploadBill
  });
  

  useEffect(() => {
    if (formData) {
      setFormValues(formData);
    }
  }, [formData]);

  const handleInputChange = (event) => {
    console.log(formValues);
    console.log(event);
    const { name, value } = event.target || event;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value
    }));
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      picture: file
    }));
  };

  const handleDate = (date) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      dateOfService: date.toISOString()
    }));
  }

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       picture: file
//     }));
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues)
    Navigate('/summary', {state: {firstName: formValues.firstName, lastName: formValues.lastName, address: formValues.address,
    hospitalName:formValues.hospitalName, dateOfService: formValues.dateOfService, billAmount: formValues.billAmount, uploadBill:formValues.uploadBill}} )
    //onSubmit(formValues);
  };

  return (
    <Box display='flex' flexDirection='column'  marginLeft={10}>
      <h2>Patient Details</h2>
      {/* <form onSubmit={handleSubmit} display='flex' flex> */}
        {/* Form inputs */}
        {/* <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={formValues.patientName}
          onChange={handleInputChange}
        /> */}
        <form onSubmit={handleSubmit} className='formLabel' style={{display:'flex', width:'50%',marginBottom:'10px'}}>
        <TextField label="FirstName" variant="outlined" type="text"
          id="firstName"
          name="firstName"
          required
          value={formValues.firstName}
          onChange={handleInputChange}
          sx={{ marginBottom:'10px'}}/>

        <TextField label="LastName" variant="outlined" type="text" sx={{ marginTop:'20px'}}
          id="lastName"
          name="lastName"
          required
          value={formValues.lastName}
          onChange={handleInputChange}/> 

        <TextField
          id="filled-multiline-static"
          label="Address"
          name="address"
          required
          value={formValues.address}
          onChange={handleInputChange}
          multiline
          rows={4}
          variant="filled"
          sx={{ marginTop:'20px'}}
        />
        
        <TextField id="outlined-basic" label="Hospital Name" variant="outlined" name='hospitalName'  value={formValues.hospitalName}
         required onChange={handleInputChange} sx={{ marginTop:'20px'}}/>
        
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']} sx={{ marginTop:'20px'}}>
        <DatePicker label="Date of Service" name="dateOfService"  value={dayjs(formValues.dateOfService)}
           onChange={handleDate} required/>
      </DemoContainer>
    </LocalizationProvider>

    <TextField type='number' label='Bill Amount' sx={{ marginTop:'20px'}}
    InputProps={{
      startAdornment: (<InputAdornment position='start'>$</InputAdornment>)
    }} name="billAmount"  value={formValues.billAmount}
    onChange={handleInputChange} required
    />

    <Stack direction="row" alignItems="center" spacing={2} sx={{ marginTop:'20px'}}>
      <Button variant="contained" component="label">
        Upload Bill
        <input hidden accept="image/*" multiple type="file" name="uploadBill"  value={formValues.uploadBill} onChange={handleInputChange} required/>
      </Button>
    </Stack>

      {/* <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl> */}

      


        {/* Other form inputs... */}

        <Button variant="contained"  type='submit'
        sx ={{width:'30%', marginTop:'10px'}}>Submit</Button>
        {/* <button type="submit">Submit</button> */}
      {/* </form> */}
      </form>
      </Box>
  );
};

export default Form;
