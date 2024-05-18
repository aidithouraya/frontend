import React from 'react'

const PartieEtat = ({ etat, dataDis }) => {
  return (
    <div>
      <div className='part'>
        <p> {etat} </p>

        <div className='divSpan'>
          <span>{dataDis} </span>
        </div>
      </div>
    </div>
  )
}

export default PartieEtat
