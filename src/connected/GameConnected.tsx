import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { makeAMove, restart } from '../actions';
import { Game } from '../components/Game';
import { Action, IAppState, Player } from '../types';

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSquareClick: (index: number, player: Player): void => {
      dispatch(makeAMove(index, player));
    },
    reset: () => {
      dispatch(restart());
    },
  };
};

const mapStateToProps = (state: IAppState) => {
  return {
    player: state.player,
    squares: state.squares,
    winner: state.winner,
    playerCount: state.playerCount,
  };
};
export const ConnectedGame = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
