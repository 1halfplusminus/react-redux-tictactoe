import { List } from 'immutable';
import React from 'react';
import styled from 'styled-components';
import { Player } from '../types';
import { Board } from './Board';
import { GamePlayerInfo } from './GamePlayerInfo';

export interface GameProps {
  squares: List<string>;
  onSquareClick: (index: number, player: Player) => void;
  player: Player;
  winner: Player | null;
}

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const GameBoard = styled.div``;

const GamePlayersInfoWrapper = styled.div``;

export const Game = ({ winner, player, squares, onSquareClick }: GameProps) => {
  return (
    <GameWrapper>
      <GamePlayersInfoWrapper>
        <GamePlayerInfo avatar={require('./avatars/kowaru.png')} />
      </GamePlayersInfoWrapper>
      <GameBoard>
        <Board
          winner={winner}
          player={player}
          squares={squares}
          onSquareClick={onSquareClick}
        />
      </GameBoard>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </GameWrapper>
  );
};
