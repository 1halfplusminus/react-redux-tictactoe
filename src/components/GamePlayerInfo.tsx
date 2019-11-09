import React from 'react';
import styled from 'styled-components';

const GamePlayerInfoWrapper = styled.div``;

const PlayerAvatar = styled.img`
  width: 100px;
  height: 100px;
`;

export interface GamePlayerInfoProps {
  avatar: string;
}

export const GamePlayerInfo = ({ avatar }: GamePlayerInfoProps) => {
  return (
    <GamePlayerInfoWrapper>
      <div className="player">
        <PlayerAvatar src={avatar} />
      </div>
      <p>
        Nombre de partie Gagné: <span />
      </p>
      <p>
        Nombre de partie Perdu: <span />
      </p>
    </GamePlayerInfoWrapper>
  );
};
