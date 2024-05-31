import {INVALID_MOVE } from "boardgame.io/core";
import type { Move} from "boardgame.io";

export interface MyGameState {
    cells: Array<string | null>
}

export const play:Move<MyGameState>=({G, playerID}, id)=>{
    if(G.cells[id] !== null){
        return INVALID_MOVE;
    }
    G.cells[id] = playerID;
}

