
import { FC, ReactElement } from "react";
// import './sample.style.scss'

export const Message : FC<{val:string}> = ({val}): ReactElement =>{

    return(
        <div id="content" className={val.length < 10 ? "flex justify-end w-full" : "flex justify-start w-full"}>
            <div id="Message" className={val.length < 10  ? "sender" : "receiver"}>
                <div>{val}</div>
                <span className="username">{val.length < 10  ? "sender" : "receiver"}</span>
            </div>
        </div>
    )
}