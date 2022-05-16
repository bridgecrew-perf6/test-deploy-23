import React from 'react';
import { Spin } from 'antd';
import classes from './styles.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes.loading}>
      <Spin size='large' />
    </div>
  );
};

export default LoadingSpinner;
