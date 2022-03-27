import React from 'react'
import styled from 'styled-components'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widgets/Widget'

// STYLE
const Container = styled.div`
  display: flex;
`
const HomeContainer = styled.div`
  flex: 6;
`
const WidgetsContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`
const ChartsContainer = styled.div`
  display: flex;
  padding: 5px 20px;
  gap: 20px;
`

const Home = () => {
  return (
    <Container>
      <Sidebar />
      {/* Main Page View */}
      <HomeContainer>
        <Navbar />

        <WidgetsContainer>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </WidgetsContainer>

        <ChartsContainer>
          <Featured />
          <Chart />
        </ChartsContainer>
      </HomeContainer>
    </Container>
  )
}

export default Home
