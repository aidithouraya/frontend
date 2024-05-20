import React, { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { NotificationContext } from '../../App'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

import {BACKEND_URL}  from '../../env'

export default function Chart({ type }) {
  const { notifications, setNotifications } = useContext(NotificationContext)
  const [objectData, setObjectData] = React.useState([])
  //Fonction de verification des données

  function check_data(data) {
    let checks_errors = []
    let error1 = { id: 1, message: 'Charge State Elevé' }
    let error2 = { id: 2, message: 'Voltage De Battrie Elevé' }
    let error3 = { id: 3, message: 'Temperature Elevé' }
    let error4 = { id: 4, message: 'Temperature de Mouteur  Elevé' }
    data.forEach(element => {
      console.log(element)
      if (element.chargerState > 35) {
        if (!checks_errors.includes(error1)) checks_errors.push(error1)
      }

      if (element.batteryVoltage > 60) {
        if (!checks_errors.includes(error2)) checks_errors.push(error2)
      }
      if (element.temperatureData > 60) {
        if (!checks_errors.includes(error3)) checks_errors.push(error3)
      }
      if (element.engineTemperature > 60) {
        if (!checks_errors.includes(error4)) checks_errors.push(error4)
      }
    })
    setNotifications(checks_errors)
  }
  async function fetchData() {
    const response = await fetch(`${BACKEND_URL}/monitor/get`)
      .then(response => response.json())
      .then(data => {
        setObjectData(data)
        check_data(data)
      })
      .catch(error => console.error('Error fetching data:', error))
  }
  React.useEffect(() => {
    fetchData()

    const intervalId = setInterval(() => fetchData(), 10000) // Mise à jour chaque 100 seconds

    return () => clearInterval(intervalId)
  }, [])

  const theme = useTheme()

  return (
    <div className='charts'>
      <div className='voltage-chart' style={{ width: '100%', height: 400 }}>
        <Typography component='h2' variant='h6' color='primary' gutterBottom>
          Battery Data - Charger Data
        </Typography>

        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer width='100%' height='100%' >
            <LineChart
              data={objectData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='chargerState'
                stroke='#8884d8'
                strokeDasharray='5 5'
              />
              <Line
                type='monotone'
                dataKey='batteryVoltage'
                stroke='#82ca9d'
                strokeDasharray='3 4 5 2'
              />

              
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='temp-chart' style={{ width: '100%', height: 400 }}>
        <Typography component='h2' variant='h6' color='primary' gutterBottom>
          Temperature Data
        </Typography>
        <div style={{ width: '100%', height: 350 }}>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={objectData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='temperatureData'
                stroke='#8884ff'
                strokeDasharray='5 5'
              />
              <Line
                type='monotone'
                dataKey='engineTemperature'
                stroke='#ffca9d'
                strokeDasharray='3 4 5 2'
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
