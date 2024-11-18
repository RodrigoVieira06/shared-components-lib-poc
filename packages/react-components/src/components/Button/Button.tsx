import { Button } from 'antd';
import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
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
  href?: string;
}

export const MainButton: React.FC<ButtonProps> = ({
  children,
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
  href,
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
      href={href}
      {...restProps}
    >
      {icon && iconPosition === "start" && (
        <span className={classNames.icon} style={styles.icon}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "end" && (
        <span className={classNames.icon} style={styles.icon}>
          {icon}
        </span>
      )}
    </Button>
  );
};
