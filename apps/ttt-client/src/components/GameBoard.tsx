import React, { useEffect } from 'react'
import type { BoardProps } from 'boardgame.io/react';
import { type GameState } from '../services/game';


type MyGameProps = BoardProps<GameState> 


const GameBoard:React.FC<MyGameProps> = (props) => {

  useEffect(()=>{
    console.log("GAME component mounting, do all your initializations here !!!")
    // this will be asynce, and here we will set play order by however, that very likely has to be done 
    // on the backend. we will know soon, set on front after updating from back? or set from back?
    // here, we know our board rendering logic changes......perhaps, we should try to change it all along.....
    
  }, [])

  const {ctx,G,moves} = props;
    const onClick = (id:number) => {
      moves.drawInCell(id)
      // moves
    };

    console.log("I run inefficiantly all the time")

    let winner = <></>;
    if (ctx.gameover) {
      winner =
        ctx.gameover.winner !== undefined ? (
          <div id="winner">Game Winner is : {ctx.gameover.winner}</div>
        ) : (
          <div id="winner"> Game ended in a Draw!</div>
        );
    }
    function handleGetInfo(){
      console.log("GAME STATE : ", G)
      console.log("Context STATE : ", ctx)
      console.log("Game Props : ", props)
    }

    function handleReset(){
      console.log("resetting game!!!")
      moves.restartGame()
    }


  const tbody = [];
  for (let i = 0; i < 3; i++) {
    const cells = [];
    for (let j = 0; j < 3; j++) {
      const id = 3 * i + j;
      cells.push(
        <td key={id}>
          {G.cells[id] ? (
            <div style={{
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
  }}>{G.cells[id]==="1"?"X":"O"}</div>
          ) : (
            <button style={{
    border: '1px solid #555',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
  }} onClick={() => onClick(id)} />
          )}
        </td>
      );
    }
    tbody.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <div>
      <table id="board">
        <tbody>{tbody}</tbody>
      </table>
      {winner}

      <div>
        here we do and undo;

        <button onClick={handleGetInfo}> get info</button>
        <div>
          <button onClick={handleReset} className='py-1 px-3 bg-green-400' > Reset Game</button>
        </div>
      </div>
    </div>
  );
}

export default GameBoard