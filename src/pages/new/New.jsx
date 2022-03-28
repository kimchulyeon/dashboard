import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

// STYLE
const NewContainer = styled.div`
  display: flex;

  .newContainer {
    flex: 6;
  }
`

const New = () => {
  return (
    <NewContainer>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        test
      </div>
    </NewContainer>
  )
}

export default New
