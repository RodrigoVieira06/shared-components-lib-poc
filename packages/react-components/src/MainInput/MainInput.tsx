import React from 'react';

export interface InputProps {
  id?: string;
}

const MainInput: React.FC<InputProps> = ({ id }) => {
  return (
    <input id={id} />
  );
};

export default MainInput;