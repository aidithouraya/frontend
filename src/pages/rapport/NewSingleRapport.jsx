import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import newRequest from '../utils/newRequest'

const RapportDetail = () => {
  const { id } = useParams()
  const [rapport, setRapport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    newRequest
      .get(`/rapport/${id}`)
      .then(res => {
        setRapport(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch rapport details')
        setLoading(false)
        console.error(err)
      })
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='rapport-detail'>
      <h2>Rapport Details</h2>
      <div>
        <strong>Device Name:</strong> {rapport.deviceName}
      </div>
      <div>
        <strong>User ID:</strong> {rapport.userId}
      </div>
      <div>
        <strong>Rapport:</strong> {rapport.rapport}
      </div>
      <div>
        <strong>Created At:</strong>{' '}
        {new Date(rapport.createdAt).toLocaleString()}
      </div>
    </div>
  )
}

export default RapportDetail
