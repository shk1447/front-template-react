import React from 'react';
import { styled } from '@mui/material/styles';
import { Dialog as _Dialog, DialogProps as _DialogProps } from '@mui/material';
import {
  DialogTitle as _DialogTitle,
  DialogTitleProps as _DialogTitleProps,
} from '@mui/material';
import {
  DialogContent as _DialogContent,
  DialogContentProps as _DialogContentProps,
} from '@mui/material';
import {
  DialogActions as _DialogActions,
  DialogActionsProps as _DialogActionsProps,
} from '@mui/material';

export type DialogProps = _DialogProps;
export type DialogTitleProps = _DialogTitleProps;
export type DialogContentProps = _DialogContentProps;
export type DialogActionsProps = _DialogActionsProps;

export const CustomDialog = styled(({ ...props }: DialogProps) => (
  <_Dialog {...props} />
))(({ theme: _ }) => ({}));

export const CustomDialogTitle = styled(({ ...props }: DialogTitleProps) => (
  <_DialogTitle {...props} />
))(({ theme: _ }) => ({}));

export const CustomDialogContent = styled(
  ({ ...props }: DialogContentProps) => <_DialogContent {...props} />,
)(({ theme: _ }) => ({}));

export const CustomDialogActions = styled(
  ({ ...props }: DialogActionsProps) => <_DialogActions {...props} />,
)(({ theme: _ }) => ({}));

export const Dialog = ({ ...props }: DialogProps) => {
  return <CustomDialog {...props} />;
};

export const DialogTitle = ({ ...props }: DialogTitleProps) => {
  return <CustomDialogTitle {...props} />;
};

export const DialogContent = ({ ...props }: DialogContentProps) => {
  return <CustomDialogContent {...props} />;
};

export const DialogActions = ({ ...props }: DialogActionsProps) => {
  return <CustomDialogActions {...props} />;
};
