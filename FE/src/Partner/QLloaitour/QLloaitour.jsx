import { Input, Modal, Table, Typography } from 'antd';
import axios from 'axios';
import cx from 'classnames';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { FaPen, FaTimes } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import AlertPopup from './../../components/AlertPopup';
import LoadingSpinner from './../../components/LoadingSpinner';
import * as quanLyLoaiTourActions from './../../Redux/Action/quanLyLoaiTourActions';
import Menuleft from './../Menuleft';
import Menutop from './../Menutop';
import ButtonAction from './../QuanLyVe/ButtonAction';
import classes from './styles.module.css';

const QLloaitour = () => {
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
        .required('Tên loại tour không được để trống')
        .max(20, 'Tên loại tour không dài hơn quá 20 ký tự')
        .trim()
        .test('checkDuplicate', 'Tên loại tour đã tồn tại', async (value) => {
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
  const { tourTypes } = useSelector((state) => state.quanLyLoaiTourState);
  const { isLoading, isShowModal } = useSelector((state) => state.appState);

  const setModalInfo = (title, okText, cancelText) => {
    setModalTitle(title);
    setOkText(okText);
    setCancelText(cancelText);
  };

  const handleNewTicketType = () => {
    setModalInfo('Tạo Loại Tour', 'Tạo Loại Tour', 'Hủy');
    setIsShowTicketModal(true);
  };

  const handleOk = async () => {
    const error = await formik.validateForm();
    if (Object.keys(error).length) {
      formik.setTouched(error);
    } else {
      isUpdateTicket
        ? dispatch(quanLyLoaiTourActions.updateTourType(formik.values))
        : dispatch(quanLyLoaiTourActions.createTourType(formik.values));
      formik.resetForm();
      setIsShowTicketModal(false);
    }
  };

  const handleCancel = () => {
    setIsShowTicketModal(false);
    setIsUpdateTicket(false);
    formik.resetForm();
  };

  const columnConfigurations = [
    {
      title: 'Mã Loại Tour',
      dataIndex: 'MALOAI',
      key: 'MALOAI',
      sorter: (item1, item2) => item1['MALOAI'] - item2['MALOAI'],
    },
    {
      title: 'Tên Loại Tour',
      dataIndex: 'TENLOAI',
      key: 'TENLOAI',
      sorter: (item1, item2) =>
        item1['TENLOAI'].localeCompare(item2['TENLOAI']),
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
            onOk: () => {
              dispatch(quanLyLoaiTourActions.deleteTourType(record.MALOAI));
            },
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

  useEffect(() => {
    dispatch(quanLyLoaiTourActions.getAllTourTypes());
  }, []);

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
          <h2 className={classes.content__header}>Quản Lý Loại Tour</h2>
          <div className={classes.content__new}>
            <ButtonAction
              icon={<FiPlus />}
              placement='bottom'
              tooltipTitle='Tạo Loại Tour'
              buttonType='success'
              buttonShape='round'
              buttonSize='large'
              handleClick={handleNewTicketType}
            >
              <span className={classes.content__new__content}>
                Tạo Loại Tour
              </span>
            </ButtonAction>
          </div>
          <Table
            columns={columnConfigurations}
            dataSource={tourTypes}
            pagination={{ position: ['bottomLeft'], pageSize: 10 }}
          />
        </div>
        <Modal
          visible={isShowTicketModal}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          okText={okText}
          cancelText={cancelText}
          title={modalTitle}
        >
          <form>
            <div className={classes['form-group']}>
              <label htmlFor='TENLOAI' className={classes['form-label']}>
                Tên Loại Vé
              </label>
              <Input
                id='TENLOAI'
                addonBefore='Tên Loại Tour'
                placeholder='Nhập Tên Loại Tour'
                className={classes['form-control']}
                {...formik.getFieldProps('TENLOAI')}
              />
              {formik.touched.TENLOAI && formik.errors.TENLOAI ? (
                <Typography.Text
                  type='danger'
                  className={classes['error-message']}
                >
                  {formik.errors.TENLOAI}
                </Typography.Text>
              ) : null}
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default QLloaitour;
