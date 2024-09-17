import {GameMode} from "@/app/models/GameMode";

export interface Lobby {
    name: string;
    maxPlayers: number;
    currentPlayers: number;
    gameMode: GameMode
}