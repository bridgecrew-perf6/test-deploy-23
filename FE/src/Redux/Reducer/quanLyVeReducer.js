import * as quanLyActionTypes from '../Constants/quanLyVeActionTypes';

const initialState = {
  tickets: [],
};

const quanLyVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case quanLyActionTypes.SET_TICKETS: {
      return {
        ...state,
        tickets: payload.tickets,
      };
    }
    default: {
      return state;
    }
  }
};

export default quanLyVeReducer;
