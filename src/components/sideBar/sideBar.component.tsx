import { FC, ReactElement } from "react";
import './sideBar.style.scss'

export const SideBar : FC = (): ReactElement =>{

    return(
        <div id="SideBar" className="bg-gray-800 bg-opacity-80 h-full rounded-lg rounded-tr-none rounded-br-none ">
            <div id="header" className="h-16  border-b border-slate-800"></div>
        </div>
    )
}