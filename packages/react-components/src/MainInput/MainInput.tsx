import { Input, InputProps } from 'antd';
import React from 'react';

export const MainInput: React.FC<InputProps> = ({ ...restProps }) => {
  return <Input {...restProps} />;
};
