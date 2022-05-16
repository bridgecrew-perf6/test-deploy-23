import { Box, Card } from '@mui/material';
import classes from './Ve.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DateTour from './Date';
import DateRangeIcon from '@mui/icons-material/DateRange';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import Apply from './Apply';
import TimeTour from './Time';
import { useDispatch, useSelector } from 'react-redux';
import { setSumPrice } from '../../../../Redux/Action/Touraction';
import { getAllTicketTypes } from '../../../../Redux/Action/quanLyLoaiVeActions';

const findTicketId = (ticketTypes, typeName) => {
  if (Array.isArray(ticketTypes)) {
    const ticketType = ticketTypes.find(
      (type) => type.TENLOAI.toLowerCase() === typeName.toLowerCase(),
    );
    return ticketType ? ticketType.MALOAI : null;
  }
  return null;
};

const Ve = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [chon, setChon] = useState(false);
  const [dayPopup, setDayPop] = useState(false);
  const [peoplePopup, setPeoplePopup] = useState(false);
  const [timePopup, setTimePopup] = useState(false);
  const [ticketId, setTicketId] = useState('Người lớn');
  const [day, setDay] = useState({ day: 'Chọn Ngày', position: {} });
  const [singleproducttour, setSingleproducttour] = useState([]);
  const [countLarge, setCountLarge] = useState(0);
  const [countSmall, setCountSmall] = useState(0);
  const [dayBook, setDayBook] = useState(null);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const { ticketTypes } = useSelector((state) => state.quanLyLoaiVeState);
  console.log('tickety', ticketTypes);
  useEffect(() => {
    getData(id);
    dispatch(getAllTicketTypes());
  }, [id]);
  const getData = async (id) => {
    const respone = await axios.get(`/api/products/${id}`).then((res) => {
      setSingleproducttour(res.data);
      console.log(res.data);
    });
    console.log('data =>', singleproducttour);
  };
  const ChangeCountLarge = (value) => {
    setCountLarge(value);
  };
  const ChangePeoplePopup = (value) => {
    setPeoplePopup(value);
  };
  const ChangeCountSmall = (value) => {
    setCountSmall(value);
  };
  const setPriceSum = (value) => {
    setPrice(value);
  };
  const hanleDay = (value) => {
    setDay(value);
  };
  const hanleDayPopup = (value) => {
    setDayPop(value);
  };
  const hanleTimePopup = (value) => {
    setTimePopup(value);
  };
  const handeChangeTicketType = (value) => {
    setTicketId(value);
  };
  const handSetDayBook = (value) => {
    setDayBook(value);
  };
  return (
    <div className={classes.container}>
      {singleproducttour.map(({ MATOUR, GIATOUR }) => (
        <div>
          <h1>Tour ghép</h1>
          <div className={classes.noidung}>
            <div className={classes.thongbao}>
              <div>
                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455491487-083f2aa1250ed2145b0b41c4e1dba240.png' />
                Có hiệu lực từ hôm nay cho đến
              </div>
              <div style={{ marginTop: '5px' }}>
                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455486715-9f445c68bf929b8ace8e744c568484f9.png' />
                không cần đặt chỗ
              </div>
              <div style={{ marginTop: '5px' }}>
                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2021/02/04/1612455479726-cb00253dc0267a8fc369760e81dc577c.png' />
                Easy Refund
              </div>
            </div>
            <div className={classes.gia}>
              <p>{GIATOUR} VND</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            {!chon ? (
              <button
                className={classes.btnchon}
                onClick={() => {
                  setChon(!chon);
                  setDayPop(true);
                  setPeoplePopup(false);
                  setTimePopup(false);
                }}
              >
                Chọn
              </button>
            ) : (
              <button
                className={classes.btnhuy}
                onClick={() => {
                  setChon(!chon);
                  setDayPop(false);
                  setPeoplePopup(false);
                  setTimePopup(false);
                }}
              >
                Hủy
              </button>
            )}
          </div>
          {chon && (
            <div className={classes.choose}>
              <hr />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div className={classes.content}>
                  <div style={{ position: 'relative' }}>
                    <div
                      className={classes.item}
                      onClick={() => {
                        setDayPop(!dayPopup);
                        setPeoplePopup(false);
                        setTimePopup(false);
                      }}
                    >
                      <DateRangeIcon />
                      <div>
                        <p
                          style={{
                            margin: '0',
                            color: 'rgba(3,18,26,1.00)',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          Ngày tham quan
                        </p>
                        <p
                          style={{
                            margin: '0',
                            color: 'rgba(104,113,118,1.00)',
                            fontSize: '12px',
                            fontWeight: '500',
                          }}
                        >
                          {day.day}
                        </p>
                      </div>
                      <KeyboardArrowDownIcon
                        style={{ color: '#0d99f4' }}
                        fontSize='large'
                      />
                    </div>
                    {dayPopup && (
                      <DateTour
                        day={day}
                        setDay={hanleDay}
                        setDayPopup={hanleDayPopup}
                        setPeoplePopup={ChangePeoplePopup}
                        setDayBook={handSetDayBook}
                        GIATOUR={GIATOUR}
                      />
                    )}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div
                      className={classes.item}
                      onClick={() => {
                        setPeoplePopup(!peoplePopup);
                        setDayPop(false);
                        setTimePopup(false);
                      }}
                    >
                      <GroupOutlinedIcon />
                      <div>
                        <p
                          style={{
                            margin: '0',
                            color: 'rgba(3,18,26,1.00)',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          Loại vé
                        </p>
                        <p
                          style={{
                            margin: '0',
                            color: 'rgba(104,113,118,1.00)',
                            fontSize: '12px',
                            fontWeight: '500',
                          }}
                        >
                          {countLarge} Người lớn, {countSmall} trẻ em
                        </p>
                      </div>
                      <KeyboardArrowDownIcon
                        style={{ color: '#0d99f4' }}
                        fontSize='large'
                      />
                    </div>
                    {peoplePopup && (
                      <Apply
                        countLarge={countLarge}
                        countSmall={countSmall}
                        setCountLarge={ChangeCountLarge}
                        setCountSmall={ChangeCountSmall}
                        setPrice={setPriceSum}
                        setPeoplePopup={ChangePeoplePopup}
                        setTicketType={handeChangeTicketType}
                        GIATOUR={GIATOUR}
                      />
                    )}
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div
                      className={classes.item}
                      onClick={() => {
                        setTimePopup(!timePopup);
                        setDayPop(false);
                        setPeoplePopup(false);
                      }}
                    >
                      <QueryBuilderOutlinedIcon />
                      <div>
                        <p
                          style={{
                            margin: '0',
                            color: 'rgba(3,18,26,1.00)',
                            fontSize: '16px',
                            fontWeight: '700',
                          }}
                        >
                          Khung thời gian
                        </p>
                        <p
                          style={{
                            margin: '0',
                            color: 'rgba(104,113,118,1.00)',
                            fontSize: '12px',
                            fontWeight: '500',
                          }}
                        >
                          18:30
                        </p>
                      </div>
                      <KeyboardArrowDownIcon
                        style={{ color: '#0d99f4' }}
                        fontSize='large'
                      />
                    </div>

                    {timePopup && <TimeTour />}
                  </div>
                </div>
                <div>
                  <button
                    className={classes.datve}
                    onClick={() => {
                      dispatch(
                        setSumPrice({
                          price: price,
                          soluongnguoilon: countLarge,
                          soluongtreem: countSmall,
                          maLoaiVe: findTicketId(ticketTypes, ticketId),
                          ngayDate: dayBook,
                        }),
                      );
                      navigate('/order/' + MATOUR);
                    }}
                  >
                    Đặt ngay
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Ve;
