import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { RootState } from '../store/store';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Access auth state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch({ type: 'auth/login', payload: { username, password } });
    } catch (error) {
      setErrorMessage('Failed to login. Please try again.');
      console.error('Login error:', error);
    }
  };

  // Navigate to home when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-200 to-blue-500 overflow-hidden">
      <svg className="absolute inset-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="white" d="M0,128L30,128C60,128,120,128,180,138.7C240,149,300,171,360,192C420,213,480,235,540,250C600,265,660,273,720,272C780,272,840,256,900,250C960,245,1020,251,1080,245C1140,240,1200,224,1260,192C1320,160,1380,96,1410,64L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"></path>
      </svg>

      <form 
        className="bg-white bg-opacity-90 p-8 md:p-10 rounded-lg shadow-lg max-w-md w-full relative z-10"
        onSubmit={handleLogin}
      >
        <Typography variant="h5" className="text-center font-bold mb-6">
          Login
        </Typography>

        <TextField
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full mb-4"
          required
          fullWidth
        />
        <TextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4"
          required
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          className="w-full p-2 py-2 text-lg mb-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l"
        >
          Login
        </Button>

        {errorMessage && <Typography className="text-red-500 text-center">{errorMessage}</Typography>} {/* Error message */}

        <Typography variant="body2" align="center" className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create New Account
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default Login;
