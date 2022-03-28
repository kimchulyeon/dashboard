import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../utils/dataTableSource'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isDark } from '../../utils/atoms'
import { darkTheme, defaultTheme } from '../../utils/theme'
import { useState } from 'react'

// STYLE
const DataTableContainer = styled.div`
  height: 600px;
  padding: 20px;
  stroke: ${(props) => (props.dark ? darkTheme.textColor : defaultTheme.textColor)};

  .dataTableTitle {
    width: 100%;
    font-size: 24px;
    color: gray;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: green;
      font-size: 16px;
      font-weight: 400;
      border: 1px solid green;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

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
  const dark = useRecoilValue(isDark)
  const [data, setData] = useState(userRows)

  const handleDelete = (rowId) => {
    const newData = data
    setData(newData.filter((item) => item.id !== rowId))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => {
                console.log(params.row.id)
                handleDelete(params.row.id)
              }}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <DataTableContainer dark={dark}>
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new">Add New</Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        style={{ color: 'gray' }}
      />
    </DataTableContainer>
  )
}

export default DataTable
