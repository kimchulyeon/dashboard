import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../utils/dataTableSource'

// STYLE
const DataTableContainer = styled.div`
  height: 600px;
  padding: 20px;

  .cellWithImg {
    display: flex;
    align-items: center;

    .cellImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 20px;
    }
  }

  .cellWithStatus {
    padding: 5px;
    border-radius: 5px;

    &.active {
      color: green;
      background-color: #0080001f;
    }
    &.passive {
      color: goldenrod;
      background-color: #ffff002b;
    }
    &.pending {
      color: crimson;
      background-color: #ff000021;
    }
  }

  .cellAction {
    display: flex;
    align-items: center;
    gap: 15px;

    .viewButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: darkblue;
      border: 1px dotted #00008b50;
      cursor: pointer;
    }

    .deleteButton {
      padding: 2px 5px;
      border-radius: 5px;
      color: crimson;
      border: 1px dotted #8b000037;
      cursor: pointer;
    }
  }
`

const DataTable = () => {
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      },
    },
  ]

  return (
    <DataTableContainer>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </DataTableContainer>
  )
}

export default DataTable
