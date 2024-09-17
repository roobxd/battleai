import {FunctionComponent} from "react";
import {Lobby} from "@/app/models/Lobby";
import LobbyCard from "@/app/games/components/LobbyCard";

const LobbyList: FunctionComponent<{lobbyList: Lobby[]}> = ({lobbyList}) => {
    return (
        <div className="h-[70vh] overflow-y-auto space-y-12 scrollbar-thin">
            {
                lobbyList.map((lobby, index) => <LobbyCard key={index} lobby={lobby} index={index}/>)
            }
        </div>
    )
}

export default LobbyList;