import React, { useState } from 'react'

function FormArmoir({ FormArmoir }) {
  const [formData, setFormData] = useState({
    NOM_ARMR: '',
    ETAT_BP_AU: '',
    ETAT_SECTIONNEUR: '',
    ETAT_FUSIBLE: '',
    ETAT_DISJONCTEUR: '',
    ETAT_RELAIS: '',
    ETAT_KM1: '',
    ETAT_KM2: '',
    ETAT_CONTACT_AUXILIARE: '',
    TENSION_PHASE_1: '',
    TENSION_PHASE_2: '',
    TENSION_PHASE_3: '',
    COURANT_PHASE_1: '',
    COURANT_PHASE_2: '',
    COURANT_PHASE_3: '',
    FREQUENCE: '',
    HUMIDITE: '',
    TEMPERATURE: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    FormArmoir(formData)
  }

  return (
    <div>
      <div className='form-group'>
        <label>Name_Device:</label>
        <input
          type='text'
          className='form-control'
          name='NOM_ARMR'
          value={formData.NOM_ARMR}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>ETAT_BP_AU:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_BP_AU'
          value={formData.ETAT_BP_AU}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>disconnecting state:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_SECTIONNEUR'
          value={formData.ETAT_SECTIONNEUR}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>melting phase:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_FUSIBLE'
          value={formData.ETAT_FUSIBLE}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>circuit breaker state:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_DISJONCTEUR'
          value={formData.ETAT_DISJONCTEUR}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>relay state:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_RELAIS'
          value={formData.ETAT_RELAIS}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>state-KM1</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_KM1'
          value={formData.ETAT_KM1}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>State_KM2:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_KM2'
          value={formData.ETAT_KM2}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>state of auxiliary contact:</label>
        <input
          type='text'
          className='form-control'
          name='ETAT_CONTACT_AUXILIARE'
          value={formData.ETAT_CONTACT_AUXILIARE}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Phase 1 voltage:</label>
        <input
          type='text'
          className='form-control'
          name='TENSION_PHASE_1'
          value={formData.TENSION_PHASE_1}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Phase 2 voltage:</label>
        <input
          type='text'
          className='form-control'
          name='TENSION_PHASE_2'
          value={formData.TENSION_PHASE_2}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>PHASE_3 voltage:</label>
        <input
          type='text'
          className='form-control'
          name='TENSION_PHASE_3'
          value={formData.TENSION_PHASE_3}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Phase_1 current:</label>
        <input
          type='text'
          className='form-control'
          name='COURANT_PHASE_1'
          value={formData.COURANT_PHASE_1}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>PHASE_2 current:</label>
        <input
          type='text'
          className='form-control'
          name='COURANT_PHASE_2'
          value={formData.COURANT_PHASE_2}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>PHASE_3 current:</label>
        <input
          type='text'
          className='form-control'
          name='COURANT_PHASE_3'
          value={formData.COURANT_PHASE_3}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>FREQUENCy:</label>
        <input
          type='text'
          className='form-control'
          name='FREQUENCE'
          value={formData.FREQUENCE}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>humidity</label>
        <input
          type='text'
          className='form-control'
          name='HUMIDITE'
          value={formData.HUMIDITE}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>TEMPERATURE:</label>
        <input
          type='text'
          className='form-control'
          name='TEMPERATURE'
          value={formData.TEMPERATURE}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default FormArmoir
