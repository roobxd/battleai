'use client';
import { FunctionComponent, useEffect, useState } from "react";
import { Lobby } from "@/app/models/Lobby";
import {Swords} from "lucide-react";

const LobbyCard: FunctionComponent<{ lobby: Lobby; index: number }> = ({ lobby, index }) => {
    const { name, currentPlayers, maxPlayers, gameMode } = lobby;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, index * 100);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`
                bg-white shadow-[8px_8px_0px_rgba(0,0,0,0.5)] rounded-sm p-4 mr-4
                flex flex-col space-y-2
                transition-opacity duration-500 ease-out
                cursor-pointer
                ${isVisible ? 'opacity-100 animate-slideInTop' : 'opacity-0'}
            `}
        >
            <div className="flex flex-row text-lg text-black font-medium items-center justify-between">
                <span className="flex flex-row items-center gap-2">
                    <Swords size={24}/>{name}
                </span>
                <span className="font-semibold text-[0.8em]">{gameMode}</span>
            </div>
            <span className="text-md text-black flex flex-row items-center text-lg font-light">Players: {currentPlayers} / {maxPlayers}</span>
        </div>
    );
}

export default LobbyCard;
