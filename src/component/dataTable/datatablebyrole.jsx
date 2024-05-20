import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../datatablesource'

import { useState, useEffect } from 'react'
import newRequest from '../../utils/newRequest'

const Datatable = ({role}) => {
  const [data, setData] = useState(userRows)
  useEffect(() => {
    newRequest
      .get('/user')
      .then(res => {
        const rowsWithId = res.data.users.map(row => {
          return { ...row, id: row._id }
        }).filter(row=>{
            if(role==='users')
            return true 
        return row.role===role
        })
        setData(rowsWithId)
      })
      .catch(err => console.log(err))

    return () => {}
  }, [])


 
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
       List of {role} 
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  )
}

export default Datatable
