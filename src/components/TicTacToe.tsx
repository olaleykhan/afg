import { Client } from 'boardgame.io/react';
import ticTacToe from '../services/game';
import GameBoard from './GameBoard';
import { SocketIO } from 'boardgame.io/multiplayer'


const TicTacToe = Client({ 
    game: ticTacToe,
    board: GameBoard,
    multiplayer: SocketIO({ server: 'localhost:8000' }),
    debug: false,
 });


export default TicTacToe