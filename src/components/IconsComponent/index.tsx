import React, {FC} from 'react';
import classNames from 'classnames';

import IconsSVG from "../../sprite.svg";
import { Iicons } from '../../types/types';

import style from './icon.module.scss';

const Icon: FC<Iicons> = ({name, className, width, height, fill, opacity = '', stroke = '', active, onClick, ...attrs}) => {

    const classes = classNames(
        className,
        {
          [style.pointer]: attrs.pointer,
          [style.hidden]: attrs.hidden,
        }        
    )
    
  return(
    <svg onClick={active ? null : onClick} className={`icon-${name} ${classes}`} width={width} height={height} fill={fill} opacity={opacity} stroke={stroke} {...attrs}>
        <use xlinkHref={`${IconsSVG}#icon-${name}`}/>
    </svg>
  )
}

export default Icon;

