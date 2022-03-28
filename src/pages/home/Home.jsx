import React from 'react'
import styled from 'styled-components'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableArea from '../../components/tableArea/TableArea'
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
const ListContainer = styled.div`
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;

  .listTitle {
    font-weight: 500;
    color: gray;
    margin-bottom: 15px;
  }
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
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </ChartsContainer>

        <ListContainer>
          <div className="listTitle">Latest Transactions</div>
          <TableArea />
        </ListContainer>
      </HomeContainer>
    </Container>
  )
}

export default Home
