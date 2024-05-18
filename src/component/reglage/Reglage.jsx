import React, { useState } from 'react'
import './reglage.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import newRequest from '../../utils/newRequest'

const Reglage = () => {
  const [nomAppareil, setNomAppareil] = useState('')
  const [idAppareil, setIdAppareil] = useState('')
  const [rapport, setRapport] = useState('')
  const [message, setMessage] = useState('')

  const getAuthToken = () => localStorage.getItem('accessToken')
  const getuserId = () => localStorage.getItem('userId')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(getuserId())

    // Construct the report object
    const reportData = {
      nomAppareil,
      idAppareil,
      userId: getuserId(),
      rapport
    }

    try {
      // Make the POST request
      const response = await newRequest.post('/reglage/add', reportData, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`,
          'Content-Type': 'application/json'
        }
      })

      // Check if the response is successful
      if (response.status === 201) {
        setMessage('Rapport saved successfuly!!!')
        // Reset the form fields after submission
        setNomAppareil('')
        setIdAppareil('')
        setRapport('')
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
    <div className='reglage'>
      <Sidebar />
      <div className='reglageContainer'>
        <Navbar />
        <div className='container'>
          <div className='card'>
            <div className='card-header'>
              <h6 className='card-title'>Save Rapport</h6>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor='nomAppareil' className='form-label'>
                    Nom Slave :
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='nomAppareil'
                    value={nomAppareil}
                    onChange={e => setNomAppareil(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='idAppareil' className='form-label'>
                    ID Slave :
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='idAppareil'
                    value={idAppareil}
                    onChange={e => setIdAppareil(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='rapport' className='form-label'>
                    Rapport :
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

export default Reglage
