import { connect, MapDispatchToProps } from "react-redux";
import { Dispatch } from "redux";

import { makeAMove } from "../actions";
import { Game, GameProps } from "../components/Game";
import { Action, IAppState, Player } from "../types";

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onSquareClick: (index: number, player: Player): void => {
            dispatch(makeAMove(index, player));
        },
    };
};

const mapStateToProps = (state: IAppState) => {
    return {
        player: state.player,
        squares: state.squares,
        winner: state.winner,
    };
};
export const ConnectedGame = connect(
    mapStateToProps, mapDispatchToProps,
)(Game);
