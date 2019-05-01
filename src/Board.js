import React, { useState } from 'react';


const useBoard = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '' ,''])
    const [player, setPlayer] = useState('X')

    const attack = (index) => {
        console.log('attack!');
        if(board[index] === ''){
            setBoard((board) => {
                board[index] = player
                return board
            })
            setPlayer((player) => {
                player = player === "X" ? "O" : "X"
                return player
            })
        }
    }
    return { board, attack }
}

const Board = () => {
    const {board, attack} = useBoard()
    let positions = board.map((pos, i) => {
        return <div className="pos" onClick={() => attack(i)}>{pos}</div>
    })
    return(
        <div id="board">
            {positions}
        </div>
    )
}

export default Board;