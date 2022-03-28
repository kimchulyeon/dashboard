import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useRecoilState } from 'recoil'
import { isDark } from '../../utils/atoms'
import { darkTheme, defaultTheme } from '../../utils/theme'

// STYLE
const NavContainer = styled.div`
  height: 50px;
  border-bottom: 0.5px solid #e9e6e6;
  display: flex;
  align-items: center;
  color: #555;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;

    .search {
      display: flex;
      align-items: center;
      border: 0.5px solid lightgray;
      padding: 3px;

      input {
        border: none;
        outline: none;
        background-color: transparent;
        color: ${(props) => (props.dark ? darkTheme.textColor : defaultTheme.textColor)};

        &::placeholder {
          font-size: 12px;
        }
      }
    }

    .items {
      display: flex;
      align-items: center;

      .item {
        display: flex;
        align-items: center;
        margin: 20px;
        position: relative;

        .icon {
          font-size: 20px;
          cursor: pointer;
        }

        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .counter {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
        }
      }
    }
  }
`

const Navbar = () => {
  const [dark, setDark] = useRecoilState(isDark)

  const onDarkmode = () => {
    setDark((prev) => !prev)
  }
  return (
    <NavContainer dark={dark}>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            {dark ? (
              <Brightness7Icon className="icon" onClick={onDarkmode} />
            ) : (
              <DarkModeIcon className="icon" onClick={onDarkmode} />
            )}
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationImportantIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="user"
            />
          </div>
        </div>
      </div>
    </NavContainer>
  )
}

export default Navbar
