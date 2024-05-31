// src/server.js

import  { Server, Origins } from 'boardgame.io/server'
import TicTacToe from '../src/services/game.ts'

const server = Server({
  games: [TicTacToe],
  origins: [Origins.LOCALHOST],
});

server.run(8000);