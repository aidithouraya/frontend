import React, { useState } from 'react';
import './new.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from '@mui/material';
import newRequest from '../../utils/newRequest';
import { Navigate } from 'react-router-dom';

const New = ({ role }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    email: '',
    etat: ''
  });
  const [error, setError] = useState(null);
  const [usernameError, setUsernameError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'username') {
      setUsernameError(''); // Clear the error when user starts typing again
    }
  };

  const checkUsername = async () => {
    try {
      const res = await newRequest.post('/user/check-username', { username: formData.username });
      return res.data.exists;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Check if the username is unique
    const isUsernameTaken = await checkUsername();
    if (isUsernameTaken) {
      setUsernameError('Username already exists');
      return;
    }

    try {
      const res = await newRequest.post('/user/add', formData);
      if (res.data && res.data.msg) {
        alert(res.data.msg);
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        const errorMessage = err.response.data.error;
        if (err.response.status === 401 && errorMessage === 'Unauthorized: Invalid access token') {
          setError(errorMessage);
          alert(errorMessage); // Display the error message in an alert
        } else if (errorMessage) {
          setError(errorMessage);
          alert(errorMessage); // Display the error message in an alert
        } else {
          setError('An unexpected error occurred');
          alert('An unexpected error occurred');
        }
      } else {
        setError('An unexpected error occurred');
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      {role === 'admin' ? (
        <div className='addUser'>
          <Sidebar />
          <div className='userContainer ml-2 pt-2 mt-4'>
            <Box sx={{ maxWidth: 800, p: 2, m: 2 }}>
              <h5>Add new user</h5>
              <form className='inputAddUSer' onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label='Nom utilisateur'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                  error={!!usernameError}
                  helperText={usernameError}
                />
                <TextField
                  fullWidth
                  type='password'
                  label='Mot de passe'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FormControl fullWidth required>
                  <InputLabel className='RoleInput'>Rôle</InputLabel>
                  <Select
                    value={formData.role}
                    onChange={handleChange}
                    name='role'
                  >
                    <MenuItem value='admin'>Administrateur</MenuItem>
                    <MenuItem value='supervisor'>Superviseur</MenuItem>
                    <MenuItem value='engineer'>Ingénieur</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  type='email'
                  label='Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FormControl fullWidth required>
                  <InputLabel className='EtatInput'>État</InputLabel>
                  <Select
                    value={formData.etat}
                    onChange={handleChange}
                    name='etat'
                  >
                    <MenuItem value='1'>Connecté</MenuItem>
                    <MenuItem value='0'>Non connecté</MenuItem>
                  </Select>
                </FormControl>
                <Button type='submit' variant='contained' sx={{ mt: 2 }}>
                  Ajouter l'utilisateur
                </Button>
              </form>
            </Box>
          </div>
        </div>
      ) : role === 'supervisor' ? (
        <Navigate to='/' replace />
      ) : (
        <Navigate to='/apparails' replace />
      )}
    </>
  );
};

export default New;