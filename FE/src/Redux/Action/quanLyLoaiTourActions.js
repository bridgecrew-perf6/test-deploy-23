import axios from 'axios';
import * as quanLyLoaiTourActionsType from './../Constants/quanLyLoaiTourActionTypes';
import * as appActions from './../Action/appActions';

const BASE_URL = '/api/tourTypes';

export const getAllTourTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(BASE_URL);
      dispatch({
        type: quanLyLoaiTourActionsType.SET_TOUR_TYPES,
        payload: {
          tourTypes: data
        }
      });
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createTourType = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.post(BASE_URL, payload);
      dispatch(getAllTourTypes());
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

export const updateTourType = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.put(
        `${ BASE_URL }/${ payload.MALOAI }`,
        payload,
      );
      dispatch(getAllTourTypes());
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

export const deleteTourType = (maLoaiTour) => {
  return async (dispatch) => {
    try {
      dispatch(appActions.showLoading());
      const { data } = await axios.delete(`${ BASE_URL }/${ maLoaiTour }`);
      dispatch(getAllTourTypes());
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
