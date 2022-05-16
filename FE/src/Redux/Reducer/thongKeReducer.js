import * as thongKeActionTypes from './../Constants/thongKeActionTypes';

const initialState = {
  thongKeData: [],
  saoLuuData: [],
};

const thongKeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case thongKeActionTypes.SET_THONG_KE_DATA: {
      return {
        ...state,
        thongKeData: payload.thongKeData,
        saoLuuData: payload.thongKeData,
      };
    }
    case thongKeActionTypes.FILTER_BY_THANG: {
      const data = state.saoLuuData.filter((item) =>
        payload.thang ? item.THANG === payload.thang : true,
      );
      return {
        ...state,
        thongKeData: data,
      };
    }
    default: {
      return state;
    }
  }
};

export default thongKeReducer;
