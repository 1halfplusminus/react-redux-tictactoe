import React from 'react';
import styled from 'styled-components';

const GamePlayerInfoWrapper = styled.div`
  flex-direction: row;
  display: flex;
`;
const GamePlayerInfoBox = styled.div`
  flex-direction: column;
`;

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
      <GamePlayerInfoBox>
        <p>
          Nombre de partie Gagné: <span />
        </p>
        <p>
          Nombre de partie Perdu: <span />
        </p>
      </GamePlayerInfoBox>
    </GamePlayerInfoWrapper>
  );
};
