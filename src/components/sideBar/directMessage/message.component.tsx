import { FC, ReactElement } from "react";
import { OnlineSVG, UpSVG } from "../../../utils/svg/svg.utils";
import './message.style.scss'

export const Message : FC = (): ReactElement =>{

    return(
        <div id="Menu" className="mt-3">
            <div id="header" className="text-slate-300">Direct message</div>
                <div id="userList">
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Me (for Notes)</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4 "><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Subramanian</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={false}/></div>
                        <div className="Peoples text-slate-500">Selin</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Aswin</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Suresh</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4 "><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Subramanian</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={false}/></div>
                        <div className="Peoples text-slate-500">Selin</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Aswin</div>
                    </div>
                </div>
            <div id="footer">
                <div className="flex p-3 items-center cursor-pointer ">
                    <div id="isOnline" className="pr-4"><UpSVG/></div>
                    <div className="Peoples text-slate-500">Show less</div>
                </div>
            </div>
        </div>
    )
}