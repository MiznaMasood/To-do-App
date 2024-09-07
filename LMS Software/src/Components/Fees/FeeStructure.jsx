import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const FeeStructure = () => {
  const feeData = [
    { class: 'Class 1', monthlyFee: 500, yearlyFee: 6000 },
    { class: 'Class 2', monthlyFee: 600, yearlyFee: 7200 },
    { class: 'Class 3', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 4', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 5', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 6', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 7', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 8', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 9', monthlyFee: 700, yearlyFee: 8400 },
    { class: 'Class 10', monthlyFee: 700, yearlyFee: 8400 },
    // Add more clas8es as needed
  ]
  return (
    <div style={{ marginLeft: '240px', padding: '20px' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Fees Structure
      </Typography>
      <Grid container spacing={3}>
        {feeData.map((fee, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card style={{ borderRadius: '15px', boxShadow: '0 3px 6px rgba(0,0,0,0.1)' }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" style={{ textAlign: 'right' }}>
                  {fee.class}
                </Typography>
                <Typography variant="body1" style={{ color: 'green' }}>
                  Monthly Fee: <span style={{ float: 'right' }}>Rs:{fee.monthlyFee}</span>
                </Typography>
                <Typography variant="body1" style={{ color: 'green' }}>
                  Yearly Fee: <span style={{ float: 'right' }}>Rs:{fee.yearlyFee}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeeStructure;
