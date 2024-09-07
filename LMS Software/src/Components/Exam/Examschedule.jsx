import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const examData = [
  {
    class: 'Class 1',
    subject: 'Mathematics',
    date: '2024-08-15',
    startTime: '09:00 AM',
    endTime: '12:00 PM',
  },
  {
    class: 'Class 2',
    subject: 'English',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 3',
    subject: 'Science',
    date: '2024-08-17',
    startTime: '11:00 AM',
    endTime: '02:00 PM',
  },
  {
    class: 'Class 4',
    subject: 'Urdu',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 5',
    subject: 'Social Studies',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 6',
    subject: 'History',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 7',
    subject: 'Geography',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 8',
    subject: 'Chemistry',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 9',
    subject: 'Bio',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    class: 'Class 10',
    subject: 'Physics',
    date: '2024-08-16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  // Add more exams as needed
];

const ExamSchedule = () => {
  return (
    <div style={{ marginLeft: '240px', padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Exam Schedule
      </Typography>

      {examData.map((exam, index) => (
        <Card key={index} style={{ marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {exam.class} - {exam.subject}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  Date: {exam.date}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="body1">
                  Start Time: {exam.startTime} | End Time: {exam.endTime}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Button 
                  variant="contained" 
                  color="success" 
                  style={{ float: 'right' }}>
                  View Details
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ExamSchedule;
