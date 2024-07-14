#Follow

## wiring up boardgame.io with codebase

Now, to use the boargame library, we need to know about 6 concepts. 

1. State: this consisit of 2 states, G: the game state and ctx: the context state.
2. Moves: These are functions that tell the game how to change the state G only. ~not CTX~
3. Events: These are functions provided by the framework to handle game state but for ctx, not G
4. Phase: THis is a Period in the game that overides the default game flow. E.G special cards or events.
5. Turn: A turn is a period of the game that is associated with an individual player. it consists of 1 or more moves a player can make before the turn passess to another player. 
6. Stage: A stage is similar to a phase, but it happenes within a player's turn. during a turn, different players can be in different stages.a turn can change the configuration of the game, I.E, currently playing pick 2 or general market. 

## 1. The game Object