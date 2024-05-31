import { Client } from 'boardgame.io/react';
import TicTacToe from '../services/game'
import GameBoard from './GameBoard';
import { SocketIO } from 'boardgame.io/multiplayer'


const Game = Client({ game: TicTacToe,
    board: GameBoard,
    multiplayer: SocketIO({ server: 'localhost:5173' })
 });


export default Game