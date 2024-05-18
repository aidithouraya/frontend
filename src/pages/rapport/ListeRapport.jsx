import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import newRequest from '../../utils/newRequest'
import Sidebar from '../../component/sidebar/Sidebar'

const ListeRapport = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    newRequest
      .get('/rapport')
      .then(res => {
        console.log(res.data)
        const rowsWithId = res.data.rapports.map(row => {
          return { ...row, id: row._id }
        })
        setData(rowsWithId)
      })
      .catch(err => console.log(err))

    return () => {}
  }, [])

  const handleDelete = id => {
    setData(data.filter(item => item._id !== id))
  }
  const rapportColumns = [
    { field: '_id', headerName: 'ID', width: 70 },
    {
      field: '',
      headerName: 'Repports',
      width: 230,
      renderCell: params => {
        return <div className='cellWithImg'>{params.row.device_name}</div>
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
            <Link to={`${params.row._id}`} style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
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
            Rapports List
            <Link to='new' className='link'>
              Add New
            </Link>
          </div>
          <DataGrid
            className='datagrid'
            rows={data}
            columns={rapportColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>
      </div>
    </div>
  )
}
export default ListeRapport
