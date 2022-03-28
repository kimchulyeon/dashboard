import React from 'react'
import styled from 'styled-components'
import DataTable from '../../components/dataTable/DataTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

// STYLE
const ListContainer = styled.div`
  display: flex;
  width: 100%;

  .listContainer {
    flex: 6;
  }
`

const List = () => {
  return (
    <ListContainer>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </ListContainer>
  )
}

export default List
