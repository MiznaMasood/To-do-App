import React, { useState } from 'react';
import { TextField, Button, MenuItem, InputAdornment, IconButton } from '@mui/material';
import style from './FeeSubmissionForm.module.css';

const FeeSubmissionForm = () => {
  const [paymentFor, setPaymentFor] = useState('');
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ paymentFor, name, className, amount, paymentMethod });
  };

  return (
    <div className={style.formContainer}>
      <h2>Fee Submission Form</h2>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Payment for"
          fullWidth
          margin="normal"
          placeholder="Enter purpose of payment"
          value={paymentFor}
          onChange={(e) => setPaymentFor(e.target.value)}
        />
        
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <TextField
          label="Class"
          fullWidth
          margin="normal"
          placeholder="Enter class"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        
        <TextField
          label="Amount"
          type="number"
          fullWidth
          margin="normal"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        
        <TextField
          label="Payment Method"
          select
          fullWidth
          margin="normal"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <MenuItem value="creditCard">Credit Card</MenuItem>
          <MenuItem value="debitCard">Debit Card</MenuItem>
          <MenuItem value="paypal">PayPal</MenuItem>
          <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
        </TextField>

        <Button variant="contained" color="primary" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FeeSubmissionForm;
