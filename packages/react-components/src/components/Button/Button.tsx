import { Button } from 'antd';
import React, { ReactNode } from 'react';

export interface ButtonProps {
  text: string;
  type?: "default" | "primary" | "dashed" | "link" | "text";
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  danger?: boolean;
  block?: boolean;
  classNames?: {
    icon?: string;
  };
  styles?: {
    icon?: React.CSSProperties;
  };
}

export const MainButton: React.FC<ButtonProps> = ({
  text,
  type = "default",
  icon,
  iconPosition = "start",
  disabled = false,
  loading = false,
  danger = false,
  block = false,
  className,
  classNames = {},
  styles = {},
  ...restProps
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      loading={loading}
      danger={danger}
      block={block}
      className={className}
      {...restProps}
    >
      {icon && iconPosition === "start" && (
        <span className={classNames.icon} style={styles.icon}>
          {icon}
        </span>
      )}
      {text}
      {icon && iconPosition === "end" && (
        <span className={classNames.icon} style={styles.icon}>
          {icon}
        </span>
      )}
    </Button>
  );
};
