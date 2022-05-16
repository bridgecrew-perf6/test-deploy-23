import axios from 'axios';
import * as quanLyLoaiVeActionTypes from './../Constants/quanLyLoaiVeActionTypes';
import * as appActions from './appActions';

const BASE_URL = '/api/ticketTypes';

export const getAllTicketTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL);
      dispatch({
        type: quanLyLoaiVeActionTypes.SET_TICKET_TYPES,
        payload: {
          ticketTypes: data,
        },
      });
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createTicketType = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.post(BASE_URL, payload);
      dispatch(getAllTicketTypes());
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

export const updateTicketType = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.put(
        `${ BASE_URL }/${ payload.MALOAI }`,
        payload,
      );
      dispatch(getAllTicketTypes());
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

export const deleteTicketType = (maLoaiVe) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.delete(`${ BASE_URL }/${ maLoaiVe }`);
      dispatch(getAllTicketTypes());
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
