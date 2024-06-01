import { useState } from "react"
import Game from "./components/Game"
import {SelectUser} from "./components/lobby";
function App() {

  const [playerID, setPlayerID] = useState("");

  console.log(playerID, " : player id")

  return (playerID? <Game playerID={playerID}  matchID="alaf-guy"  />: <SelectUser setPlayerID={setPlayerID} /> )
}

export default App
