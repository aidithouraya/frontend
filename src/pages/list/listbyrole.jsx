import './list.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Datatable from '../../component/dataTable/datatablebyrole'
import { Navigate, useParams } from 'react-router-dom'

const List = () => {

    const {role} = useParams();

  return (
    
      
        <div className='home'>
          <Sidebar />
          <div className='homeContainer'>
            <Navbar />
            <Datatable role={role} />
          </div>
        </div>
      )
      
   
}

export default List
