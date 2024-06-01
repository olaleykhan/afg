import React from 'react'
import type { BoardProps } from 'boardgame.io/react';
import type { MyGameState } from '../services/game';


interface MyGameProps extends BoardProps<MyGameState> {
    // Additional custom properties for your component
  }


const GameBoard:React.FC<MyGameProps> = (props) => {

  const {ctx,G,moves} = props;

    const onClick = (id:number) => moves.play(id);

    console.log("This really be where we can do and undo")

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
      </div>
    </div>
  );
}

export default GameBoard