import {FunctionComponent, PropsWithChildren} from "react";

const GamesColumn: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <div className="flex flex-col space-y-8 h-full w-1/3">
            {children}
        </div>
    )
}

export default GamesColumn;