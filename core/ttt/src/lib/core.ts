// Game.ts
import type { Game, Move } from "boardgame.io";
import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';


export interface GameState{
  cells: Array<string | null>;

}

type Cells = Array<string | null>;
export const defaultCells:Cells = Array(9).fill(null)

const setup = (): GameState => ({
  cells:  defaultCells,
});

const drawInCell: Move<GameState> = ({ G, playerID, events }, id) => {
  console.log("G : ", G);
  console.log("Player ID : ", playerID);
  console.log("id : ", id);
//   console.log("CTX : ", ctx);

  if (G.cells[Number(id)] !== null) {
    return INVALID_MOVE;
  }
  G.cells[Number(id)] = playerID;
  events.endTurn()
  return
};

const restartGame : Move<GameState> = ({G})=>{

  console.log("resettig game internally")

  G.cells = [...defaultCells]
}

// Return true if `cells` is in a winning configuration.
function IsVictory(cells:Cells) {
  const positions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

  const isRowComplete = (row:number[]): boolean => {
    const symbols = row.map(i => cells[i]);
    return symbols.every(i => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some(i => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells:Cells) {
  return cells.filter(c => c === null).length === 0;
}



  // **********************************
  // aCTUAL Game object being created here:
  // **********************************


  const ticTacToe:Game<GameState> ={
    name: "TIC-TAC-TOE-made-by-Alaf",
    // setup is a function that sets up the game, it sets up the initial value of the state G.
    setup,
    // moves basically are used to update G. 
    // but, I guess it has to be in accordance to set rules. rules we have/ will set up in (   .........   );
    // within this object, we have individual moves. each move is a function that updates the state G to a desired new state and 
    // always receives an object containing various fields. including G & CTX. perhaps we should log the opject to see what it really containes 


    moves: {
      drawInCell,
      restartGame,
    },

    turn: {
      minMoves: 1,
      order: TurnOrder.ONCE,
    },

    endIf: ({ G, ctx }) => {
      if (IsVictory(G.cells)) {
        return { winner: ctx.currentPlayer };
      }
      if (IsDraw(G.cells)) {
        return { draw: true };
      }

      return
    },
    // on end, make function calls when game ends maybe to the backend to record a win and a lose to a particular player's ID
    // onEnd: () => {
    //   alert("congratulations")
    // },

  }

  export default ticTacToe;