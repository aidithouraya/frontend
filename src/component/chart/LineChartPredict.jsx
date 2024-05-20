import React, { useContext, useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { NotificationContext } from '../../App';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import { BACKEND_URL } from '../../env';

export default function Chart({ type }) {
  const { setNotifications } = useContext(NotificationContext);
  const [objectData, setObjectData] = useState([]);

  function checkData(data) {
    const checksErrors = [];
    const errorMessages = {
      flameData: { id: 1, message: 'Flame Data Elevé' },
      temperatureData: { id: 2, message: 'Temperature Elevé' },
      Vab: { id: 3, message: 'Voltage Vab Elevé' },
      Vbc: { id: 4, message: 'Voltage Vbc Elevé' },
      Vca: { id: 5, message: 'Voltage Vca Elevé' }
    };

    const thresholds = {
      flameData: 0.5, // Adjust threshold as necessary
      temperatureData: 15, // Adjust threshold as necessary
      Vab: 5e-13, // Adjust threshold as necessary
      Vbc: 5e-13, // Adjust threshold as necessary
      Vca: 5e-13 // Adjust threshold as necessary
    };

    data.forEach(element => {
      Object.keys(thresholds).forEach(key => {
        if (element[key] > thresholds[key] && !checksErrors.some(error => error.id === errorMessages[key].id)) {
          checksErrors.push(errorMessages[key]);
        }
      });
    });

    setNotifications(checksErrors);
  }

  // Function to fetch and transform data
  async function fetchData() {
    try {
      const response = await axios.get(`${BACKEND_URL}/predict`);
      const data = response.data.series;

      // Transform the data
      const transformedData = [];
      const seriesKeys = Object.keys(data);
      const length = data[seriesKeys[0]].length;

      for (let i = 0; i < length; i++) {
        const entry = { name: i + 1 }; // Or use any appropriate key
        seriesKeys.forEach(key => {
          entry[key] = data[key][i];
        });
        transformedData.push(entry);
      }

      setObjectData(transformedData);
      checkData(transformedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => fetchData(), 10000); // Update every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  const theme = useTheme();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={objectData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="flameData" stroke="#ff0000" />
        <Line type="monotone" dataKey="temperatureData" stroke="#00ff00" />
        <Line type="monotone" dataKey="Vab" stroke="#8884d8" />
        <Line type="monotone" dataKey="Vbc" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Vca" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

  