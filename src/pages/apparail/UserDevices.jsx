import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import newRequest from '../../utils/newRequest'
import Sidebar from '../../component/sidebar/Sidebar'

const UserDevices = ({id, role}) => {
  const [data, setData] = useState([])
  useEffect(() => {
   if(id) {
    newRequest
    .get(`app/user/${id}`)
    .then(res => {
      console.log("response:",res)
      const rowsWithId = res.data.devices.map(row => {
        return { ...row, id: row._id }
      })
      setData(rowsWithId)
    })
    .catch(err => console.log(err))

   }
   

    return () => {}
  }, [id, role])

  const handleDelete = id => {
    setData(data.filter(item => item._id !== id))
  }
  const apareilColumns = [
    { field: '_id', headerName: 'ID', width: 70 },
    {
      field: 'device_name',
      headerName: 'device_name',
      width: 230,
      renderCell: params => {
        return <div className='cellWithImg'>{params.row.NOM_ARMR
        }</div>
      }
    },
    {
      field: 'HUMIDITE',
      headerName: 'HUMIDITE',
      width: 230,
      renderCell: params => {
        return <div className='cellWithImg'>{params.row.HUMIDITE
        }</div>
      }
    },

   
    
    {
      field: 'FREQUENCE',
      headerName: 'FREQUENCE',
      width: 230,
      renderCell: params => {
        return <div className='cellWithImg'>{params.row.FREQUENCE
        }</div>
      }
    }, 
  ]
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className='cellAction'>
            <Link
              to={`/apparails/${params.row._id}`}
              style={{ textDecoration: 'none' }}
            >
            </Link>
            <div
  className='deleteButton'
  onClick={() => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      handleDelete(params.row._id);
    }
  }}
>
  Delete
</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <div className='datatable'>
          <div className='datatableTitle'>
            My Devices
            
          </div>
          <DataGrid
            className='datagrid'
            rows={data}
            columns={apareilColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>
      </div>
    </div>
  )
}
export default UserDevices; 
