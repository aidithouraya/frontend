import React, { useState, useContext } from 'react'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import NotificationBadge from './NotificationBadge'
import { NotificationContext } from '../../App'

import './NotificationButton.css'
const NotificationButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { notifications, setNotifications } = useContext(NotificationContext)
  const toggleNotifications = () => setIsOpen(!isOpen)
  return (
    <div className='notification-icon'>
      <NotificationsActiveIcon onClick={toggleNotifications} />
      {notifications.length > 0 && (
        <NotificationBadge count={notifications.length} />
      )}
      {notifications.length > 0 && isOpen && (
        <div className='notification-dropdown'>
          {/* Render list of notifications here */}
          {notifications.map(notification => (
            <div key={notification.id} className='notification'>
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NotificationButton
