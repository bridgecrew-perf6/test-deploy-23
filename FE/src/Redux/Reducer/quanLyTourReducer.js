import * as quanLyTourActionTypes from './../Constants/quanLyTourActionTypes';

const initialState = {
  tours: [],
};

const quanLyTourReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case quanLyTourActionTypes.SET_TOURS: {
      return {
        ...state,
        tours: payload.tours,
      };
    }
    default: {
      return state;
    }
  }
};

export default quanLyTourReducer;
