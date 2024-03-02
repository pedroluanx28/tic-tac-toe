import { useState } from 'react';
import { Button } from '../Button';

export function Board() {
    const [squares, setsquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function isWin(squares: Array<null | string>) {
        const list = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let index = 0; index < list.length; index++) {
            const [a, b, c] = list[index];
            const filter = squares.filter(square => square !== null);

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }

            if (filter.length === 9) {
                return "velha";
            }
        }
        return;
    }

    function handleClick(i: number) {
        const newSquares = squares.slice();

        if (newSquares[i] || isWin(squares)) {
            return;
        }

        xIsNext ? newSquares[i] = "X" : newSquares[i] = "O";

        setsquares(newSquares);

        setXIsNext(!xIsNext);
    }

    const winner = isWin(squares);

    let status;

    if (winner) {
        status = "winner is " + winner;
    } else {
        status = "next is " + (xIsNext ? "X" : "O");
    }

    return (
        <div style={{ height: "96vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
                {status}
            </div>

            <div style={{ display: "flex" }}>
                <Button value={squares[0]} handleClick={() => handleClick(0)} />
                <Button value={squares[1]} handleClick={() => handleClick(1)} />
                <Button value={squares[2]} handleClick={() => handleClick(2)} />
            </div>

            <div style={{ display: "flex" }}>
                <Button value={squares[3]} handleClick={() => handleClick(3)} />
                <Button value={squares[4]} handleClick={() => handleClick(4)} />
                <Button value={squares[5]} handleClick={() => handleClick(5)} />
            </div>

            <div style={{ display: "flex" }}>
                <Button value={squares[6]} handleClick={() => handleClick(6)} />
                <Button value={squares[7]} handleClick={() => handleClick(7)} />
                <Button value={squares[8]} handleClick={() => handleClick(8)} />
            </div>
        </div>
    )
}