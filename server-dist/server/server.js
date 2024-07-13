"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("boardgame.io/server");
const game_1 = __importDefault(require("../src/services/game"));
const PORT = 8000;
const server = (0, server_1.Server)({
    games: [game_1.default],
    origins: [server_1.Origins.LOCALHOST],
});
server.run(PORT, () => console.log(game_1.default.name, "server is running on port : ", PORT));
