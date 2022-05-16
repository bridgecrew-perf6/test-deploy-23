import * as quanLyVeActionType from '../Constants/quanLyVeActionTypes';
import * as appActions from './../Action/appActions';
import axios from 'axios';

const BASE_URL = '/api/veproducts';

export const fakeProcessing = (dispatch) => {
  dispatch(appActions.showModal());
  setTimeout(() => {
    dispatch(appActions.hideLoading());
  }, 500);
};

export const getAllTickets = () => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.get(BASE_URL);
      dispatch({
        type: quanLyVeActionType.SET_TICKETS,
        payload: {
          tickets: data,
        },
      });
      setTimeout(() => {
        dispatch(appActions.hideLoading());
      }, 500);
      return data;
    } catch (error) {
      alert(error.message);
      dispatch(appActions.hideLoading());
    }
  };
};

export const createTicket = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(BASE_URL, payload);
      dispatch(getAllTickets());
      fakeProcessing(dispatch);
      return data;
    } catch (error) {
      alert(error.message);
      dispatch(appActions.hideLoading());
    }
  };
};

export const updateTicket = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${ BASE_URL }/${ payload.MAVE }`, payload);
      dispatch(getAllTickets());
      fakeProcessing(dispatch);
      return data;
    } catch (error) {
      alert(error.message);
      dispatch(appActions.hideLoading());
    }
  };
};

export const deleteTicket = (maVe) => {
  const api = `/api/veproducts/${ maVe }`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(api);
      dispatch(getAllTickets());
      fakeProcessing(dispatch);
      return data;
    } catch (error) {
      alert(error.message);
      dispatch(appActions.hideLoading());
    }
  };
};
