import React, { useEffect, useState } from 'react';
import './profile.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import { decodeJwt } from '../../utils/getToken';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
} from '@mui/material';
import newRequest from '../../utils/newRequest';
import PersonIcon from '@mui/icons-material/Person';

const Profile = ({ currentUser }) => {
  const [details, setDetails] = useState({});
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedJwt = decodeJwt(token);
      setUserId(decodedJwt.userId);
      newRequest.get(`/user/${decodedJwt.userId}`).then((res) => {
        setDetails(res.data.user);
      });
    }
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        {currentUser && (
          <div className='profileContainer' style={{ marginTop: '4rem' }}>
            <Typography variant='h4' style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Personal Details
            </Typography>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              style={{ minHeight: 'calc(100vh - 300px)' }}
            >
              <Grid item xs={12} md={8}>
                <Card
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent>
                    <Box display='flex' justifyContent='center' mb={3}>
                      <Avatar
                        sx={{ bgcolor: 'black', width: 80, height: 80 }}
                      >
                        <PersonIcon sx={{ fontSize: 50 }} />
                      </Avatar>
                    </Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1'>
                          <strong>Name:</strong>
                          <p>{details.username}</p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1'>
                          <strong>Email:</strong>
                          <p>{details.email}</p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1'>
                          <strong>Role:</strong>
                          <p>{details.role}</p>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant='body1'>
                          <strong>State:</strong>
                          <p>{details.etat}</p>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
