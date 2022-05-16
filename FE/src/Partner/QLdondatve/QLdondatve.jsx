import { Button, Modal, Table, Tag, Tooltip } from 'antd';
import cx from 'classnames';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { FaEye, FaTimes, FaTrashAlt } from 'react-icons/fa';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menuleft from '../Menuleft';
import Menutop from '../Menutop';
import AlertPopup from './../../components/AlertPopup';
import LoadingSpinner from './../../components/LoadingSpinner';
import * as quanLyDonDatVeActions from './../../Redux/Action/quanLyDonDatVeActions';
import classes from './QLdondatve.module.css';

const QLdondatve = () => {
  const dispatch = useDispatch();
  const { orderList, tickets } = useSelector(
    (state) => state.quanLyDonDatVeState,
  );
  const { isLoading, isShowModal } = useSelector((state) => state.appState);

  useEffect(() => {
    dispatch(quanLyDonDatVeActions.getAllOrderList());
    dispatch(quanLyDonDatVeActions.getTicketByDonDatTour());
  }, []);

  const config = [
    {
      title: 'Mã đơn',
      dataIndex: 'MA_DON_DAT',
      key: 'MA_DON_DAT',
      sorter: (item1, item2) => +item1['MA_DON_DAT'] - +item2['MA_DON_DAT'],
      align: 'center',
    },
    {
      title: 'Tên KH',
      dataIndex: 'TEN_KHACH_HANG',
      key: 'TEN_KHACH_HANG',
      sorter: (item1, item2) =>
        item1['TEN_KHACH_HANG'].localeCompare(item2['TEN_KHACH_HANG']),
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Tên Tour',
      dataIndex: 'TEN_TOUR',
      key: 'TEN_TOUR',
      sorter: (item1, item2) =>
        item1['TEN_TOUR'].localeCompare(item2['TEN_TOUR']),
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Loại Tour',
      dataIndex: 'LOAI_TOUR',
      key: 'LOAI_TOUR',
      sorter: (item1, item2) =>
        item1['LOAI_TOUR'].localeCompare(item2['LOAI_TOUR']),
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Loại Vé',
      dataIndex: 'TEN_LOAI_VE',
      key: 'TEN_LOAI_VE',
      sorter: (item1, item2) =>
        item1['TEN_LOAI_VE'].localeCompare(item2['TEN_LOAI_VE']),
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Ngày Đặt',
      dataIndex: 'NGAY_DAT',
      key: 'NGAY_DAT',
      align: 'center',
      render: (value) => moment(value).format('DD-MM-YYYY'),
    },
    {
      title: 'Giá Tour',
      dataIndex: 'GIA_TOUR',
      key: 'GIA_TOUR',
      sorter: (item1, item2) => +item1['GIA_TOUR'] - +item2['GIA_TOUR'],
      align: 'center',
      render: (value) => (
        <NumberFormat
          thousandSeparator={true}
          displayType={'text'}
          thousandsGroupStyle='thousand'
          value={value}
        />
      ),
    },
    {
      title: 'Số Vé',
      dataIndex: 'SO_LUONG_VE_DAT',
      key: 'SO_LUONG_VE_DAT',
      sorter: (item1, item2) =>
        +item1['SO_LUONG_VE_DAT'] - +item2['SO_LUONG_VE_DAT'],
      align: 'center',
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'TONG_TIEN',
      key: 'TONG_TIEN',
      sorter: (item1, item2) => +item1['TONG_TIEN'] - +item2['TONG_TIEN'],
      align: 'center',
      render: (value) => (
        <NumberFormat
          thousandSeparator={true}
          displayType={'text'}
          thousandsGroupStyle='thousand'
          value={value}
        />
      ),
    },
    {
      title: 'Thanh Toán',
      dataIndex: 'TINH_TRANG_THANH_TOAN',
      key: 'TINH_TRANG_THANH_TOAN',
      align: 'center',
      render: (value) => (
        <>
          {value === 'Đã thanh toán' && <Tag color='green'>{value}</Tag>}
          {value === 'Đã hoàn tiền' && <Tag color='blue'>{value}</Tag>}
        </>
      ),
    },
    {
      title: 'Tình Trạng Đơn',
      dataIndex: 'TINH_TRANG_DON',
      key: 'TINH_TRANG_DON',
      align: 'center',
      render: (value) => (
        <>
          {value === 'Đã duyệt đơn' && <Tag color='green'>{value}</Tag>}
          {value === 'Đã hủy đơn' && <Tag color='red'>{value}</Tag>}
          {value === 'Đang xử lý' && <Tag color='orange'>{value}</Tag>}
        </>
      ),
    },
    {
      title: 'Thao Tác',
      key: 'THAO_TAC',
      render: (_, record) => {
        const handleShowOrderDetail = () => {
          const thItems = ['', 'Chi Tiết'];
          const tdItems = [
            {
              name: 'Mã đơn đặt',
              dataIndex: 'MA_DON_DAT',
            },
            {
              name: 'Tên Khách Hàng',
              dataIndex: 'TEN_KHACH_HANG',
            },
            {
              name: 'Loại Tour',
              dataIndex: 'LOAI_TOUR',
            },
            {
              name: 'Loại Vé',
              dataIndex: 'TEN_LOAI_VE',
            },
            {
              name: 'Tên Tour',
              dataIndex: 'TEN_TOUR',
            },
            {
              name: 'Điểm Đến',
              dataIndex: 'DIEM_DEN',
            },
            {
              name: 'Điểm Đi',
              dataIndex: 'DIEM_DI',
            },
            {
              name: 'Tỉnh/Thành Phố',
              dataIndex: 'TINH_THANH',
            },
            {
              name: 'Ngày Đi',
              dataIndex: 'NGAY_DAT',
            },
            {
              name: 'Giá Tour',
              dataIndex: 'GIA_TOUR',
            },
            {
              name: 'Số Lượng Vé Đặt',
              dataIndex: 'SO_LUONG_VE_DAT',
            },
            {
              name: 'Tổng Tiền',
              dataIndex: 'TONG_TIEN',
            },
            {
              name: 'Tình Trạng Thanh Toán',
              dataIndex: 'TINH_TRANG_THANH_TOAN',
            },
            {
              name: 'Tình Trạng Đơn',
              dataIndex: 'TINH_TRANG_DON',
            },
          ];
          Modal.info({
            title: 'Chi Tiết Đơn Đặt Tour',
            content: (
              <>
                <table className={classes.table}>
                  <thead>
                    <tr>
                      {thItems.map((name, index) => (
                        <th
                          key={index}
                          className={classes.th}
                          style={{ textAlign: 'center' }}
                        >
                          {name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tdItems.map((item, index) => (
                      <>
                        <tr key={index}>
                          <th className={classes.th}>{item.name}</th>
                          <td className={classes.td}>
                            {item.dataIndex === 'NGAY_DAT'
                              ? moment(record[item.dataIndex]).format(
                                  'DD-MM-YYYY',
                                )
                              : record[item.dataIndex]}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </>
            ),
            centered: true,
            width: 800,
          });
        };

        const handleAcceptOrder = async () => {
          const config = [
            {
              title: 'Mã vé',
              dataIndex: 'MAVE',
              key: 'MAVE',
            },
            {
              title: 'Tour',
              ellipsis: true,
              dataIndex: 'TENTOUR',
              key: 'TENTOUR',
            },
            {
              title: 'Loại tour',
              ellipsis: true,
              dataIndex: 'TEN_LOAI_TOUR',
              key: 'TEN_LOAI_TOUR',
            },
            {
              title: 'Loại vé',
              ellipsis: true,
              dataIndex: 'TEN_LOAI_VE',
              key: 'TEN_LOAI_VE',
            },
            {
              title: 'Giá vé',
              dataIndex: 'GIA_VE',
              key: 'GIA_VE',
              render: (value) => (
                <NumberFormat
                  thousandSeparator={true}
                  displayType={'text'}
                  thousandsGroupStyle='thousand'
                  value={value}
                />
              ),
            },
            {
              title: 'Ngày',
              dataIndex: 'NGAY_CO_HIEU_LUC',
              key: 'NGAY_CO_HIEU_LUC',
              render: (value) => moment(value).format('DD-MM-YYYY'),
            },
          ];
          let ids = [];
          const dataSource = tickets
            .filter((item) => {
              return (
                item.MA_TOUR === record.MA_TOUR &&
                item.MA_LOAI_VE == record.MA_LOAI_VE &&
                moment(item.NGAY_CO_HIEU_LUC).date() ===
                  moment(record.NGAY_DAT).date() &&
                item.GIA_VE === record.TONG_TIEN / record.SO_LUONG_VE_DAT
              );
            })
            .slice(0, record.SO_LUONG_VE_DAT);
          Modal.confirm({
            title: 'Duyệt Đơn Đặt',
            centered: true,
            okText: 'Duyệt đơn',
            cancelText: 'Hủy',
            content: (
              <>
                <Table
                  rowSelection={{
                    onChange: (_, selectedRow) => {
                      ids = selectedRow.map((item) => item.MAVE);
                    },
                  }}
                  dataSource={dataSource}
                  columns={config}
                />
              </>
            ),
            width: 1000,
            onOk: () => {
              if (!ids.length || ids.length < record.SO_LUONG_VE_DAT) {
                alert('Vui lòng chọn vé để duyệt đơn');
              } else {
                dispatch(
                  quanLyDonDatVeActions.acceptOrder(
                    record.MA_DON_DAT,
                    record.MA_KH,
                    ids,
                  ),
                );
              }
            },
          });
        };

        const handleDeclineOrder = () => {
          Modal.confirm({
            title: 'Xác nhận từ chối đơn',
            content: (
              <b>Bạn có chắc chắc muốn từ chối nhận đơn đặt Tour này không?</b>
            ),
            centered: true,
            okText: 'Xác nhận',
            cancelText: 'Hủy',
            onOk: () => {
              dispatch(quanLyDonDatVeActions.declineOrder(record.MA_DON_DAT));
            },
          });
        };

        const OneAction = () => (
          <Tooltip title='Chi Tiết' placement='bottom'>
            <Button
              icon={<FaEye />}
              className={cx(classes.btn)}
              type='primary'
              onClick={handleShowOrderDetail}
            ></Button>
          </Tooltip>
        );

        const Accepting = () => (
          <>
            <Tooltip title='Chi Tiết' placement='bottom'>
              <Button
                icon={<FaEye />}
                className={cx(classes.btn)}
                type='primary'
                onClick={handleShowOrderDetail}
              ></Button>
            </Tooltip>
            <Tooltip title='Hủy đơn' placement='bottom'>
              <Button
                icon={<FaTrashAlt />}
                className={cx(classes.btn)}
                type='danger'
                onClick={handleDeclineOrder}
              ></Button>
            </Tooltip>
          </>
        );

        const Handling = () => (
          <>
            <Tooltip title='Chi Tiết' placement='bottom'>
              <Button
                icon={<FaEye />}
                className={cx(classes.btn)}
                type='primary'
                onClick={handleShowOrderDetail}
              ></Button>
            </Tooltip>
            <Tooltip title='Duyệt đơn' placement='bottom'>
              <Button
                icon={<BsCheckLg />}
                className={cx(classes['btn-success'], classes.btn)}
                onClick={handleAcceptOrder}
              ></Button>
            </Tooltip>
            <Tooltip title='Từ chối đơn' placement='bottom'>
              <Button
                icon={<FaTimes />}
                className={cx(classes.btn)}
                type='danger'
                onClick={handleDeclineOrder}
              ></Button>
            </Tooltip>
          </>
        );

        return (
          <div className={classes.actions}>
            {record.TINH_TRANG_DON === 'Đang xử lý' ? (
              <Handling />
            ) : record.TINH_TRANG_DON === 'Đã duyệt đơn' ? (
              <Accepting />
            ) : (
              <OneAction />
            )}
          </div>
        );
      },
    },
  ];

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isShowModal && (
        <AlertPopup
          title='Thành Công'
          message='Thao tác thành công'
          type='success'
        />
      )}
      <Menutop />
      <Menuleft />
      <div className={classes.wrapper}>
        <div className={cx(classes.clearfix, classes.content)}>
          <h3 className={classes.title}>Danh Sác Đơn Đặt</h3>
          <Table
            columns={config}
            dataSource={orderList}
            pagination={{
              pageSize: 10,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default QLdondatve;
