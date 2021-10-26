import React, {FC} from 'react';
import classNames from 'classnames';
import {IbuttonProps} from '../../types/types';

import style from './button.module.scss';

const Button: FC<IbuttonProps> = ({children, onClick, className, disabled, ...attrs}) => {

  const onClickAction = (e: any) => {
    if (disabled) {
      e.preventDefault();
    }
    return onClick();
  };

  const classes = classNames(    
    style.btn,
    className,
  );

  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </Tag>
  );
};

export default Button;
