import React from 'react';

export interface InputProps {
  id?: string;
}

export const MainInput: React.FC<InputProps> = ({ id }) => {
  return (
    <input id={id} />
  );
};
