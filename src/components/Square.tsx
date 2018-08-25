import React = require("react");

export interface SquareProps { onClick: () => void; value: string; }
export function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
