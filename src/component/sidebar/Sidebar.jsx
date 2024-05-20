import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MapIcon from '@mui/icons-material/Map'
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BatchPrediction from '@mui/icons-material/BatchPrediction'

import TimelineIcon from '@mui/icons-material/Timeline'
import LogoutIcon from '@mui/icons-material/Logout'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { decodeJwt } from '../../utils/getToken'

const Sidebar = () => {
  const [role, setRole] = useState(null);
  const [isOpen,setIsOpen] = useState(false)
 
  useEffect(() => {
    let token = localStorage.getItem('accessToken')
    if (token) {
      let data = decodeJwt(token)
      console.log('accessToken', data)
      setRole(data.role)
    }

    return () => {}
  }, [])
  const handlesubmitLogout = () => {
    localStorage.removeItem('accessToken')
    document.cookies.remove('accessToken')
    document.cookies.remove('refreshToken')
  }
  return (
    <div className='sidebar'>
      <div className='top'>
        <img src={Logo} alt='mabench' className='logo' />
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Main</p>
          <li>
            <Link to='/' className='link'>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to='/predict' className='link'>
              <BatchPrediction className='icon' />
              <span>Predict</span>
            </Link>
          </li>
          <li>
            <Link to='/apparails/mes-appareils' className='link'>
              <AppSettingsAltIcon className='icon' />
              <span>My Devices</span>
            </Link>
          </li>
         
        

          <p className='title'>List</p>
          {role == 'admin' && (
            <li>
              <Link to='/users' className='link'>
                <PersonOutlineIcon className='icon' />
                <span>Users</span>
              </Link>
            </li>
          )}
          {role == 'engineer' && (
            <>
              
             
              <li>
                <Link to='/apparails/listeApparail' className='link'>
                  <AppSettingsAltIcon className='icon' />
                  <span>Devices List</span>
                </Link>
              </li>

              <li>
                <Link to='/rapport' className='link'>
                  <DisplaySettingsIcon className='icon' />
                  <span>Report</span>
                </Link>
              </li>
            </>
          )}
         
          <li>
            <Link to='/profile' className='link'>
              <AccountBoxIcon className='icon' />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <div   onClick={() =>setIsOpen(!isOpen)} >
            <LogoutIcon className='icon' />

            Logout
            {isOpen && <div className={`logout-confirmation ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <p>Are you sure you want to log out?</p>
        <button onClick={ ()=>setIsOpen(false)}>Cancel</button>
        <Link  onClick={()=>handlesubmitLogout()} to={'/login'}>Logout</Link>
       
      </div>
    </div>}
             </div>
           
            
             
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar
