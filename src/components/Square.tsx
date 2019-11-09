import React from 'react';
import styled from 'styled-components';

export interface SquareProps {
  onClick: () => void;
  value: string;
}
export const Square = ({ value, onClick }: SquareProps) => {
  return <SquareButton onClick={onClick}>{value}</SquareButton>;
};

export interface SquareButtonProps {
  size?: number | string;
}

export const SquareButton = styled.button<SquareButtonProps>`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: ${({ size }) => size};
  font-weight: bold;
  line-height: 34px;
  height: ${({ size }) => size};
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: ${({ size }) => size};
  :focus {
    outline: none;
  }
  :focus {
    background: #ddd;
  }
`;

SquareButton.defaultProps = {
  size: '20vh',
};
