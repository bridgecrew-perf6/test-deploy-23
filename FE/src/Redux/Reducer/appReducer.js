import * as appActionTypes from './../Constants/appActionTypes';

const initialState = {
  isLoading: false,
  isShowModal: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appActionTypes.SHOW_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case appActionTypes.HIDE_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case appActionTypes.SHOW_MODAL: {
      return {
        ...state,
        isShowModal: true,
      };
    }
    case appActionTypes.HIDE_MODAL: {
      return {
        ...state,
        isShowModal: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
