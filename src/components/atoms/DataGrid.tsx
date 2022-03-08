import React from 'react';
import {
  DataGrid as _DataGrid,
  DataGridProps as _DataGridProps,
} from '@mui/x-data-grid';
import { styled } from '@mui/material';

export type DataGridProps = _DataGridProps;

export const CustomDataGrid = styled(({ ...props }: DataGridProps) => (
  <_DataGrid {...props} />
))(({ theme: _ }) => ({
  '&': {
    border: '0px',
  },
}));

export function DataGrid({ ...props }: DataGridProps) {
  return <CustomDataGrid {...props} />;
}
