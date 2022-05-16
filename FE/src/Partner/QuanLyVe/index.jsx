import { DatePicker, Input, Modal, Select, Table, Typography } from 'antd';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import AlertPopup from '../../components/AlertPopup';
import LoadingSpinner from '../../components/LoadingSpinner';
import Menuleft from '../Menuleft';
import Menutop from '../Menutop';
import * as quanLyTourActions from './../../Redux/Action/quanLyTourActions';
import * as quanLyLoaiVeActions from './../../Redux/Action/quanLyLoaiVeActions';
import * as quanLyVeActions from './../../Redux/Action/quanLyVeActions';
import ButtonAction from './ButtonAction';
import { createColumnConfigurations } from './configColumn';
import styles from './styles.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const QuanLyVe = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('Basic Modal');
  const [modalOkTitle, setModalOkTitle] = useState('Ok');
  const [modalCancelTitle, setModalCancelTitle] = useState('Cancel');
  const [columnConfigurations, setColumnConfigurations] = useState([]);
  const [isUpdateTicket, setsIUpdateTicket] = useState(false);

  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.quanLyVeState.tickets);
  const { isLoading, isShowModal } = useSelector((state) => state.appState);
  const { tours } = useSelector((state) => state.quanLyTourState);
  const { ticketTypes } = useSelector((state) => state.quanLyLoaiVeState);

  const formik = useFormik({
    initialValues: {
      MATOUR: '',
      LOAIVE: '',
      GIAVE: '',
      NGAYCOHIEULUC: '',
    },
    validationSchema: Yup.object({
      MATOUR: Yup.string()
        .required('Loại Tour không được để trống!')
        .typeError('Loại Tour không được để trống!'),
      LOAIVE: Yup.string()
        .required('Loại Vé không được để trống!')
        .typeError('Loại Vé không được để trống!'),
      GIAVE: Yup.number()
        .moreThan(-1, 'Giá vé phải lớn hơn hoặc bằng 0')
        .required('Vui lòng nhập giá vé!')
        .typeError('Giá vé phải là số!'),
      NGAYCOHIEULUC: Yup.date()
        .required('Vui lòng chọn ngày có hiệu lực!')
        .min(
          new Date(),
          `Vui lòng chọn ngày có hiệu lực từ ngày ${
            new Date().getDate() + 1
          } trở đi!`,
        )
        .typeError('Vui lòng chọn ngày có hiệu lực'),
    }),
  });

  const setModalInfo = (title, okText, cancelText) => {
    setModalTitle(title);
    setModalOkTitle(okText);
    setModalCancelTitle(cancelText);
  };

  const handleCreateNewTicket = () => {
    setModalInfo('Tạo Vé', 'Hoàn Tất', 'Hủy');
    setIsModalVisible(true);
  };

  const showUpdateModal = () => {
    setModalInfo('Cập Nhật Vé', 'Cập Nhật', 'Hủy');
    setIsModalVisible(true);
    setsIUpdateTicket(true);
  };

  const handleOk = async () => {
    const error = await formik.validateForm();
    if (Object.keys(error).length) {
      formik.setTouched(error);
    } else {
      const payload = {
        ...formik.values,
        NGAYCOHIEULUC: formik.values.NGAYCOHIEULUC._d,
      };
      const updatePayload = {
        MATOUR: formik.values.MATOUR,
        LOAIVE: formik.values.LOAIVE,
        GIAVE: formik.values.GIAVE,
        NGAYCOHIEULUC: formik.values.NGAYCOHIEULUC._d,
        MAVE: formik.values.MAVE,
        NGAYTAO: formik.values.NGAYTAO,
        MAVE: formik.values.MAVE,
      };
      dispatch(
        isUpdateTicket
          ? quanLyVeActions.updateTicket(updatePayload)
          : quanLyVeActions.createTicket(payload),
      );
      formik.resetForm();
      setsIUpdateTicket(false);
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    formik.resetForm();
    setIsModalVisible(false);
    setsIUpdateTicket(false);
  };

  useEffect(() => {
    dispatch(quanLyVeActions.getAllTickets());
    dispatch(quanLyLoaiVeActions.getAllTicketTypes());
    dispatch(quanLyTourActions.getAllTours());
  }, []);

  useEffect(() => {
    setColumnConfigurations(
      createColumnConfigurations(tickets, dispatch, showUpdateModal, formik),
    );
  }, [tickets]);

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
      <div className={styles.ticket__wrapper}>
        <div className={cx(styles.clearfix, styles.ticket__content)}>
          <h2 className={styles.ticket__content__header}>Quản Lý Vé</h2>
          <div className={styles.ticket__content__new}>
            <ButtonAction
              icon={<FiPlus />}
              placement='bottom'
              tooltipTitle='Tạo Vé'
              buttonType='success'
              buttonShape='round'
              buttonSize='large'
              handleClick={handleCreateNewTicket}
            >
              <span className={styles.ticket__content__new__content}>
                Tạo Vé
              </span>
            </ButtonAction>
          </div>
          <Table
            dataSource={tickets}
            columns={columnConfigurations}
            pagination={{
              position: ['bottomLeft'],
              pageSize: 10,
            }}
          />
          <Modal
            centered
            title={modalTitle}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={modalOkTitle}
            cancelText={modalCancelTitle}
          >
            <form>
              <div className={styles['form-group']}>
                <label htmlFor='MATOUR' className={styles['form-label']}>
                  Tour
                </label>
                <Select
                  id='MATOUR'
                  placeholder='Chọn tour'
                  className={styles['form-control']}
                  value={formik.values.MATOUR || undefined}
                  onChange={(value) => formik.setFieldValue('MATOUR', value)}
                >
                  {tours.map((tour) => (
                    <Select.Option value={tour.MA_TOUR} key={tour.MA_TOUR}>
                      {tour.TEN_TOUR}
                    </Select.Option>
                  ))}
                </Select>
                {formik.touched.MATOUR && formik.errors.MATOUR ? (
                  <Typography.Text
                    type='danger'
                    className={styles['error-message']}
                  >
                    {formik.errors.MATOUR}
                  </Typography.Text>
                ) : null}
              </div>
              <div className={styles['form-group']}>
                <label htmlFor='LOAIVE' className={styles['form-label']}>
                  Loại Vé
                </label>
                <Select
                  id='LOAIVE'
                  placeholder='Chọn loại vé'
                  className={styles['form-control']}
                  value={formik.values.LOAIVE || undefined}
                  onChange={(value) => formik.setFieldValue('LOAIVE', value)}
                >
                  {ticketTypes.map((type) => (
                    <Select.Option value={type.MALOAI} key={type.MALOAI}>
                      {type.TENLOAI}
                    </Select.Option>
                  ))}
                </Select>
                {formik.touched.LOAIVE && formik.errors.LOAIVE ? (
                  <Typography.Text
                    type='danger'
                    className={styles['error-message']}
                  >
                    {formik.errors.LOAIVE}
                  </Typography.Text>
                ) : null}
              </div>
              <div className={styles['form-group']}>
                <label htmlFor='NGAYCOHIEULUC' className={styles['form-label']}>
                  Ngày Có Hiệu Lực
                </label>
                <DatePicker
                  id='NGAYCOHIEULUC'
                  placeholder='Ngày có hiệu lực'
                  className={styles['form-control']}
                  format='DD/MM/YYYY'
                  value={formik.values.NGAYCOHIEULUC}
                  onChange={(value) =>
                    formik.setFieldValue('NGAYCOHIEULUC', value)
                  }
                />
                {formik.touched.NGAYCOHIEULUC && formik.errors.NGAYCOHIEULUC ? (
                  <Typography.Text
                    type='danger'
                    className={styles['error-message']}
                  >
                    {formik.errors.NGAYCOHIEULUC}
                  </Typography.Text>
                ) : null}
              </div>
              <div className={styles['form-group']}>
                <label htmlFor='GIAVE' className={styles['form-label']}>
                  Giá Vé
                </label>
                <Input
                  id='GIAVE'
                  addonBefore='Giá Vé'
                  placeholder='Nhập giá vé'
                  className={styles['form-control']}
                  {...formik.getFieldProps('GIAVE')}
                />
                {formik.touched.GIAVE && formik.errors.GIAVE ? (
                  <Typography.Text
                    type='danger'
                    className={styles['error-message']}
                  >
                    {formik.errors.GIAVE}
                  </Typography.Text>
                ) : null}
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default QuanLyVe;
