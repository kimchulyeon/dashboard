import React from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import DataTable from '../../components/dataTable/DataTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { isDark } from '../../utils/atoms'
import { darkTheme, defaultTheme } from '../../utils/theme'

// STYLE
const ListContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) =>
    props.dark ? darkTheme.backgroundColor : defaultTheme.backgroundColor};

  .listContainer {
    flex: 6;
  }
`

const List = () => {
  const dark = useRecoilValue(isDark)

  return (
    <ListContainer dark={dark}>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable />
      </div>
    </ListContainer>
  )
}

export default List
