import React, { useState } from 'react'
import './navbar.scss'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import MessageIcon from '@mui/icons-material/Message'
import SegmentIcon from '@mui/icons-material/Segment'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationButton from '../Notifications/notificationButton.jsx'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  // États locaux pour suivre si les notifications et les messages sont activés
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [messagesEnabled, setMessagesEnabled] = useState(false)

  // Gestionnaires d'événements pour basculer les états des notifications et des messages

  const toggleMessages = () => {
    setMessagesEnabled(!messagesEnabled)
  }
  const navigate = useNavigate()

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='items'>
          <div className='item'>
            <Brightness4Icon className='icon' />
          </div>
          <div className='item'>
            <NotificationButton />
            {notificationsEnabled && <div className='counter'>1</div>}
          </div>
          <div className='item'>
            <MessageIcon className='icon' onClick={toggleMessages} />
            {messagesEnabled && <div className='counter'>1</div>}
          </div>
          <div className='item'>
            <SegmentIcon className='icon' />
          </div>
          <div className='item' onClick={()=>navigate('/profile')}>
            <AccountCircleIcon className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
