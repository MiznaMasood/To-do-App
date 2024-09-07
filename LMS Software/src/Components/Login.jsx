import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Config/Firebase'; // Ensure this path is correct based on your project structure
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google'; // Import Google Icon

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate('/'); // Navigate to the home page or dashboard after successful login
      })
      .catch((error) => {
        console.log(error.message); // You can display this error message on the UI if needed
      });
  };

  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user); // You can handle the user data as needed
        navigate('/dashboard'); // Navigate to the home page or dashboard after successful Google login
      })
      .catch((error) => {
        console.log(error.message); // You can display this error message on the UI if needed
      });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '100px' }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          padding: '20px',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />
        <Button onClick={handleLogin} type="button" variant="contained" color="primary" fullWidth>
          Login
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
      </Box>
    </Container>
  );
};

export default Login;







