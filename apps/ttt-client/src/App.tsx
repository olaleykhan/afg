import { useState } from "react";
import Game from "./components/TicTacToe";
import { SelectUser } from "./components/lobby";
function App() {
  const [playerID, setPlayerID] = useState("");

  return playerID ? (
    <Game playerID={playerID} />
  ) : (
    <SelectUser setPlayerID={setPlayerID} />
  );

}

export default App;
