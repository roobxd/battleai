import {FunctionComponent} from "react";
import {Input} from "@/components/ui/input";
import {Lobby} from "@/app/models/Lobby";
import {GameMode} from "@/app/models/GameMode";
import GamesColumn from "@/app/games/components/GamesColumn";
import LobbyList from "@/app/games/components/LobbyList";

const Games: FunctionComponent = () => {

    const lobbyList: Lobby[] = [
        {name: "Lobby-1", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1},
        {name: "Lobby-2", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1},
        {name: "Lobby-3", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1},
        {name: "Lobby-4", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1},
        {name: "Lobby-5", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1},
        {name: "Lobby-6", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1},
        {name: "Lobby-7", gameMode: GameMode.TOURNAMENT, maxPlayers: 2, currentPlayers: 1}
    ]

    return (
        <div className="flex flex-row bg-gradient-to-b from-indigo-800 to-indigo-600 min-h-screen min-w-screen p-4 items-center justify-evenly">
            <GamesColumn>
                 <span className="text-6xl font-black bg-clip-text text-white ">
                    Name!
                </span>
                <div>
                    <span className="text-xl bg-clip-text text-white">Room Code</span>
                    <Input
                        type="text"
                        id="roomcode"
                        placeholder="Enter code..."
                        className="placeholder:text-black w-9/12 placeholder:text-xl text-black text-xl p-6 bg-white border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,0.5)] focus:shadow-[8px_8px_0px_rgba(0,0,0,0.5)] focus:outline-none"
                    />
                </div>
            </GamesColumn>
            <GamesColumn>
                <span className="text-6xl font-black bg-clip-text text-white ">
                    Open Lobbies
                </span>
                <LobbyList lobbyList={lobbyList}/>
            </GamesColumn>
        </div>
    )
}

export default Games;
