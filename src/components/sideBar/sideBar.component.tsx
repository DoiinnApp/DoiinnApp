import { FC, ReactElement } from "react";
import { User } from "../../service/logindata";
import './sideBar.style.scss'
import { EditSVG } from "../../utils/svg/svg.utils";
import { Menu } from "./menu/menu.component";
import { Message } from "./directMessage/message.component";

export const SideBar : FC = (): ReactElement =>{

    return(
        <div id="SideBar" className="bg-gray-800 bg-opacity-80 h-full rounded-lg rounded-tr-none rounded-br-none ">
            <div id="header" className="h-16 p-6 border-b border-slate-800 flex justify-between items-center">
                <div id="user">
                    <div id="userName" className="text-lg font-semibold text-slate-300">{User.name}</div>
                    <div id="userRole" className="text-xs text-slate-600">{User.role}</div>
                </div>
                <div id="edit" className="whiteSvg text-slate-200">
                    <EditSVG />
                </div>
            </div>
            <div id="body" className="  h-fit p-6 overflow-y-scroll	">
                <Menu />
                <Message />
            </div>
        </div>
    )
}