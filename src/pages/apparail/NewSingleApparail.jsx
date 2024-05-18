import React, { useEffect, useState } from 'react'
import Armoir from './composant/armoir'
import CompteurIoT from './composant/CompteurIoT'
import Transformteur from './composant/Transformteur'
import newRequest from '../../utils/newRequest'
import Sidebar from '../../component/sidebar/Sidebar'

export default function NewSingleApparail({ role }) {
  const accessToken = localStorage.getItem('accessToken')
  const [typeData, setTypeData] = useState()
  const [formData, setFormData] = useState({
    idslave: '',
    device_name: '',
    manufacturer: '',
    location: '',
    description: '',
    typeDevice: '',
    selectedUser: '' // Ajout de l'état pour l'ID de l'utilisateur sélectionné
  })
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getAllusers = async () => {
      console.log(accessToken)
      const res = await newRequest.get('/user', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      console.log(res.data.users)
      setUsers(res.data.users)
    }
    getAllusers()
  }, [accessToken])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUserChange = e => {
    setFormData({ ...formData, selectedUser: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    newRequest
      .post('/app/add', { ...formData, device: { ...typeData } })
      .then(res => {
        console.log(res.data)
        alert('Votre appareil a été ajouté avec succès')
      })
      .catch(err => console.log(err))
  }

  const gouvernerats = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kébili',
    'Le Kef',
    'Mahdia',
    'La Manouba',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan'
  ]

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <form onSubmit={handleSubmit} className='p-3 m-3 '>
          <div className='form-group'>
            <label>User:</label>
            <select
              className='form-control'
              name='selectedUser'
              value={formData.selectedUser}
              onChange={handleUserChange}
              required
            >
              <option value=''>Select a user:</option>
              {users.map(user => (
                <option key={user._id} value={user._id}>
                  {user.username} ({user.email})
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label>Id Slave:</label>
            <input
              type='text'
              className='form-control'
              name='idslave'
              value={formData.idslave}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Device Name:</label>
            <input
              type='text'
              className='form-control'
              name='device_name'
              value={formData.device_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Manufacturer:</label>
            <input
              type='text'
              className='form-control'
              name='manufacturer'
              value={formData.manufacturer}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Location:</label>
            <select
              className='form-control'
              name='location'
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value=''>Select a governorate:</option>
              {gouvernerats.map(gouvernerat => (
                <option key={gouvernerat} value={gouvernerat}>
                  {gouvernerat}
                </option>
              ))}
            </select>
          </div>
          <div className='form-group'>
            <label>Description:</label>
            <input
              type='text'
              className='form-control'
              name='description'
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Type Device:</label>
            <select
              className='form-control'
              name='typeDevice'
              value={formData.typeDevice}
              onChange={handleChange}
              required
            >
              <option value=''>Select a device type</option>
              <option value='armoire'>cabinet</option>
              <option value='groupe'>generator set</option>
              <option value='transformateur'>transformer</option>
            </select>
          </div>
          {formData.typeDevice === 'armoire' ? (
            <Armoir FormArmoir={setTypeData} />
          ) : formData.typeDevice === 'groupe' ? (
            <CompteurIoT CompteurIoT={setTypeData} />
          ) : formData.typeDevice === 'transformateur' ? (
            <Transformteur Transformteur={setTypeData} />
          ) : null}
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
