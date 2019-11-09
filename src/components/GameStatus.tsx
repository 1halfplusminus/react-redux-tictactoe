import React from 'react';
import styled from 'styled-components';
import { Player } from '../types';

const Status = styled.div`
  font-size: 2rem;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export interface GameStatusProps {
  player: Player;
  winner: Player | 'equality' | null;
  reset: () => void;
}
const getGameStatus = ({
  winner,
  player,
}: Pick<GameStatusProps, 'winner' | 'player'>) => {
  switch (winner) {
    case 'O':
    case 'X':
      return ['', 'Winner:' + winner, ''];
    case 'equality':
      return ['', 'La parti est fini', ''];
    default:
      switch (player) {
        case 'X':
          return [`${player} - Ca va être à toi`, '', ''];
        case 'O':
          return ['', '', `${player} - Ca va être à toi`];
      }
  }
};

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  background: #3f51b5;
  color: white;
  transition: background-color 1s;
  :hover {
    background-color: #1a237e;
  }
`;

export const GameStatus = (props: GameStatusProps) => {
  const [leftStatus, centerStatus, rightStatus] = getGameStatus(props);
  const { reset } = props;
  return (
    <>
      <Status>{leftStatus}</Status>
      <Status>
        {centerStatus ? (
          <StyledButton onClick={reset}> Recommencez </StyledButton>
        ) : (
          undefined
        )}

        {centerStatus}
      </Status>
      <Status>{rightStatus}</Status>
    </>
  );
};
