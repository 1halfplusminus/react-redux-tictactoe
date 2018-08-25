import { List } from "immutable";
import React = require("react");

import { Player } from "../types";
import { Board } from "./Board";

export interface GameProps {
  squares: List<string>;
  onSquareClick: (index: number, player: Player) => void;
  player: Player;
  winner: Player | null;
}
export class Game extends React.Component<GameProps, {}> {
    public render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board
              winner={this.props.winner}
              player={this.props.player}
              squares={this.props.squares}
              onSquareClick={this.props.onSquareClick}
            />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}
