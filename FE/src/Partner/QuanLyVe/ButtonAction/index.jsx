import { Button, Tooltip } from 'antd';
import React from 'react';
import classes from './styles.module.css';

const ButtonAction = ({
  tooltipTitle,
  placement,
  icon,
  buttonType,
  children,
  handleClick,
  buttonShape,
  buttonSize,
}) => {
  return (
    <>
      <Tooltip title={tooltipTitle} placement={placement}>
        <Button
          type={buttonType}
          icon={icon}
          className={classes.btn}
          onClick={handleClick || null}
          shape={buttonShape || 'default'}
          size={buttonSize || 'middle'}
        >
          {children}
        </Button>
      </Tooltip>
    </>
  );
};

export default React.memo(ButtonAction);
