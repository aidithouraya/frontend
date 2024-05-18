import React, { useState } from 'react'

function Form({ Transformteur }) {
  const [formData, setFormData] = useState({
    marque: '',
    modèle: '',
    puissance: '',
    tensionEntrée: '',
    tensionSortie: '',
    courantSortie: '',
    poids: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    Transformteur(formData)
  }

  return (
    <div>
      <div className='form-group'>
        <label>Brand</label>
        <input
          type='text'
          className='form-control'
          name='marque'
          value={formData.marque}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Model:</label>
        <input
          type='text'
          className='form-control'
          name='modèle'
          value={formData.modèle}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Power:</label>
        <input
          type='number'
          className='form-control'
          name='puissance'
          value={formData.puissance}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Input Voltage:</label>
        <input
          type='number'
          className='form-control'
          name='tensionEntrée'
          value={formData.tensionEntrée}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Output Voltage:</label>
        <input
          type='number'
          className='form-control'
          name='tensionSortie'
          value={formData.tensionSortie}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Output Current:</label>
        <input
          type='number'
          className='form-control'
          name='courantSortie'
          value={formData.courantSortie}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>weight:</label>
        <input
          type='number'
          className='form-control'
          name='poids'
          value={formData.poids}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  )
}

export default Form
