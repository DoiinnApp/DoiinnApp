import { FC, ReactElement } from "react";
import { DownSVG, DraftSVG, OnlineSVG, PeopleSVG, SavedSVG, ThreadSVG, UpSVG } from "../../../utils/svg/svg.utils";
import './message.style.scss'

export const Message : FC = (): ReactElement =>{

    return(
        <div id="Menu" className="mt-3">
            <div id="header">Direct message</div>
                <div id="userList">
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples">Suresh</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4 "><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples">Subramanian</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={false}/></div>
                        <div className="Peoples">Selin`</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples">Aswin</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples">Suresh</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4 "><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples">Subramanian</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={false}/></div>
                        <div className="Peoples">Selin`</div>
                    </div>
                    <div className="flex p-3 items-center cursor-pointer">
                        <div id="isOnline" className="pr-4"><OnlineSVG isOnline={true}/></div>
                        <div className="Peoples">Aswin</div>
                    </div>
                </div>
            <div id="footer">
                <div className="flex p-3 items-center cursor-pointer">
                    <div id="isOnline" className="pr-4"><UpSVG/></div>
                    <div className="Peoples">Show less</div>
                </div>
            </div>
        </div>
    )
}