import React, { useState, useEffect, useCallback } from 'react';
import { Client } from 'boardgame.io/react';
import ticTacToe from '../services/game';
import GameBoard from './GameBoard';
import { SocketIO } from 'boardgame.io/multiplayer';

interface Props {
  playerID: string;
}


const TicTacToe = Client({ 
    game: ticTacToe,
    board: GameBoard,
    // multiplayer: SocketIO({ server: 'localhost:8000' }),
    multiplayer: SocketIO({ server: 'https://nebulon-server-d20da13bc7f9.herokuapp.com/' }),
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
