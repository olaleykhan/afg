import { Server, Origins } from 'boardgame.io/server';
import ticTacToe from '../src/services/game';

const PORT = 8000
const server = Server({
  games: [ticTacToe],
  origins: [Origins.LOCALHOST],
});

server.run(PORT, ()=>console.log(ticTacToe.name,"server is running on port : ", PORT));
