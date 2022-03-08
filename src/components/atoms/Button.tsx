import React from 'react';
import { styled } from '@mui/material/styles';
import { Button as _Button, ButtonProps as _ButtonProps } from '@mui/material';

export type ButtonProps = _ButtonProps;

export const CustomButton = styled(({ ...props }: ButtonProps) => (
  <_Button {...props} />
))(({ theme: _ }) => ({}));

export const Button = ({ ...props }: ButtonProps) => {
  return <CustomButton {...props} />;
};
