import React from 'react'
import CompDate from '../CompDate/CompDate'
import EtatDeCribleJF from './EtatDeCribleJF'
import TempAffichageur from './TempAffichageur'

const ETATSGENERAL = ({ title }) => {
  return (
    <div className='SectionOne'>
      <h1> {title} </h1>
      <div>
        <CompDate />

        <div>
          <EtatDeCribleJF title={'Etat de crible JF 100'} />
          <EtatDeCribleJF title={'Etat de Broyeur WB100'} />
          <TempAffichageur />
        </div>
      </div>
    </div>
  )
}

export default ETATSGENERAL
