import * as quanLyLoaiTourActionTypes from './../Constants/quanLyLoaiTourActionTypes';

const initialState = {
  tourTypes: [],
};

const quanLyLoaiTourReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case quanLyLoaiTourActionTypes.SET_TOUR_TYPES: {
      return {
        ...state,
        tourTypes: payload.tourTypes
      };
    }
    default: {
      return state;
    }
  }
};

export default quanLyLoaiTourReducer;