const player1Name = document.querySelector('.player1').value
const player2Name = document.querySelector('.player2').value

const Gameboard = (() => {
    let board = new Array(9).fill('')
    const getBoard = () => board
    const getValue = (index) => board[index]
    const setValue = (index, marker) => { board[index] = marker, console.log(board) }
    const resetBoard = () => { board.fill(''), console.log(board) }
    return {
        getBoard,
        setValue,
        resetBoard,
        getValue
    }
})()

const Player = (name, marker) => {
    const getName = () => name
    const getMarker = () => marker
    return { getName, getMarker }
}

const gameFlow = (player1Name, player2Name) => {
    const square = document.querySelectorAll('.square')
    const resetBtn = document.querySelector('.reset-btn')
    let gameboard = Gameboard
    let player1 = Player(player1Name, 'X')
    let player2 = Player(player2Name, 'O')
    let currentPlayer = player1
    let gameover = false

    displayController.whosTurn(currentPlayer)
    
    const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1
    }

    const checkForWin = (player) => {
        const draw = gameboard.getBoard().every(square => square != '')
        const winner = winConditions
        .find(winCondition => winCondition
            .every(index => gameboard.getBoard()[index] === player.getMarker()))

        if (winner != null) {
            displayController.openModal()
            displayController.displayWinner(currentPlayer)
            gameover = true
        } if (winner != null && draw) {
            displayController.openModal()
            displayController.displayDraw()
            gameover = true
        }
    }

    const winConditions = [
        [0, 1, 2],
        [3, 4 ,5],
        [6, 7 ,8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const choosingSquare = square.forEach(square => {
        square.addEventListener('click', (e) => {
            let index = e.target.dataset.index
            if (square.textContent === '' && gameover === false) {
                gameboard.setValue(index, currentPlayer.getMarker())
                displayController.renderBoard()
                checkForWin(currentPlayer)
            } if (gameover === false) {
                switchPlayers()
                displayController.whosTurn(currentPlayer)
            }
        })
    })

    const resetGame = (() => {
        resetBtn.addEventListener('click', (e) => {
            gameboard.resetBoard()
            displayController.closeModal()
            currentPlayer = player1
            gameover = false
            displayController.whosTurn(currentPlayer)
            square.forEach(square => {
                square.textContent = ''
            })
        })
    })()

    return {
        switchPlayers,
        currentPlayer,
        gameboard,
        choosingSquare,
        checkForWin
    }
}

const displayController = (() => {
    const square = document.querySelectorAll('.square')
    const message = document.querySelector('.message')
    const display = document.querySelector('.display')
    const modal = document.querySelector('.modal')

    const renderBoard = () => {
        for(let i = 0; i < 9; i++) {
            square[i].textContent = Gameboard.getValue(i)
        }
    }
    
    const whosTurn = (player) => {
        message.textContent = `It's ${player.getName()}'s turn`
    }

    const displayWinner = (player) => {
        display.textContent = `${player.getName()} has won!`
    }

    const displayDraw = () => {
        display.textContent = `It's a draw!`
    }

    const openModal = () => {
        modal.style.display = 'flex'
    }

    const closeModal = () => {
        modal.style.display = 'none'
    }

    // const windowCloseModal = (e) => {
    //     if (e.target === modal) {
    //         gameFlow.resetGame()
    //         modal.style.display = 'none'
    //     }
    // }

    // window.addEventListener('click', windowCloseModal)
    
    return {
        renderBoard,
        whosTurn,
        displayWinner,
        displayDraw,
        openModal,
        closeModal
    }
})()

gameFlow(player1Name, player2Name)