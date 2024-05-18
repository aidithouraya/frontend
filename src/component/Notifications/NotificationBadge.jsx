import React from 'react'
import './NotificationBadge.css'

const NotificationBadge = ({ count }) => {
  return (
    <div className='notification-badge'>
      {count > 0 && <span>{count}</span>}
    </div>
  )
}

export default NotificationBadge
