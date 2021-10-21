import React, {FC, InputHTMLAttributes} from 'react';
import classNames from 'classnames';

import style from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    className: string,
    attrs?: Object | undefined
}

const Input: FC<InputProps> = ({
    name, className, ...attrs
  }) => {

    return (
        <input
            name={name}
            className={className}
            {...attrs}
        />
    );
};

export default Input;