import { List } from 'immutable';
import React from 'react';
import styled from 'styled-components';
import { Player } from '../types';
import { Square } from './Square';

export interface BoardProps {
  player: Player;
  squares: List<string>;
  onSquareClick: (index: number, player: Player) => void;
  winner: Player | null;
}

const BoardRow = styled.div`
  ::after {
    clear: both;
    content: '';
    display: table;
  }
`;
const BoardWrapper = styled.div``;

export const Board = ({ onSquareClick, player, squares }: BoardProps) => {
  const renderSquare = i => {
    const click = () => onSquareClick(i, player);
    return <Square value={squares.get(i)} onClick={click} />;
  };
  return (
    <BoardWrapper>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </BoardWrapper>
  );
};
