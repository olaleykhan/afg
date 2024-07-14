// import koa from 'koa';
import { Server, Origins } from 'boardgame.io/server';
import tttCore from '@afg/ttt-core';

const PORT = Number(process.env.PORT) || 8082;

const server = Server({
  games: [tttCore],
  origins: [Origins.LOCALHOST],
});



server.router.get('/', (ctx, next)=>{
  ctx
  ctx.body = "<h1> Nebulon Web:Socket Server. Welcome!!! </h1>"
})
server.router.get('/ok', (ctx, next)=>{
  ctx.body = "<h1>Server OK!!! </h1> "
})


server.app.createContext

server.run(PORT, ()=>console.log(tttCore,"server is running on port : ", PORT));
