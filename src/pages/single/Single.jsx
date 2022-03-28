import React from 'react'
import styled from 'styled-components'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from '../../components/dataTable/DataTable'

// STYLE
const SingleContainer = styled.div`
  display: flex;
  width: 100%;

  .singleContainer {
    flex: 6;
  }

  .title {
    font-size: 16px;
    color: lightgray;
    margin-bottom: 12px;
  }
`
const Top = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;

  .left {
    flex: 1;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 20px;
    position: relative;

    .editButton {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 12px;
      color: #16a085;
      background-color: #16a0843d;
      padding: 5px;
      border-radius: 0px 0px 0 5px;
      cursor: pointer;
    }

    .item {
      display: flex;
      gap: 20px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }

      .details {
        .itemTitle {
          margin-bottom: 10px;
          color: #555;
        }

        .detailItem {
          margin-bottom: 10px;
          font-size: 14px;

          .itemKey {
            font-weight: bold;
            color: gray;
            margin-right: 5px;
          }
          .itemValue {
            font-weight: 300;
          }
        }
      }
    }
  }
  .right {
    flex: 2;
  }
`
const Bottom = styled.div`
  padding: 20px;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  margin: 10px 20px;
`

const Single = () => {
  return (
    <SingleContainer>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <Top>
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="img"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+82 10 123 4567</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Elton St. 234 Garden Yd. NY</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contry: </span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </Top>
        <Bottom>
          <h1 className="title">Last Transactions</h1>
          <DataTable />
        </Bottom>
      </div>
    </SingleContainer>
  )
}

export default Single
