import React from 'react'
import './rapport.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import FeaturedChart from '../../component/featured/FeaturedChart'
import PartieOfThouriya from '../PartieOfThouriya/PartieOfThouriya'
import { Navigate } from 'react-router-dom'

const Rapport = ({ role }) => {
  console.log(role)
  return (
    <>
      {role == 'engineer' ? (
        <div className='rapport'>
          <Sidebar />
          <div className='rapportContainer'>
            <Navbar />
            <div className='charContainer'>
              hello
              {/* delete this part and add my code */}
              <PartieOfThouriya />
              {/* end of delete */}
            </div>
          </div>
        </div>
      ) : role == 'admin' ? (
        <Navigate to='/stast' replace />
      ) : (
        <Navigate to='/' replace />
      )}
    </>
  )
}

export default Rapport
