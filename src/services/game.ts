// Game.ts
import type { Game, Move } from "boardgame.io";
import { INVALID_MOVE } from 'boardgame.io/core';


export interface GameState{
  cells: Array<string | null>;

}

const setup = (): GameState => ({
  cells: Array(9).fill(null),
});

const drawInCell: Move<GameState> = ({ G, ctx, playerID }, id) => {
  console.log("G : ", G);
  console.log("Player ID : ", playerID);
  console.log("id : ", id);
  console.log("CTX : ", ctx);

  if (G.cells[id] !== null) {
    return INVALID_MOVE;
  }
  G.cells[id] = playerID;
};



  // **********************************
  // aCTUAL Game object being created here:
  // **********************************


  const ticTacToe:Game<GameState> ={
    // setup is a function that sets up the game, it sets up the initial value of the state G.
    setup,
    // moves basically are used to update G. 
    // but, I guess it has to be in accordance to set rules. rules we have/ will set up in (   .........   );
    // within this object, we have individual moves. each move is a function that updates the state G to a desired new state and 
    // always receives an object containing various fields. including G & CTX. perhaps we should log the opject to see what it really containes 


    moves: {
      drawInCell
    }

  }

  export default ticTacToe;