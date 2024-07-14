import React, { useState} from 'react';
import { Client } from 'boardgame.io/react';
import {tttCore} from '@afg/ttt-core';
import GameBoard from './GameBoard';
import { SocketIO } from 'boardgame.io/multiplayer';

interface Props {
  playerID: string;
}

const BASE_URL = process.env.BASE_URL|| import.meta.env.BASE_URL2 || "https://nebulon-server-d20da13bc7f9.herokuapp.com/"

const TicTacToe = Client({ 
    game: tttCore,
    board: GameBoard,
    multiplayer: SocketIO({ server: BASE_URL }),
    debug: false,
 });

const Game: React.FC<Props> = ({ playerID }) => {
  const [matchID, setMatchID] = useState(0);




  const handleNextMatch = () => {
    setMatchID((prev)=>prev+1);
  };

  const handlePrevMatch = ()=>{
    setMatchID((prev)=>prev-1)
  }

  return (
    <div>
        <h1 className='text-3xl' > Game Num: {matchID}</h1>
      {<TicTacToe playerID={playerID} matchID={`matchid-${matchID}`} />}
      <div>
      <button onClick={handlePrevMatch}>Prev Game</button>
      <button onClick={handleNextMatch}>Next Game</button>
      </div>
    </div>
  );
};

export default Game;
