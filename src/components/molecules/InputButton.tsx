import React from 'react';
import styled from '@emotion/styled';
import { Button, ButtonProps } from '../atoms/Button';
import { InputBase, InputBaseProps } from '../atoms/InputBase';

const StdWrapper = styled.div`
  display: flex;
  gap: 5px;
  &:nth-child(1) : {
    flex: 1;
  }
  &:nth-child(2) : {
    flex: 0.5;
  }
`;
export type InputButtonProps = ButtonProps & InputBaseProps;

export const InputButton = (props: InputButtonProps) => {
  const inputProps = props as InputBaseProps;
  const buttonProps = props as ButtonProps;
  return (
    <StdWrapper>
      <InputBase {...inputProps}></InputBase>
      <Button {...buttonProps}></Button>
    </StdWrapper>
  );
};
