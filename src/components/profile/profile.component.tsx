import { FC, ReactElement } from "react";
import './profile.style.scss'

export const Profile : FC = (): ReactElement =>{

    return(
        <div id="ChatScreen" className="bg-black bg-opacity-80 h-full w-36 rounded-lg rounded-tl-none rounded-bl-none ">
            <div id="header" className="h-16  border-b border-slate-800">              
            </div>
        </div>
    )
}