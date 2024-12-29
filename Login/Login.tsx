import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Define the response type
interface LoginResponse {
  action: string;
  profile_data: {
    name: string;
    username: string;
    phone_no: string;
    user_id: number;
  };
  status: string;
}

export default function BasicTextFields() {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [usernames, setUsername] = React.useState('');
  const [passwords, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sending the GET request with username and password as query parameters
      const response = await axios.get<LoginResponse>('http://localhost:8080/UserAssetModel/login', {
        params: {
          username: usernames,
          password: passwords,
        },
        headers: {
            'Content-Type': 'application/json',  // Optional, depending on your server's needs
          },
      });

      if (response.data.status === "LoginSucess") {
        // Save the token or action returned from the backend
        localStorage.setItem('action', response.data.action);
        localStorage.setItem('user_data', JSON.stringify(response.data.profile_data));

        // Redirect to the next page (e.g., UsersList or Dashboard)
        navigate('/Pages/Home');
        alert('Login successful!');
      } else {
        setError('Invalid username or password');
      }
    } catch (err: any) {
      // Handle error cases (e.g., server not responding)
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            padding: 3,
            marginTop: 0,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ m: 1, width: '35ch' }}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            color="secondary"
            name="username"
            value={usernames}
            onChange={(e) => setUsername(e.target.value)}  // Directly updating username
          />
          <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={passwords}
              onChange={(e) => setPassword(e.target.value)}  // Directly updating password
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'hide password' : 'show password'}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button sx={{ m: 1, width: '35ch' }} variant="contained" onClick={handleLogin}>
            Login
          </Button>
          {error && <p>{error}</p>}
        </Box>
      </CardContent>
    </Card>
  );
}
