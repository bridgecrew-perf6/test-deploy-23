import * as quanLyDonDatVeActionTypes from './../Constants/quanLyDonDatVeActionTypes';
import * as appActions from './appActions';
import axios from 'axios';

const BASE_URL = '/api/dondatve';

export const getAllOrderList = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL);
      dispatch({
        type: quanLyDonDatVeActionTypes.SET_ORDER_LIST,
        payload: {
          orderList: data,
        },
      });
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const declineOrder = (maDonDat) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.delete(`${ BASE_URL }/${ maDonDat }`);
      dispatch(getAllOrderList());
      dispatch(appActions.showModal());
      setTimeout(() => {
        dispatch(appActions.hideLoading());
      }, 500);
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getTicketByDonDatTour = () => {
  const api = `/api/getTicktByDDT`;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(api);
      dispatch({
        type: quanLyDonDatVeActionTypes.SET_TICKETS,
        payload: {
          tickets: data,
        },
      });
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const acceptOrder = (maDonDat, maKH, danhSachCacVe) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.put(`${ BASE_URL }/${ maDonDat }`, {
        danhSachCacVe,
        maKH
      });
      dispatch(getAllOrderList());
      dispatch(getTicketByDonDatTour());
      dispatch(appActions.showModal());
      setTimeout(() => {
        dispatch(appActions.hideLoading());
      }, 500);
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};
