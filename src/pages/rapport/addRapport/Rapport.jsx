import React, { useState, useEffect } from 'react'
import './rapport.scss'
import Sidebar from '../../../component/sidebar/Sidebar'
import Navbar from '../../../component/navbar/Navbar'
import newRequest from '../../../utils/newRequest'

const Rapport = () => {
  const [rapport, setRapport] = useState('')
  const [message, setMessage] = useState('')
  const [devices, setDevices] = useState([])
  const [selectedDevice, setSelectedDevice] = useState('')

  const getAuthToken = () => localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await newRequest.get('/app', {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
            'Content-Type': 'application/json'
          }
        })
        const data = response?.data?.devices
        console.log('🚀 ~ fetchDevices ~ data:', data)
        setDevices(data)
        if (data && data.length > 0) {
          setSelectedDevice(data[0]._id) // Set the first device as the selected one initially
        }
      } catch (error) {
        console.error('Failed to fetch devices:', error)
      }
    }

    fetchDevices()
  }, [])

  const handleSelectDevice = event => {
    setSelectedDevice(event.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // Find the selected device details based on the selected ID
    const deviceDetails = devices.find(device => device._id === selectedDevice)

    const reportData = {
      deviceName: deviceDetails.device_name,
      deviceId: deviceDetails._id,
      userId: localStorage.getItem('userId'),
      rapport
    }

    try {
      const response = await newRequest.post('/rapport/add', reportData, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      })

      if (response.status === 201) {
        setMessage('Rapport saved successfully!!!')
        setRapport('') // Reset the rapport textarea after successful submission
      } else {
        setMessage('Rapport not saved.')
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'enregistrement du rapport:",
        error.message
      )
      setMessage("Erreur lors de l'envoi de la demande POST.")
    }
  }

  return (
    <div className='rapport'>
      <Sidebar />
      <div className='rapportContainer'>
        <Navbar />
        <div className='container'>
          <div className='card'>
            <div className='card-header'>
              <h6 className='card-title'>Save Rapport</h6>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <select
                    className='form-control'
                    value={selectedDevice}
                    onChange={handleSelectDevice}
                  >
                    {devices.map(device => (
                      <option key={device._id} value={device._id}>
                        {device.device_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='rapport' className='form-label'>
                    Rapport Content:
                  </label>
                  <textarea
                    className='form-control'
                    id='rapport'
                    placeholder='Leave a comment here'
                    style={{ height: '100px' }}
                    value={rapport}
                    onChange={e => setRapport(e.target.value)}
                  />
                </div>
                <button type='submit' className='btn btn-success'>
                  Enregistrer
                </button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rapport
