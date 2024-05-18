import React, { useEffect, useState } from 'react'
import './profile.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import { decodeJwt } from '../../utils/getToken'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button
} from '@mui/material'
import Logo from '../../assets/logo.png'
import newRequest from '../../utils/newRequest'

const Profile = ({ currentUser }) => {
  const [details,setDetails] = useState({});
  const [UserId,setUserId] = useState('')  

  useEffect( ()=>{
    const token = localStorage.getItem('accessToken')
    if (token) {
      const decodedJwt =  decodeJwt(token)
      setUserId(decodedJwt.userId)
      newRequest.get(`/user/${decodedJwt.userId}`).then((res)=>{setDetails(res.data.user)})
       }

  },[])
  const handleChange = e => {
    // Mettre en œuvre la logique pour gérer les changements d'entrée ici
    console.log(e.target.value)
  }

  return (
    <>
      {currentUser && (
        <div className='profile'>
          <Sidebar />
          <div className='profileContainer ml-2 pt-2 mt-4'>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                  <Card>
                    <CardContent>
                      <div className='user-profile'>
                        <div className='user-avatar'>
                          <img src={Logo} alt=' Admin' className='logo' />
                        </div>
                        <Typography variant='h5' className='user-name'>
                          {' '}
                          User name:{' '}
                        </Typography>
                        <Typography variant='subtitle1' className='user-email'>
                          {' '}
                          {details.username}{' '}
                        </Typography>
                      </div>
                     
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Card>
                    <CardContent>
                      <Typography variant='h6' gutterBottom>
                        Personal Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <label> Email : 
                            <p>{details.email}</p>
                          </label>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <label> Role : 
                            <p>{details.role}</p>
                          </label>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <label> Etat : 
                            <p>{details.etat}</p>
                          </label>
                        </Grid>
                      </Grid>
                 
                      <Box sx={{ m: 2 }}>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Profile
