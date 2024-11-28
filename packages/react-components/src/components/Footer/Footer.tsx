import React from 'react';

export interface FooterProps {
  id?: string;
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return <div id={id}></div>;
};
