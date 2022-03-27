import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert'

// STYLE
const FeaturedContainer = styled.div`
  flex: 2;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;

    .title {
      font-size: 16px;
      font-weight: 500;
    }

    .icon {
      font-size: 19px;
    }
  }
`

const Featured = () => {
  return (
    <FeaturedContainer>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon className="icon" />
      </div>
      <div className="bottom">
        <div className="featuredChart"></div>
      </div>
    </FeaturedContainer>
  )
}

export default Featured
