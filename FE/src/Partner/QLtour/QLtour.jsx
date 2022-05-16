import { Input, Modal, Table, Typography } from 'antd';
import axios from 'axios';
import cx from 'classnames';
import { useFormik } from 'formik';
import React, { useEffect, useState} from 'react';
import { FaPen, FaTimes } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import AlertPopup from './../../components/AlertPopup';
import LoadingSpinner from './../../components/LoadingSpinner';
import * as quanLyTourActions from './../../Redux/Action/quanLyTourActions';
import Menuleft from './../Menuleft';
import Menutop from './../Menutop';
import ButtonAction from './../QuanLyVe/ButtonAction';
import classes from './QLtour.module.css';
import NumberFormat from 'react-number-format';
import moment from 'moment';

const QLtour = () => {
  const [productList, setProductList] = useState([]);
  // const [loaiTour, setLoaiTour] = useState([]);
  // const navigate = useNavigate();
 
  useEffect(() => {
    getAlldate();
  }, []);
  const getAlldate = async () => {
    const respone = await axios.get("/api/products").then((res) => {
      setProductList(res.data);
      console.log(res.data);
    });
  };
  console.log("data =>", productList);

  // const onDelete = async (MATOUR) =>{
  //   if(window.confirm("Are you sure that wanted to delete this ")) {
  //     const respone =await axios.delete(`/api/products/${MATOUR}`).then((res) =>{
  //       console.log(res.data);
  //       console.log("Delete success");
  //       getAlldate();
  //     },[])
  //   }
  // }
  const [isShowTicketModal, setIsShowTicketModal] = useState(false);
  const [okText, setOkText] = useState('OK');
  const [cancelText, setCancelText] = useState('Hủy');
  const [modalTitle, setModalTitle] = useState('Modal');
  const [isUpdateTicket, setIsUpdateTicket] = useState(false);

  const formik = useFormik({
    initialValues: {
      TENLOAI: '',
    },
    validationSchema: Yup.object({
      TENLOAI: Yup.string()
        .required('Tên tour không được để trống')
        .max(20, 'Tên tour không dài hơn quá 20 ký tự')
        .trim()
        .test('checkDuplicate', 'Tên tour đã tồn tại', async (value) => {
          try {
            const { data } = await axios.get('/api/tourTypes');
            return !data.find(
              (item) => item.TENLOAI.toLowerCase() === value.toLowerCase(),
            );
          } catch (error) {
            return true;
          }
        }),
    }),
  });

  const dispatch = useDispatch();
  const { tourTypes } = useSelector((state) => state.quanLyTourState);
  const { isLoading, isShowModal } = useSelector((state) => state.appState);

  const setModalInfo = (title, okText, cancelText) => {
    setModalTitle(title);
    setOkText(okText);
    setCancelText(cancelText);
  };

  const handleNewTicketType = () => {
    setModalInfo('Tạo Tour', 'Tạo Tour', 'Hủy');
    setIsShowTicketModal(true);
  };

  

  const handleCancel = () => {
    setIsShowTicketModal(false);
    setIsUpdateTicket(false);
    formik.resetForm();
  };

  const columnConfigurations = [
    {
      title: 'Mã Tour',
      dataIndex: 'MATOUR',
      key: 'MATOUR',
      sorter: (item1, item2) => item1['MATOUR'] - item2['MATOUR'],
    },
    {
      title: 'Tên Loại Tour',
      dataIndex: 'TENLOAI',
      key: 'TENLOAI',
      sorter: (item1, item2) =>
        item1['TENLOAI'].localeCompare(item2['TENLOAI']),
    },
    {
      title: 'Tên Tour',
      dataIndex: 'TENTOUR',
      key: 'TENTOUR',
      sorter: (item1, item2) =>
        item1['TENTOUR'].localeCompare(item2['TENTOUR']),
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
      title: 'Ngày Đi',
      dataIndex: 'NGAY_DI',
      key: 'NGAY_DI',
      align: 'center',
      render: (value) => moment(value).format('DD-MM-YYYY'),
    },
    {
      title: 'Điểm Đi',
      dataIndex: 'DIEMDI',
      key: 'DIEMDI',
      sorter: (item1, item2) =>
        item1['DIEMDI'].localeCompare(item2['DIEMDI']),
    },
    {
      title: 'Điểm Đến',
      dataIndex: 'DIEMDEN',
      key: 'DIEMDEN',
      sorter: (item1, item2) =>
        item1['DIEMDEN'].localeCompare(item2['DIEMDEN']),
    },
    {
      title: 'Thao Tác',
      key: 'THAOTAC',
      render: (_, record) => {
        const handleDeleteTourType = () => {
          Modal.confirm({
            title: 'Xác nhận',
            content: (
              <span>
                Bạn có chắc muốn xóa loại tour <b>{record.TENLOAI}</b>?
              </span>
            ),
            centered: true,
            okText: 'Xóa',
            cancelText: 'Hủy',
            // onOk: () => {
            //   dispatch(quanLyLoaiTourActions.deleteTourType(record.MALOAI));
            // },
          });
        };

        const handleUpdateTourType = () => {
          formik.setValues(record);
          setModalInfo('Cập Nhật Loại Tour', 'Cập Nhật', 'Hủy');
          setIsShowTicketModal(true);
          setIsUpdateTicket(true);
        };
        return (
          <>
            <div className={classes.actions}>
              <ButtonAction
                buttonType='primary'
                icon={<FaPen />}
                placement='bottom'
                tooltipTitle='Cập nhật loại tour'
                handleClick={handleUpdateTourType}
              />
              <ButtonAction
                buttonType='danger'
                icon={<FaTimes />}
                placement='bottom'
                tooltipTitle='Xóa'
                handleClick={handleDeleteTourType}
              />
            </div>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Menutop />
      <Menuleft />
      <div className={classes.wrapper}>
        <div className={cx(classes.clearfix, classes.content)}>
          <h2 className={classes.content__header}>Quản Lý Tour</h2>
          <div className={classes.content__new}>
            <ButtonAction
              icon={<FiPlus />}
              placement='bottom'
              tooltipTitle='Tạo Tour'
              buttonType='success'
              buttonShape='round'
              buttonSize='large'
              handleClick={handleNewTicketType}
            >
              <span className={classes.content__new__content}>
                Tạo Tour
              </span>
            </ButtonAction>
          </div>
          <Table
            columns={columnConfigurations}
            dataSource={tourTypes}
            pagination={{ position: ['bottomLeft'], pageSize: 10 }}
          />
        </div>
        </div>
      {/* <div className={classes.dstour}>
      <div className={classes.btnthem}>
          <button onClick={() => navigate("/admin/tour/them")}>Tạo tour</button>
        </div>
        <table className={classes.table}>
          <tr>
            <th>Mã tour</th>
            <th>Loại</th>
            <th>Tên tour</th>
            <th>Giá tour</th>
            <th>Hình ảnh</th>
            <th>Ngày đi</th>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th></th>
          </tr>
        </table>
        <List
          grid={{ gutter: 4, column: 0 }}
          dataSource={productList}
          renderItem={(item) => (
            <List.Item>
              <div className={classes.items}>
                <div className={classes.element}>{item.MATOUR}</div>
                <div className={classes.element}>{item.TENLOAI}</div>
                <div className={classes.element}>{item.TENTOUR}</div>

                <div className={classes.element}>{item.GIATOUR} VND</div>

                <img
                  className={classes.hinhanh}
                  alt="example"
                  src={item.HINHANH}
                />
                <div className={classes.element}>{item.NGAYDI}</div>
                <div className={classes.element}>{item.DIEMDI}</div>
                <div className={classes.element}>{item.DIEMDEN}</div>
                <div className={classes.option}>
                  <div className={classes.xoa}>
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/delete-1432400-1211078.png" onClick={()=> onDelete(item.MATOUR)}/>
                  </div>
                  <div
                    className={classes.sua}
                    onClick={() => navigate("/admin/tour/" + item.MATOUR)}
                  >
                    <img src="https://banner2.cleanpng.com/20180417/eeq/kisspng-computer-icons-editing-icon-design-random-icons-5ad5ac7df28c06.7497951515239527659935.jpg" />
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div> */}
    </>
  );
};

export default QLtour;
