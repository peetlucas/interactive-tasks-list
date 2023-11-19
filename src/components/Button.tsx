import React from 'react';
import { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ color = 'purple', text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="bg-purple-500 hover:bg-purple-600 text-white px-4 rounded-sm"
    >
      {text}
    </button>
  );
};

export default Button;

