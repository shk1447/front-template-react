import React from 'react';
import { styled } from '@mui/material/styles';
import {
  InputBase as _InputBase,
  InputBaseProps as _InputBaseProps,
} from '@mui/material';

export type InputBaseProps = _InputBaseProps;

export const CustomInputBase = styled(({ ...props }: InputBaseProps) => (
  <_InputBase {...props} />
))(({ theme: _ }) => ({}));

export const InputBase = ({ ...props }: InputBaseProps) => {
  return <CustomInputBase {...props} />;
};
