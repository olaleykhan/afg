import { Client } from 'boardgame.io/react';
import ticTacToe from '../services/game';
import GameBoard from './GameBoard';
import { SocketIO } from 'boardgame.io/multiplayer'


const TicTacToe = Client({ 
    game: ticTacToe,
    board: GameBoard,
    // multiplayer: SocketIO({ server: 'localhost:8000' }),
    multiplayer: SocketIO({ server: 'https://nebulon-server-d20da13bc7f9.herokuapp.com/' }),
    debug: false,
 });


export default TicTacToe