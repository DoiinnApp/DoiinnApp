import { FC, ReactElement } from "react";
import { DraftSVG, PeopleSVG, SavedSVG, ThreadSVG, UpSVG } from "../../../utils/svg/svg.utils";
import './menu.style.scss'

export const Menu : FC = (): ReactElement =>{

    return(
        <div id="Menu" className="border-slate-800 border-b mb-3">
            <div id="header" className="text-slate-300">Menu</div>
                <div id="menuList">
                    <div className="flex p-3 cursor-pointer items-center ">
                        <div id="icon" className="pr-4 text-slate-400 "><ThreadSVG/></div>
                        <div className="title text-slate-500">Threads</div>
                    </div>
                    <div className="flex p-3 cursor-pointer items-center ">
                        <div id="icon" className="pr-4 text-slate-400 "><DraftSVG/></div>
                        <div className="title text-slate-500">Draft</div>
                    </div>
                    <div className="flex p-3 cursor-pointer items-center ">
                        <div id="icon" className="pr-4 text-slate-400 "><SavedSVG/></div>
                        <div className="title text-slate-500">Files</div>
                    </div>
                    <div className="flex p-3 cursor-pointer items-center ">
                        <div id="icon" className="pr-4 text-slate-400 "><PeopleSVG/></div>
                        <div className="title text-slate-500">Peoples</div>
                    </div>
                </div>
            <div id="footer">
                <div className="flex p-3 cursor-pointer items-center ">
                    <div id="icon" className="pr-4 text-slate-400 "><UpSVG/></div>
                    <div className="title text-slate-500">Show less</div>
                </div>
            </div>
        </div>
    )
}