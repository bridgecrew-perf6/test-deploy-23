import * as appActionTypes from './../Constants/appActionTypes';

export const showLoading = () => ({
  type: appActionTypes.SHOW_LOADING
});

export const hideLoading = () => ({
  type: appActionTypes.HIDE_LOADING
});

export const showModal = () => ({
  type: appActionTypes.SHOW_MODAL
});

export const hideModal = () => ({
  type: appActionTypes.HIDE_MODAL
});
