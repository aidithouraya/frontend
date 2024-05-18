import React, { useState } from 'react'
import './Rapport.scss'

const Rapport = () => {
  const [rapport, setRapport] = useState('')

  const handleInputChange = e => {
    setRapport(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Logique pour enregistrer le rapport
    console.log('Rapport enregistré:', rapport)
    // Réinitialisation du formulaire après l'enregistrement
    setRapport('')
  }

  return (
    <div className='rapport-container'>
      <h2>Enregistrer un rapport</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className='rapport-input'
          placeholder='Entrez votre rapport ici...'
          value={rapport}
          onChange={handleInputChange}
        />
        <button type='submit' className='submit-btn'>
          Enregistrer
        </button>
      </form>
    </div>
  )
}

export default Rapport
