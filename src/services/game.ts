import { play } from "../utils/game";
import type {Game, Move} from "boardgame.io";

export interface MyGameState {
    cells: Array<string | null>
}

export interface MyMoves {
    play: Move<MyGameState>;
    // Add other move methods here if needed
}

export function IsVictory(cells: Array<string | null>) {
    const positions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
      [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];
  
    const isRowComplete = (row:number[] ) => {
      const symbols = row.map(i => cells[i]);
      return symbols.every(i => i !== null && i === symbols[0]);
    };
  
    return positions.map(isRowComplete).some(i => i === true);
  }
  
  // Return true if all `cells` are occupied.
export function IsDraw(cells: Array<string | null>) {
    return cells.filter(c => c === null).length === 0;
  }


const TicTacToe: Game<MyGameState>  = {
    setup: () => ({ cells: Array(9).fill(null) }),
    moves:{
        play
    },
    turn:{
        minMoves: 1,
        maxMoves: 1
    },

    endIf: ({ G, ctx }) => {
        if (IsVictory(G.cells)) {
          return { winner: ctx.currentPlayer };
        }
        if (IsDraw(G.cells)) {
          return { draw: true };
        }
      },
}


export default TicTacToe;