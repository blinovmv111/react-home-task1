import React, {FC} from 'react';
import classNames from 'classnames';

import style from './button.module.scss';

interface IbuttonProps {
    children: React.ReactChild | React.ReactNode,
    onClick: (() => void),
    className: string,
    disabled?: boolean,
    active?: boolean,
    href?: string,
    main?: boolean
}

const Button: FC<IbuttonProps> = ({children, onClick, className, disabled, active, main, ...attrs}) => {

  const onClickAction = (e: any) => {
    if (disabled) {
      e.preventDefault();
    }
    return onClick();
  };

  const classes = classNames(
      {
        [style.main]: main,
      },    
    style.btn,
    className,
    { active },
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
