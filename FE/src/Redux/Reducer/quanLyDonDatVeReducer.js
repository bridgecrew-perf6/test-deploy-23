import * as quanLyDonDateVeActionsTypes from './../Constants/quanLyDonDatVeActionTypes';

const initialState = {
  orderList: null,
  tickets: null
};

const quanLyDonDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case quanLyDonDateVeActionsTypes.SET_ORDER_LIST: {
      return {
        ...state,
        orderList: payload.orderList
      };
    }
    case quanLyDonDateVeActionsTypes.SET_TICKETS: {
      return {
        ...state,
        tickets: payload.tickets
      };
    }
    default: {
      return state;
    }
  }
};

export default quanLyDonDatVeReducer;