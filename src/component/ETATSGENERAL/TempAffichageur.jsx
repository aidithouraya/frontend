import React from 'react'
import './TempAffichageur.scss'
const TempAffichageur = () => {
  return (
    <div className='TempAffichageur'>
      <div className='partTempAffichageur'>
        <img src='/images/s5ana.png' alt='' />
        <p> 0°C</p>
        <p>0°C</p>
      </div>
      <div className='partTempAffichageur'>
        <img src='/images/compmi.png' alt='' />
        <p>0 %</p>
        <p>0 %</p>
      </div>
      <div className='partTempAffichageur'>
        <img src='/images/nar.png' alt='' />
        <p>0 ppm</p>
        <p>0 ppm</p>
      </div>
    </div>
  )
}

export default TempAffichageur
