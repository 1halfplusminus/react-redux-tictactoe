import { List, Map } from 'immutable';
import React from 'react';
import styled from 'styled-components';
import { Player } from '../types';
import { Board } from './Board';
import { GamePlayerInfo, GamePlayerInfoWrapper } from './GamePlayerInfo';
import { GameStatus } from './GameStatus';

export interface GameProps {
  squares: List<string>;
  onSquareClick: (index: number, player: Player) => void;
  player: Player;
  winner: Player | null;
  playerCount: Map<Player, { win: number; lose: number }>;
  reset: () => void;
}

const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const GameBoard = styled.div`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  padding-bottom: 5rem;
`;

const GamePlayersInfoWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  flex-basis: 15%;
  align-items: center;
`;

const GameStatusWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 0;
  flex-basis: 10%;
  flex-shrink: 250px;
`;

export const Game = ({
  winner,
  player,
  squares,
  onSquareClick,
  playerCount,
  reset,
}: GameProps) => {
  return (
    <GameWrapper>
      <GamePlayersInfoWrapper>
        <GamePlayerInfo
          count={playerCount.get('X')}
          avatar={require('./avatars/kowaru.png')}
        />
        <GamePlayerInfoWrapper />
        <GamePlayerInfo
          count={playerCount.get('O')}
          avatar={require('./avatars/rei.png')}
        />
      </GamePlayersInfoWrapper>
      <GameStatusWrapper>
        <GameStatus reset={reset} player={player} winner={winner} />
      </GameStatusWrapper>
      <GameBoard>
        <Board
          winner={winner}
          player={player}
          squares={squares}
          onSquareClick={onSquareClick}
        />
      </GameBoard>
    </GameWrapper>
  );
};
