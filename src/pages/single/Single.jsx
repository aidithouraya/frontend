import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Sidebar from '../../component/sidebar/Sidebar'
import './single.css'
import { Navigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const Single = () => {
  const [user, setUser] = useState('User')
  const [email, setEmail] = useState('Email')
  const [role, setRole] = useState('')
  const [currPass, setCurrPass] = useState('')
  const [password, setPassword] = useState('')
  const [color, setColor] = useState('')
  const [status, setStatus] = useState('')
  const { userID } = useParams()

  function getUserData() {
    console.log('🚀 ~ Single ~ userID:', userID)
    newRequest
      .get(`/user/${userID}`)
      .then(res => {
        const initUserDetails = res.data.user
        setUser(initUserDetails.username)
        setEmail(initUserDetails.email)
        setRole(initUserDetails.role)
      })
      .catch(err => console.log(err))

    return () => {}
  }
  function handleSubmit(e) {
    e.preventDefault()
    let body = {
      username: user,
      email: email,
      role: role
    }
    if (currPass && password) {
      body.currPass = currPass
      body.password = password
    }
    const config = { headers: { 'Content-Type': 'application/json' } }

    newRequest
      .put(`/user/${userID}`, body, config)
      .then(res => {
        setColor('green')
        setStatus(res.data.message)
      })
      .catch(res => {
        setColor('red')
        setStatus(res.response.data.message)
      })
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className='home'>
      <Sidebar />

      <div className='homeContainer'>
        <form className='form-container' onSubmit={handleSubmit}>
          <h2>Update User Details</h2>
          <div className='form-group'>
            {color && (
              <p id='messagebox' className={color}>
                {status}
              </p>
            )}

            <label htmlFor='username' className='form-label'>
              Username:
            </label>
            <input
              type='text'
              className='form-input'
              id='username'
              name='username'
              value={user}
              onChange={e => setUser(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              type='email'
              className='form-input'
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='role' className='form-label'>
              Role:
            </label>
            <select
              className='form-select'
              id='role'
              name='role'
              value={role}
              onChange={e => setRole(e.target.value)}
              required
            >
              <option value=''>Select Role</option>
              <option value='admin'>Admin</option>
              <option value='supervisor'>Supervisor</option>
              <option value='engineer'>Engineer</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='currentPassword' className='form-label'>
              Current Password:
            </label>
            <input
              type='password'
              className='form-input'
              id='currentPassword'
              name='currentPassword'
              value={currPass}
              onChange={e => setCurrPass(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='newPassword' className='form-label'>
              New Password:
            </label>
            <input
              minLength={8}
              type='password'
              className='form-input'
              id='newPassword'
              name='newPassword'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' className='submit-button'>
            Update User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Single
