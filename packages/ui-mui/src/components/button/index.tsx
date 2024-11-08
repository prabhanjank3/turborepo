import React, { CSSProperties, ReactNode } from 'react';
import { Button, ButtonProps } from '@mui/material';

export type CustomButtonProps = ButtonProps & {
  label: string | ReactNode;
  bgColor?: CSSProperties['backgroundColor'];
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return <Button {...props}>{props.label}</Button>;
};

export default CustomButton;
