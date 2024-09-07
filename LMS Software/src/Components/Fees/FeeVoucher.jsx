import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const feeData = [

  {
    class: 'Class 1',
    monthlyFee: 500,
    yearlyFee: 6000,
  },
  {
    class: 'Class 2',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 3',
    monthlyFee: 700,
    yearlyFee: 8400,
  },
  {
    class: 'Class 4',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 5',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 6',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 7',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 8',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 9',
    monthlyFee: 600,
    yearlyFee: 7200,
  },
  {
    class: 'Class 10',
    monthlyFee: 600,
    yearlyFee: 7200,
  },

];



const FeeVouchers = () => {
    const navigate = useNavigate();
  const handlePayNow = (className) => {
    alert(`Pay Now clicked for ${className}`);
    navigate(`/feeSubmission`, { state: { className } }); 
    // Add payment logic here
  };

  return (
    <div style={{ marginLeft: '240px', padding: '20px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Fees Vouchers
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {feeData.map((fee, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card style={{ borderRadius: '15px', padding: '20px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
              <CardContent>
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                  Fee Voucher - {fee.class}
                </Typography>
                <Divider style={{ marginBottom: '20px' }} />
                
                <Typography variant="body1" style={{ marginBottom: '10px' }}>
                  <strong>Class:</strong> {fee.class}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '10px' }}>
                  <strong>Monthly Fee:</strong> Rs:{fee.monthlyFee}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '10px' }}>
                  <strong>Yearly Fee:</strong> Rs:{fee.yearlyFee}
                </Typography>

                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handlePayNow(fee.class)}
                  style={{ marginTop: '15px' }}
                >
                  Pay Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeeVouchers;

