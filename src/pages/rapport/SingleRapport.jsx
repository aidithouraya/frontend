import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import newRequest from '../../utils/newRequest'
import { useState, useEffect } from 'react'
import "./singlerapport.scss"
import { useParams } from 'react-router-dom'
import Detailstranform from './composant/Detailstranform'
import DetailMonArmoire from './composant/DetailMonArmoire'
import GeneratorAppareil from '../../component/generatorAppareil/Genrator'
export default function SingleRapport() {
  let { id } = useParams()
  const [rapport, setRapport] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    newRequest
      .get(`/rapport/${id}`)
      .then(res => {
        console.log('🚀 ~ useEffect ~ res.data.rapport:', res.data)
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
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <div></div>
        <div>
          {rapport && (
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
          )}
        </div>

        {}
      </div>
    </div>
  )
}
