import React, { useState } from 'react';

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

const useBoard = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '' ,''])
    const [player, setPlayer] = useState('X')
    const [gameOver, setGameOver] = useState(false)

    const attack = (index) => {
        console.log('attack!');
        if(board[index] === '' && !gameOver){
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
    if(!gameOver){
        let gameWin = winnerCheck(board)
        if(gameWin !== ''){
            setGameOver(() => true)
            alert(`${gameWin} is the winner!`)
        }
    }
    return { board, attack }
}

const winnerCheck = (board) => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let winner = ''
    let winningArr = winningCombos.filter(c => {
        return board[c[0]] !== '' && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]
    })
    if(winningArr.length > 0){
        winner = board[winningArr[0][0]]
    }
    return winner
}

export default Board;