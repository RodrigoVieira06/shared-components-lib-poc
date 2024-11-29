import React from 'react';
import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import ThemeProvider from '../../tokens/ThemeProvider';

export const MainCard: React.FC<AntCardProps> = ({
  content,
  children,
  ...restProps
}) => {
  return (
    <ThemeProvider>
      <AntCard {...restProps}>
        {content}
        {children}
      </AntCard>
    </ThemeProvider>
  );
};
