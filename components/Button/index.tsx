import React from 'react';
import { ButtonProps } from '../../interfaces/propTypes';
import style from './Button.module.css';

const Button = ({ title, type, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={style.btn}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {disabled ? 'Processing...' : title}
    </button>
  );
};

export default Button;