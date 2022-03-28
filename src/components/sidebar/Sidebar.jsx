import React from 'react'
import styled from 'styled-components'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LogoutIcon from '@mui/icons-material/Logout'

import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { isDark } from '../../utils/atoms'
import { darkTheme, defaultTheme } from '../../utils/theme'

// STYLE
const Container = styled.div`
  flex: 1;
  border-right: 0.5px solid #e9e6e6;
  min-height: 100vh;
  background-color: ${(props) =>
    props.dark ? darkTheme.backgroundColor : defaultTheme.backgroundColor};

  hr {
    height: 0;
    border: 0.5px solid #e9e6e6;
  }
`
const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #16a085;
  }
`
const Center = styled.div`
  padding-left: 10px;

  .title {
    font-size: 10px;
    font-weight: bold;
    color: #999;
    margin-top: 15px;
    margin-bottom: 5px;
  }
  li {
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.dark ? darkTheme.textColor : '#55a38d3b')};
    }

    .icon {
      font-size: 18px;
      color: #55a38d;
    }

    span {
      font-size: 13px;
      font-weight: 600;
      color: #888;
      margin-left: 10px;
    }
  }
`
const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;

  .colorOption {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #55a38d;
    cursor: pointer;
    margin: 5px;

    &:nth-child(1) {
      background-color: whitesmoke;
    }
    &:nth-child(2) {
      background-color: #333;
    }
  }
`

const Sidebar = () => {
  const dark = useRecoilValue(isDark)

  return (
    <Container dark={dark}>
      <Top>
        <Link to="/">
          <span className="logo">Admin Dashboard</span>
        </Link>
      </Top>
      <hr />
      <Center dark={dark}>
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users">
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <Inventory2Icon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </Center>
      <Bottom>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </Bottom>
    </Container>
  )
}

export default Sidebar
