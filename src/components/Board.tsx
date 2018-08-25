import { List } from "immutable";
import React = require("react");

import { Player } from "../types";
import { Square } from "./Square";

export interface BoardProps {
  player: Player;
  squares: List<string>;
  onSquareClick: (index: number, player: Player) => void;
  winner: Player | null;
}
export class Board extends React.Component<BoardProps> {
    public renderSquare(i) {
      const click = () => this.props.onSquareClick(i, this.props.player);
      return <Square value={this.props.squares.get(i)} onClick={click} />;
    }
    public render() {
      const status = (this.props.winner) ? "Winner: " + this.props.winner : "Next player: " + this.props.player;
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}
