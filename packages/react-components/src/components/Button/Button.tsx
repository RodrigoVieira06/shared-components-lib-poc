import * as React from 'react';

export interface ButtonProps {
  name: string
}

export const Button = ({ name }: ButtonProps) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  );
}