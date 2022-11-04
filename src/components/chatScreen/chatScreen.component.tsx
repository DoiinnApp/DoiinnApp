import { FC, ReactElement } from "react";
import './chatScreen.style.scss'

export const ChatScreen : FC = (): ReactElement =>{

    return(
        <div id="ChatScreen" className="bg-gray-900 bg-opacity-80 h-full w-full  mr-1 rounded-lg rounded-tl-none rounded-bl-none ">
            <div id="header" className="h-16  border-b border-slate-800"></div>
        </div>
    )
}