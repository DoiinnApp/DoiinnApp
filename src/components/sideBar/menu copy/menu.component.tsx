import React from "react";
import { FC, ReactElement } from "react";
import { DownSVG, DraftSVG, PeopleSVG, SavedSVG, ThreadSVG, UpSVG } from "../../../utils/svg/svg.utils";
import './menu.style.scss'

export const Menu : FC = (): ReactElement =>{

    return(
        <div id="Menu" className="">
            <div id="header">Menu</div>
                <div id="menuList">
                    <div className="flex p-4 cursor-pointer">
                        <div id="icon" className="pr-4"><ThreadSVG/></div>
                        <div id="title">Threads</div>
                    </div>
                    <div className="flex p-4 cursor-pointer">
                        <div id="icon" className="pr-4"><DraftSVG/></div>
                        <div id="title">Draft</div>
                    </div>
                    <div className="flex p-4 cursor-pointer">
                        <div id="icon" className="pr-4"><SavedSVG/></div>
                        <div id="title">Files</div>
                    </div>
                    <div className="flex p-4 cursor-pointer">
                        <div id="icon" className="pr-4"><PeopleSVG/></div>
                        <div id="title">Peoples</div>
                    </div>
                </div>
            <div id="footer">
                <div className="flex p-4 cursor-pointer">
                    <div id="icon" className="pr-4"><UpSVG/></div>
                    <div id="title">Show less</div>
                </div>
            </div>
        </div>
    )
}