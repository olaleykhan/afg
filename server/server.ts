import { Server, Origins } from 'boardgame.io/server';
import ticTacToe from '../src/services/game';

const server = Server({
  games: [ticTacToe],
  origins: [Origins.LOCALHOST],
});

server.run(8000);
