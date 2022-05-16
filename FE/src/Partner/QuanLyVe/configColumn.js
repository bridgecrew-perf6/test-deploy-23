import { Modal, Tag } from 'antd';
import moment from 'moment';
import { FaEye, FaPen, FaTimes } from 'react-icons/fa';
import { GrReturn } from 'react-icons/gr';
import NumberFormat from 'react-number-format';
import * as appActions from './../../Redux/Action/appActions';
import * as quanLyVeActions from './../../Redux/Action/quanLyVeActions';
import ButtonAction from './ButtonAction';
import classes from './styles.module.css';

export const TAG_CONFIG = {
  'Còn hiệu lực': {
    title: 'Còn hiệu lực',
    color: 'green',
  },
  'Đã được đặt': {
    title: 'Đã được đặt',
    color: 'blue',
  },
  'Đã quá hạn': {
    title: 'Đã quá hạn',
    color: 'yellow',
  },
  'Đã bị hủy': {
    title: 'Đã bị hủy',
    color: 'yellow',
  },
  'Đã bị xóa': {
    title: 'Đã bị xóa',
    color: 'red',
  },
};

const showModal = (type, config) => {
  Modal[type](config);
};

const constructFilterObj = (data, field) => {
  const values = data.reduce((acc, item) => {
    if (item[field]) {
      acc.push(item[field]);
    }
    return acc;
  }, []);
  const items = new Set(values);
  return Array.from(items).map((item) => {
    const count = data.reduce((acc, record) => {
      return record[field] === item ? acc + 1 : acc;
    }, 0);
    return { text: `${ item } (${ count })`, value: item };
  });
};

const countTicketByTinhTrang = (data, tinhTrang) => {
  return data.reduce((acc, record) => {
    return record['TINHTRANG'] === tinhTrang ? acc + 1 : acc;
  }, 0);
};

export const createColumnConfigurations = (
  data,
  dispatch,
  showUpdateModal,
  formik,
) => {
  return [
    {
      title: 'Mã Vé',
      dataIndex: 'MAVE',
      key: 'MAVE',
      sorter: (item1, item2) => +item1['MAVE'] - +item2['MAVE'],
      align: 'center',
    },
    {
      title: 'Tên Tour',
      dataIndex: 'TENTOUR',
      key: 'TENTOUR',
      filters: constructFilterObj(data, 'TENTOUR'),
      sorter: (item1, item2) =>
        item1['TENTOUR'].localeCompare(item2['TENTOUR']),
      onFilter: (value, record) => record['TENTOUR'] === value,
      ellipsis: true,
      align: 'center',
    },
    {
      title: 'Loại Tour',
      dataIndex: 'TEN_LOAI_TOUR',
      key: 'TEN_LOAI_TOUR',
      filters: constructFilterObj(data, 'TEN_LOAI_TOUR'),
      sorter: (item1, item2) =>
        item1['TEN_LOAI_TOUR'].localeCompare(item2['TEN_LOAI_TOUR']),
      onFilter: (value, record) => record['TEN_LOAI_TOUR'] === value,
      ellipsis: true,
      align: 'center',
    },
    {
      title: 'Loại Vé',
      dataIndex: 'LOAIVE',
      key: 'LOAIVE',
      filters: constructFilterObj(data, 'LOAIVE'),
      sorter: (item1, item2) => item1['LOAIVE'].localeCompare(item2['LOAIVE']),
      onFilter: (value, record) => record['LOAIVE'] === value,
      ellipsis: true,
      align: 'center',
    },
    {
      title: 'Khách Hàng',
      dataIndex: 'HOTEN',
      key: 'HOTEN',
      ellipsis: true,
      align: 'center',
    },
    {
      title: 'Giá Vé',
      dataIndex: 'GIAVE',
      key: 'GIAVE',
      render: (value) => (
        <NumberFormat
          thousandSeparator={true}
          displayType={'text'}
          thousandsGroupStyle='thousand'
          value={value}
        />
      ),
      sorter: (item1, item2) => +item1['GIAVE'] - +item2['GIAVE'],
      align: 'center',
    },
    {
      title: 'Ngày Tạo Vé',
      dataIndex: 'NGAYTAO',
      key: 'NGAYTAO',
      render: (value) => moment(value).format('DD-MM-YYYY'),
      sorter: (item1, item2) =>
        new Date(item1['NGAYTAO']).getTime() -
        new Date(item2['NGAYTAO']).getTime(),
    },
    {
      title: 'Hiệu Lực Tới Ngày',
      dataIndex: 'NGAYCOHIEULUC',
      key: 'NGAYCOHIEULUC',
      render: (value) => moment(value).format('DD-MM-YYYY'),
      sorter: (item1, item2) =>
        new Date(item1['NGAYCOHIEULUC']).getTime() -
        new Date(item2['NGAYCOHIEULUC']).getTime(),
    },
    {
      title: 'Tình Trạng Vé',
      dataIndex: 'TINHTRANG',
      key: 'TINHTRANG',
      render: (value) => {
        const tagType = TAG_CONFIG[value];
        return <Tag color={tagType.color}>{tagType.title}</Tag>;
      },
      filters: [
        {
          text: `Đã được đặt (${ countTicketByTinhTrang(data, 'Đã được đặt') })`,
          value: 'Đã được đặt',
        },
        {
          text: `Đã quá hạn (${ countTicketByTinhTrang(data, 'Đã quá hạn') })`,
          value: 'Đã quá hạn',
        },
        {
          text: `Còn hiệu lực (${ countTicketByTinhTrang(
            data,
            'Còn hiệu lực',
          ) })`,
          value: 'Còn hiệu lực',
        },
        {
          text: `Đã bị xóa (${ countTicketByTinhTrang(data, 'Đã bị xóa') })`,
          value: 'Đã bị xóa',
        },
        {
          text: `Đã bị hủy (${ countTicketByTinhTrang(data, 'Đã bị hủy') })`,
          value: 'Đã bị hủy',
        },
      ],
      onFilter: (value, record) => {
        return record.TINHTRANG === value;
      },
      align: 'center',
    },
    {
      title: 'Hành Động',
      key: 'HANHDONG',
      render: (_, record) => {
        const showConfirmDeletionModal = () => {
          showModal('confirm', {
            title: 'Xác Nhận',
            content: (
              <span>
                Bạn có chắc muốn xóa vé <b>{record.MAVE}</b> hay không?
              </span>
            ),
            onOk: () => {
              dispatch(appActions.showLoading());
              dispatch(quanLyVeActions.deleteTicket(record.MAVE));
            },
            okText: 'Xóa',
            cancelText: 'Hủy',
          });
        };

        const showUpdateTickerModal = () => {
          showUpdateModal();
          formik.setValues({
            ...record,
            MATOUR: record.MATOUR,
            LOAIVE: record.MA_LOAI_VE,
            GIAVE: record.GIAVE,
            NGAYCOHIEULUC: moment(record.NGAYCOHIEULUC),
          });
        };

        const showTicketDetail = () => {
          const thItems = ['', 'Chi Tiết'];
          const tdItems = [
            {
              name: 'Mã vé',
              dataIndex: 'MAVE',
            },
            {
              name: 'Tên tour',
              dataIndex: 'TENTOUR',
            },
            {
              name: 'Loại Tour',
              dataIndex: 'TEN_LOAI_TOUR',
            },
            {
              name: 'Loại vé',
              dataIndex: 'LOAIVE',
            },
            {
              name: 'Khách hàng',
              dataIndex: 'HOTEN',
            },
            {
              name: 'Giá vé',
              dataIndex: 'GIAVE',
            },
            {
              name: 'Ngày tạo vé',
              dataIndex: 'NGAYTAO',
              isDateTime: true,
            },
            {
              name: 'Hiệu lực tới ngày',
              dataIndex: 'NGAYCOHIEULUC',
              isDateTime: true,
            },
            {
              name: 'Tình trạng vé',
              dataIndex: 'TINHTRANG',
            },
          ];
          Modal.info({
            title: 'Chi Tiết Vé',
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
                            {item.isDateTime
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

        const BtnUpDateTicket = () => (
          <ButtonAction
            icon={<FaPen />}
            tooltipTitle='Cập nhật vé'
            placement='bottom'
            buttonType='primary'
            handleClick={showUpdateTickerModal}
          />
        );
        const BtnDeleteTicket = () => (
          <ButtonAction
            icon={<FaTimes />}
            tooltipTitle='Xóa vé'
            placement='bottom'
            buttonType='danger'
            handleClick={showConfirmDeletionModal}
          />
        );
        const BtnShowInfo = () => (
          <ButtonAction
            icon={<FaEye />}
            tooltipTitle='Chi tiết vé'
            placement='bottom'
            buttonType='default'
            handleClick={showTicketDetail}
          />
        );
        const BtnRevertTicket = () => (
          <ButtonAction
            icon={<GrReturn />}
            tooltipTitle='Khôi phục vé'
            placement='bottom'
            buttonType='primary'
          />
        );
        return (
          <div className={classes.ticket__content__table__actions}>
            <BtnShowInfo />
            {record.TINHTRANG === 'Đã quá hạn' && (
              <>
                <BtnDeleteTicket />
              </>
            )}
            {record.TINHTRANG === 'Đã bị hủy' && (
              <>
                <BtnRevertTicket />
              </>
            )}
            {record.TINHTRANG === 'Còn hiệu lực' && (
              <>
                <BtnUpDateTicket />
                <BtnDeleteTicket />
              </>
            )}
          </div>
        );
      },
    },
  ];
};
