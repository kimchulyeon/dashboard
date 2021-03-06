import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useRecoilValue } from 'recoil'
import { isDark } from '../../utils/atoms'
import { darkTheme, defaultTheme } from '../../utils/theme'

// STYLE
const ChartContainer = styled.div`
  flex: 4;
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  color: gray;

  .title {
    margin-bottom: 20px;
  }

  .chartGrid {
    stroke: ${(props) => (props.dark ? '#444' : '#e9e7e7')};
  }

  .tooltip {
    background-color: red;
  }
`
// Temporal data
const data = [
  { name: 'January', Total: 1200 },
  { name: 'Febrary', Total: 2100 },
  { name: 'March', Total: 800 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 900 },
  { name: 'June', Total: 1700 },
]

const Chart = ({ aspect, title }) => {
  const dark = useRecoilValue(isDark)

  const TOOLTIP_COLOR = dark ? darkTheme.textColor : defaultTheme.textColor

  return (
    <ChartContainer dark={dark}>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />
          <Tooltip
            contentStyle={{
              backgroundColor: TOOLTIP_COLOR,
            }}
          />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart
