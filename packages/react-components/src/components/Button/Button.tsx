import * as React from 'react';

export interface ButtonProps {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}