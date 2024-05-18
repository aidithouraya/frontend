import React from 'react'
import './EtatDeCribleJF.scss'

const EtatDeCribleJF = ({ title }) => {
  return (
    <div className='EtatDeCrible'>
      <h1 className='titleEtat'> {title} </h1>
      <div className='etatP'>
        <p>Etat Normal</p>
        <p>Etat anormal</p>
        <p>Etat urgent</p>
      </div>
      <span className='spanEtat'></span>
    </div>
  )
}

export default EtatDeCribleJF
