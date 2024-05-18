import React from 'react'
import './PartieDisjoncteur.scss'
import PartieEtat from './PartieEtat'
const PartieDisjoncteur = ({ data }) => {
  const etatsOne = [
    'ETAT_DISJONCTEUR',
    'ETAT_SECTIONNEUR',
    'ETAT_FUSIBLE',
    'ETAT_BP_AU'
  ]
  const etatsTwo = ['ETAT_RELAIS', 'ETAT_KM1', 'ETAT_KM2', 'ETAT_RELAIS']

  return (
    <div className='PartieDisjoncteur'>
      <div className='allPartie'>
        <div>
          {etatsOne.map((etat, index) => (
            <PartieEtat
              key={index}
              etat={etat}
              dataDis={
                data &&
                Object.keys(data).map(item => {
                  if (item.includes(etat)) return data[item]
                })
              }
            />
          ))}
        </div>

        <div>
          {etatsTwo.map((etat, index) => (
            <PartieEtat
              key={index}
              etat={etat}
              dataDis={
                data &&
                Object.keys(data).map(item => {
                  if (item.includes(etat)) return data[item]
                })
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartieDisjoncteur
