import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'; // Import Google Icon
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Config/Firebase'; // Make sure the Firebase config is correctly imported
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate('/'); // Navigate to the home page or dashboard after successful signup
      })
      .catch((error) => {
        console.log(error.message); // Handle error (e.g., display error message on the UI)
      });
  };

  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user); // Handle the user data as needed
        navigate('/dashboard'); // Navigate to the home page or dashboard after successful Google signup
      })
      .catch((error) => {
        console.log(error.message); // Handle error (e.g., display error message on the UI)
      });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '50px' }}>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 2,
          padding: '20px',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px'
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
        <Button 
          onClick={handleGoogleSignup} 
          variant="outlined" 
          color="secondary" 
          fullWidth
          sx={{ marginTop: 2 }}
          startIcon={<GoogleIcon />} // Google Icon added here
        >
          Continue with Google
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
          Already have an account?{' '}
          <Link href="/login" color="primary">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signup;












