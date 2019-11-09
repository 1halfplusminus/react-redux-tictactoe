import React from 'react';
import styled from 'styled-components';

export const GamePlayerInfoWrapper = styled.div`
  flex-direction: row;
  display: flex;
  flex-basis: 25%;
`;
const GamePlayerInfoBox = styled.div`
  flex-direction: column;
  justify-content: center;
  flex: 1;
  display: flex;
`;

const PlayerAvatar = styled.img`
  width: 100px;
  height: 100px;
`;

export interface GamePlayerInfoProps {
  avatar: string;
  count: {
    win: number;
    lose: number;
  };
}

export const GamePlayerInfo = ({
  avatar,
  count: { win, lose },
}: GamePlayerInfoProps) => {
  return (
    <GamePlayerInfoWrapper>
      <div className="player">
        <PlayerAvatar src={avatar} />
      </div>
      <GamePlayerInfoBox>
        <p>
          Nombre de partie Gagné: {win}
          <span />
        </p>
        <p>
          Nombre de partie Perdu: {lose}
          <span />
        </p>
      </GamePlayerInfoBox>
    </GamePlayerInfoWrapper>
  );
};
