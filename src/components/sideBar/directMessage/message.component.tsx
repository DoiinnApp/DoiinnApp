import { FC, ReactElement } from "react";
import { OnlineSVG, UpSVG } from "../../../utils/svg/svg.utils";
import './message.style.scss'

export const DirectMessage : FC = (): ReactElement =>{

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
                        <div className="Peoples text-slate-500">RamaSami</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={false}/></div>
                        <div className="Peoples text-slate-500">Roy</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">KuppuSamy</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Suresh</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4 "><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">Karuppu</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={false}/></div>
                        <div className="Peoples text-slate-500">Kathavarayan</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer ">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples text-slate-500">ffdtfgjh</div>
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