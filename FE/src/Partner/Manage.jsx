import { Grid } from '@mui/material';
import { Card, Select } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import * as thongKeActions from './../Redux/Action/thongKeActions';
import ChartExample from './Chart';
import classes from './Manage.module.css';
import Menuleft from './Menuleft';
import Menutop from './Menutop';

const cards = [
  {
    title: 'Số Lượng Vé Đã Bán',
    bgColor: 'blue',
    textColor: 'white',
    dataIndex: 'Đã được đặt',
  },
  {
    title: 'Số Lượng Vé Bị Xóa',
    bgColor: 'red',
    textColor: 'white',
    dataIndex: 'Đã bị xóa',
  },
  {
    title: 'Số Lượng Vé Bị Hủy',
    bgColor: 'orange',
    textColor: 'white',
    dataIndex: 'Đã bị hủy',
  },
  {
    title: 'Số Lượng Vé Còn Hiệu Lực',
    bgColor: 'green',
    textColor: 'white',
    dataIndex: 'Còn hiệu lực',
  },
];

const months = (() => {
  const arr = [];
  for (let i = 1; i < 13; i++) {
    arr.push({ label: `Tháng ${i}`, value: i });
  }
  return arr;
})();

const getNumberOfTicketType = (data, type) => {
  return Array.isArray(data)
    ? data.reduce((acc, item) => {
        return item['TRANG_THAI_VE'] === type ? acc + item.SO_LUONG_VE : acc;
      }, 0)
    : 0;
};

const calculateSumByField = (data, field) => {
  return Array.isArray(data)
    ? data.reduce((acc, item) => {
        return acc + item[field];
      }, 0)
    : 0;
};

const tinhTongDoanhThu = (data) => {
  return data.reduce(
    (acc, item) =>
      item.TRANG_THAI_VE === 'Đã được đặt' ? acc + item.TONG_DOANH_THU : acc,
    0,
  );
};

const Manage = () => {
  const [thang, setThang] = useState();
  const dispatch = useDispatch();
  const { thongKeData } = useSelector((state) => state.thongKeState);

  const findItemsByMonth = (data, month) => {
    return Array.isArray(data)
      ? data.filter((item) => item.THANG === month)
      : null;
  };

  useEffect(() => {
    dispatch(thongKeActions.layThongTinThongKe());
  }, []);

  useEffect(() => {
    dispatch(thongKeActions.layThongTinThongKeTheoThang(thang));
  }, [thang]);

  return (
    <Fragment>
      <Menutop />
      <Menuleft />
      <div className={classes.content}>
        <h1 className={classes.heading}>Thống Kê Thao Tháng</h1>
        <Select
          defaultValue={null}
          placeholder='Chọn tháng'
          allowClear
          style={{
            width: '100%',
          }}
          bordered
          size='large'
          options={months}
          onChange={(value) => setThang(value)}
        ></Select>
        <h1 className={classes.heading}>
          Thống Kê Vé {thang && `Trong Tháng ${thang}`}
        </h1>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} md={6}>
              <Card
                title={card.title}
                key={index}
                headStyle={{
                  backgroundColor: card.bgColor,
                  color: card.textColor,
                  textAlign: 'center',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              >
                <div className={classes['center-box']}>
                  <CountUp
                    start={0}
                    end={getNumberOfTicketType(thongKeData, card.dataIndex)}
                    duration={0.7}
                  />
                </div>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} md={12}>
            <Card
              title='Tổng số vé'
              headStyle={{
                backgroundColor: 'brown',
                color: 'white',
                textAlign: 'center',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            >
              <div className={classes['center-box']}>
                <CountUp
                  start={0}
                  end={calculateSumByField(thongKeData, 'SO_LUONG_VE')}
                  duration={1}
                />
              </div>
            </Card>
          </Grid>
        </Grid>
        <h1 className={classes.heading}>
          Tổng Doanh Thu {thang && `Trong Tháng ${thang}`}
        </h1>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Card
              title='Tổng Doanh Thu Đạt Được'
              headStyle={{
                backgroundColor: '#4B7BE5',
                color: 'white',
                textAlign: 'center',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            >
              <div className={classes['center-box']}>
                <CountUp
                  start={0}
                  end={tinhTongDoanhThu(thongKeData)}
                  duration={1}
                  separator=','
                />
                <span style={{ paddingLeft: '10px' }}>VND</span>
              </div>
            </Card>
          </Grid>
        </Grid>
        <h1 className={classes.heading}>
          Biểu Đồ Doanh Thu {thang && `Trong Tháng ${thang}`}
        </h1>
        <div className={classes.bieudo}>
          <ChartExample dataChart={thongKeData} />
        </div>
      </div>
    </Fragment>
  );
};

export default Manage;
