import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { isDark } from '../../utils/atoms'
import { darkTheme, defaultTheme } from '../../utils/theme'

// STYLE
const NewContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.dark ? darkTheme.backgroundColor : defaultTheme.backgroundColor};
  color: ${(props) => (props.dark ? darkTheme.textColor : defaultTheme.textColor)};

  .newContainer {
    flex: 6;

    .top,
    .bottom {
      box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
      padding: 10px;
      margin: 20px;
      display: flex;

      h1 {
        color: lightgray;
        font-size: 20px;
      }

      .left {
        flex: 1;
        text-align: center;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      .right {
        flex: 2;

        form {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 30px;

          .formInput {
            width: 40%;

            label {
              display: flex;
              align-items: center;
              gap: 10px;

              .icon {
                cursor: pointer;
              }
            }

            input {
              width: 100%;
              border: none;
              padding: 5px;
              border-bottom: 1px solid gray;
              background-color: ${(props) => (props.dark ? darkTheme.textPointColor : '#fff')};

              &::placeholder {
                color: ${(props) => (props.dark ? '#333' : defaultTheme.textPointColor)};
              }
            }
          }
          button {
            width: 150px;
            border: none;
            padding: 10px;
            background-color: teal;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
          }
        }
      }
    }
  }
`

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('')
  const dark = useRecoilValue(isDark)

  const onChangeImg = (e) => {
    setFile(e.target.files[0])
  }

  return (
    <NewContainer dark={dark}>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="img"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} onChange={onChangeImg} />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                )
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </NewContainer>
  )
}

export default New
