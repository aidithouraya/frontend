import React, { useState } from 'react'

function Form({ CompteurIoT }) {
  const [formData, setFormData] = useState({
    idslave: '',
    created_at: '',
    Flame_Data: '',
    Fuel_Level: '',
    Generator_State: '',
    frequency: '',
    Charger_State: '',
    Battery_Voltage: '',
    Phase_Current: '',
    Coolant_Level: '',
    frequency: '',
    Coolant_Température: '',
    Phasevoltage: '',
    Coolant_Viscosity: '',
    Smoke_Data: '',
    Door_Data: '',
    humidity: '',
    temperature_Data: '',
    State_Sys: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    CompteurIoT(formData)
  }

  return (
    <div>
      <div className='form-group'>
        <label>id-slave:</label>
        <input
          type='number'
          className='form-control'
          name='idslave'
          value={formData.idslave}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>created_at:</label>
        <input
          type='datetime-local'
          className='form-control'
          name='created_at'
          value={formData.created_at}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-group'>
        <label>Flame_Data:</label>
        <input
          type='number'
          className='form-control'
          name='Flame_Data'
          value={formData.Flame_Data}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Fuel_level:</label>
        <input
          type='number'
          className='form-control'
          name='Fuel_level'
          value={formData.Fuel_level}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Generator_State:</label>
        <input
          type='number'
          className='form-control'
          name='Generator_State'
          value={formData.Generator_State}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>frequency:</label>
        <input
          type='number'
          className='form-control'
          name='frequency'
          value={formData.frequency}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Charger_state:</label>
        <input
          type='number'
          className='form-control'
          name='Charger_state'
          value={formData.Charger_state}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Battery_Voltage:</label>
        <input
          type='number'
          className='form-control'
          name='Battery_Voltage'
          value={formData.Battery_Voltage}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Phase_Current:</label>
        <input
          type='number'
          className='form-control'
          name='Phase_Current'
          value={formData.Phase_Current}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Coolant_Level:</label>
        <input
          type='number'
          className='form-control'
          name='Coolant_Level'
          value={formData.Coolant_Level}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Frequency:</label>
        <input
          type='number'
          className='form-control'
          name='Frequency'
          value={formData.Frequency}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Coolant_Tempeatur:</label>
        <input
          type='number'
          className='form-control'
          name='Coolant_Tempeatur'
          value={formData.Coolant_Tempeatur}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Phase_Voltage:</label>
        <input
          type='number'
          className='form-control'
          name='Phase_Voltage'
          value={formData.Phase_Voltage}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Coolant_Viscosity:</label>
        <input
          type='number'
          className='form-control'
          name='Coolant_Viscosity'
          value={formData.Coolant_Viscosity}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Smoke_Data:</label>
        <input
          type='number'
          className='form-control'
          name='Smoke_Data'
          value={formData.Smoke_Data}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Door_Data:</label>
        <input
          type='number'
          className='form-control'
          name='Door_Data'
          value={formData.Door_Data}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Humidity:</label>
        <input
          type='number'
          className='form-control'
          name='Humidity'
          value={formData.Humidity}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>Temperatur_Data:</label>
        <input
          type='number'
          className='form-control'
          name='Temperatur_Data'
          value={formData.Temperatur_Data}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label>State_Sys:</label>
        <input
          type='number'
          className='form-control'
          name='State_Sys'
          value={formData.State_Sys}
          onChange={handleChange}
        />
      </div>
     
    </div>
  )
}

export default Form
