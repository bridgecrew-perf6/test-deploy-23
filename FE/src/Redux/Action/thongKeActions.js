import * as thongKeActionTypes from './../Constants/thongKeActionTypes';
import axios from 'axios';

const BASE_URL = '/api/thongKe';

export const layThongTinThongKe = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ BASE_URL }`);
      dispatch({
        type: thongKeActionTypes.SET_THONG_KE_DATA,
        payload: {
          thongKeData: data,
        },
      });
      return data;
    } catch (error) {
      alert(error.message);
    }
  };
};

export const layThongTinThongKeTheoThang = (thang) => {
  return {
    type: thongKeActionTypes.FILTER_BY_THANG,
    payload: {
      thang,
    },
  };
};
