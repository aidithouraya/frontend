import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'

import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import {useNavigate} from 'react-router-dom'
import newRequest from '../../utils/newRequest'

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <span color='inherit'>Dash</span> {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function SignInSide() {
  const [EmailError, setEmailError] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async event => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log('email is : ', email)
    try {
      const response = await newRequest.post('/verify', {email})
      if (response.status === 200) {
        // Redirect to /gode if email is found
        navigate('/newpass');
    } else {
        console.log('User not found or other status received:', response.status);
    }
    } catch (error) {
      console.log("haw l error ", error)
      console.log(error.message)
    }
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
    if (e.target.validity.valid) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(src/assets/logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box padding={2}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Forget Password
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={handleEmailChange}
                error={EmailError}
                helperText={EmailError ? 'Please enter your email adresse' : ''}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='/login' variant='body2'>
                    Login
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
