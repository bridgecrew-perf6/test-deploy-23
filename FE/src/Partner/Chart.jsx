import React, { Component } from 'react';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

class ChartExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dataChart } = this.props;
    const data = [];

    for (let i = 1; i < 13; i++) {
      const sum = dataChart.reduce((acc, item) => {
        if (item.THANG === i && item.TRANG_THAI_VE === 'Đã được đặt') {
          acc += item.TONG_DOANH_THU;
        }
        return acc;
      }, 0);
      data.push({
        name: `Tháng ${i}`,
        'Doanh Thu': sum,
      });
    }

    return (
      <ResponsiveContainer className='chart' height={600}>
        <LineChart
          width={1000}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='Doanh Thu' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default React.memo(ChartExample);
