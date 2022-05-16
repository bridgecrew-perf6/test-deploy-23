import PunchClockIcon from '@mui/icons-material/PunchClock';
import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import classes from './Payment.module.css';
import Swal from 'sweetalert2';

function Payment() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  const [singleOderproducttour, setSingleOderproducttour] = useState([]);
  const booking = useSelector((state) => state.tourlist.booking);
  useEffect(() => {
    getData(id);
  }, [id]);
  const getData = async (id) => {
    const respone = await axios.get(`/api/products/${id}`).then((res) => {
      console.log();
      setSingleOderproducttour(res.data);
      console.log(res.data);
    });
  };
  console.log(singleOderproducttour);
  const hanlePayment = () => {
    let date = new Date();
    let objApi = {
      maKH: '1',
      maTour: singleOderproducttour[0].MATOUR,
      ngayDat: `'${booking.ngayDate}'`,
      soLuong: booking.soluongtreem + booking.soluongnguoilon,
      tongTien: booking.price,
      maLoaiVe: booking.maLoaiVe,
    };
    console.log('dpi dat ve', objApi);

    axios({
      url: '/api/datTour',
      method: 'POST',
      data: objApi,
    })
      .then(() => {
        Swal.fire({
          title: 'Đặt vé thành công',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        window.location.href = '/';
      })
      .catch((err) => {
        Swal.fire({
          title: 'Đặt vé không thành công',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };
  return (
    <Fragment>
      <Header />
      {singleOderproducttour.map(({ TENTOUR, GIATOUR }) => (
        <Box
          component={'div'}
          sx={{
            backgroundColor: '#f7f9fa',
          }}
        >
          <Box
            component={'div'}
            sx={{
              width: '960px',
              margin: 'auto',
              padding: '20px 0 40px 0',
            }}
          >
            <h2 style={{ fontWeight: '500', marginBottom: '20px' }}>
              Thanh toán
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box
                component={'div'}
                sx={{
                  display: 'flex',
                  width: '634px',
                  boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px;',
                  backgroundColor: 'white',
                }}
              >
                <Box
                  component={'div'}
                  sx={{
                    width: '188px',
                    backgroundColor: '#073e68',
                    minHeight: '1138px',
                    color: 'white',
                  }}
                >
                  <p
                    style={{
                      textAlign: 'center',
                      margin: '0',
                      padding: '15px 32px 10px 32px',
                    }}
                  >
                    <img
                      src='https://ik.imagekit.io/tvlk/image/imageResource/2018/07/16/1531738663636-5a904b0e24addce76efebf72eb8e5cb0.png?tr=q-75'
                      width='110'
                      height='20'
                      alt=''
                    />
                  </p>
                  <p
                    style={{
                      padding: '16px 24px',
                      fontSize: '14px',
                      margin: '0',
                      backgroundColor: 'white',
                      color: '#073e68',
                    }}
                  >
                    Thẻ thanh toán
                  </p>
                </Box>
                <Box
                  component={'div'}
                  sx={{
                    minWidth: '446px',
                  }}
                >
                  <div
                    style={{
                      padding: '16px 24px',
                      width: '100%',
                      textAlign: 'center',
                      backgroundColor: '#f1f8fc',
                    }}
                  >
                    Tiến thành đặt vé trong 01:00:00
                  </div>
                  <div style={{ padding: '0 24px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '18px',
                          lineHeight: '27px',
                          fontWeight: 500,
                        }}
                      >
                        Thẻ thanh toán
                      </p>
                      <div>
                        <img
                          src='https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484655630637-0dcca3761eb5910f1835f438f153bfae.png?tr=q-75'
                          alt=''
                          style={{ height: '24px', paddingLeft: '10px' }}
                        />
                        <img
                          src='https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707776912-1abb188266f6d5b3f2e27f4733ca32e9.png?tr=q-75'
                          alt=''
                          style={{ height: '24px', paddingLeft: '10px' }}
                        />
                        <img
                          src='https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707787206-abc175b224ab92a6967e24bc17c30f45.png?tr=q-75'
                          alt=''
                          style={{ height: '24px', paddingLeft: '10px' }}
                        />
                        <img
                          src='https://ik.imagekit.io/tvlk/image/imageResource/2017/07/10/1499673365437-1e1522e5cc323e7e8a7b57b90e81dbc9.png?tr=q-75'
                          alt=''
                          style={{ height: '24px', paddingLeft: '10px' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className={classes.label}>Số thẻ tín dụng</p>
                        <input
                          className={classes.input}
                          placeholder='18 chữ số trên mặt thẻ'
                        />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <p className={classes.label}>Hiệu lực đến</p>
                          <input
                            className={classes.input}
                            placeholder='MM/YY'
                          />
                        </div>
                        <div>
                          <p className={classes.label}>CVV</p>
                          <input
                            className={classes.input}
                            placeholder='3 chữ số CVV'
                          />
                        </div>
                      </div>

                      <div>
                        <p className={classes.label}>Tên trên thẻ</p>
                        <input
                          className={classes.input}
                          placeholder='Tên trên thẻ'
                          style={{ marginBottom: '5px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div style={{ padding: '0 24px', marginBottom: '20px' }}>
                    <p style={{ color: '#0000ee' }}>Chọn trả góp</p>
                    <a href='' style={{ color: '#0000ee' }}>
                      Learn more
                    </a>
                  </div>
                  <hr />
                  <div style={{ padding: '18px 24px' }}>
                    <Switch
                      {...label}
                      checked={checked}
                      onChange={() => {
                        setChecked(!checked);
                      }}
                      size='small'
                    />
                    <span>Nhập mã giảm giá</span>
                    {checked && (
                      <div>
                        <input
                          placeholder='VD: CHEAPTRAVEL'
                          style={{
                            padding: '8px 16px',
                            border: '1px solid #dadada',
                            outline: 'none',
                            fontSize: '14px',
                            margin: '16px 20px 0 0',
                          }}
                        />
                        <button className={classes.apdung}>Áp dụng mã</button>
                      </div>
                    )}
                  </div>
                  <div className={classes.chitiet}>
                    <div>
                      <h3>Chi tiết giá</h3>
                      <div className={classes.chitietgia}>
                        <p>
                          {TENTOUR} - Người lớn x{booking.soluongnguoilon}
                        </p>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            displayType={'text'}
                            thousandsGroupStyle='thousand'
                            value={booking.soluongnguoilon * GIATOUR}
                          />
                          VND
                        </p>
                      </div>
                      <div className={classes.chitietgia}>
                        <p>
                          {TENTOUR} - Trẻ em x{booking.soluongtreem}
                        </p>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            displayType={'text'}
                            thousandsGroupStyle='thousand'
                            value={booking.soluongtreem * (GIATOUR - 100000)}
                          />
                          VND
                        </p>
                      </div>
                      <hr />
                      <div
                        className={classes.chitietgia}
                        style={{ marginTop: '20px' }}
                      >
                        <p>Tổng giá tiền</p>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            displayType={'text'}
                            thousandsGroupStyle='thousand'
                            value={booking.price}
                          />
                          VND
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.dieukhoan}>
                    <p>
                      Bằng việc nhấn thanh toán, bạn đồng ý
                      <span>Điều khoản & điều kiện</span> và
                      <span>Chính sách quyền riêng tư.</span>
                    </p>
                  </div>
                  <div className={classes.thanhtoan}>
                    <button onClick={hanlePayment}>
                      <PunchClockIcon
                        style={{ fontSize: '16px', marginRight: '20px' }}
                      />
                      <span>Thanh toán Thẻ thanh toán</span>
                    </button>
                  </div>
                </Box>
              </Box>
              <Box
                component={'div'}
                sx={{
                  width: '304px',
                  height: '241px',
                  boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px;',
                  backgroundColor: 'white',
                  borderRadius: '5px',
                }}
              >
                <div className={classes.datcho}>
                  <div style={{ padding: '16px' }}>
                    <p className={classes.ten}>MÃ ĐẶT CHỖ</p>
                    <p style={{ fontSize: '16px', lineHeight: '24px' }}>
                      11052022
                    </p>
                  </div>
                  <hr />
                  <div style={{ padding: '16px' }}>
                    <p className={classes.ten}>CHI TIẾT ĐẶT CHỖ</p>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '700',
                        margin: '5px 0',
                      }}
                    >
                      {TENTOUR}
                    </p>
                    <div className={classes.detail}>
                      <span>Ngày tham quan</span>
                      <span>T4, 01 Thg 06 2022</span>
                    </div>
                    <div className={classes.detail}>
                      <span>Áp dụng cho</span>
                      <div style={{ textAlign: 'right' }}>
                        <p>Người lớn: {booking.soluongnguoilon}</p>
                        <p>Trẻ nhỏ (từ bé thứ 2): {booking.soluongtreem}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </Box>
        </Box>
      ))}

      <Footer />
    </Fragment>
  );
}

export default Payment;
