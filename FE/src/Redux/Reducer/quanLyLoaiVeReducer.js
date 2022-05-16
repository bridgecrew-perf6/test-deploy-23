import * as quanLyLoaiVeActionTypes from './../Constants/quanLyLoaiVeActionTypes';

const initialState = {
  ticketTypes: []
};

const quanLyLoaiVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case quanLyLoaiVeActionTypes.SET_TICKET_TYPES: {
      return {
        ...state,
        ticketTypes: payload.ticketTypes
      };
    }
    default: {
      return state;
    }
  }
};

export default quanLyLoaiVeReducer;