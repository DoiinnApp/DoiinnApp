import { FC, ReactElement } from "react";
import './sample.style.scss'

export const Sample : FC = (): ReactElement =>{

    return(
        <div id="Sample" className="bg-black bg-opacity-80 h-full w-36 rounded-lg rounded-tl-none rounded-bl-none ">
            <div id="header" className="h-16  border-b border-slate-800">
                
            </div>
        </div>
    )
}