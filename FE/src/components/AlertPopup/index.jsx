import * as appActions from './../../Redux/Action/appActions';
import { Modal } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const ReachableContext = React.createContext();

const config = (title, message, dispatch) => ({
  title: title,
  content: (
    <>
      <ReachableContext.Consumer>
        {() => <i>{message}</i>}
      </ReachableContext.Consumer>
    </>
  ),
  centered: true,
  onOk: () => {
    dispatch(appActions.hideModal());
  },
});

const AlertPopup = ({ type, title, message }) => {
  const dipatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  useEffect(() => {
    switch (type) {
      case 'success': {
        modal.success(config(title, message, dipatch));
        break;
      }
      case 'error': {
        modal.error(config(title, message, dipatch));
        break;
      }
      case 'info': {
        modal.info(config(title, message, dipatch));
        break;
      }
    }
  }, []);

  return (
    <>
      <ReachableContext.Provider value='Light'>
        {contextHolder}
      </ReachableContext.Provider>
    </>
  );
};

export default AlertPopup;
