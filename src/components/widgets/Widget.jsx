import React from 'react'
import styled from 'styled-components'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

// STYLE
const Cont = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  justify-content: space-between;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
  height: 100px;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-weight: bold;
    font-size: 14px;
    color: #b4b3b3;
  }

  .counter {
    font-size: 28px;
    font-weight: 300;
  }

  .link {
    width: max-content;
    font-size: 12px;
    border-bottom: 1px solid gray;
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .percentage {
    display: flex;
    align-items: center;
    font-size: 14px;

    &.positive {
      color: green;
    }
    &.negative {
      color: red;
    }
  }

  .icon {
    font-size: 30px;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;
  }
`

const Widget = ({ type }) => {
  let data

  const AMOUNT = 100
  const DIFF = 20

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: 'crimson', backgroundColor: 'rgba(255,0,0,0.2)' }}
          />
        ),
      }
      break
    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'View all orders',
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{ color: 'goldenrod', backgroundColor: 'rgba(218,165,32,0.2)' }}
          />
        ),
      }
      break
    case 'earning':
      data = {
        title: 'EARNINGS',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <MonetizationOnIcon
            className="icon"
            style={{ color: 'green', backgroundColor: 'rgba(0,128,0,0.2)' }}
          />
        ),
      }
      break
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{ color: 'purple', backgroundColor: 'rgba(128,0,128,0.2)' }}
          />
        ),
      }
      break

    default:
      break
  }

  return (
    <Cont>
      <Left>
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {AMOUNT}
        </span>
        <span className="link">{data.link}</span>
      </Left>
      <Right>
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {DIFF}%
        </div>
        {data.icon}
      </Right>
    </Cont>
  )
}

export default Widget
