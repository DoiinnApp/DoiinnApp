import { FC, ReactElement } from "react";
import { AlignSVG, EmojiSVG, MentionSVG, SendSVG, ThumpsUpSVG, UploadSVG } from "../../utils/svg/svg.utils";
import './chatScreen.style.scss'

export const ChatScreen : FC = (): ReactElement =>{

    return (
      <div
        id="ChatScreen"
        className="bg-gray-900 bg-opacity-80 h-full w-full  mr-1 rounded-lg rounded-tl-none rounded-bl-none flex flex-col justify-between "
      >
        <div
          id="header"
          className="h-16  border-b border-slate-800 flex justify-center items-center text-white text-4xl"
        >
          DOIINN
        </div>
        <div
          id="footer"
          className="h-32 w-fullflex justify-center items-center p-3"
        >
          <div id="inputDiv" className="h-full w-full bg-slate-800 rounded-xl">
            <input
              name="send Message"
              type={"text"}
              id="sendInput"
              placeholder=" Send Message"
              className="w-5/6 h-1/2 bg-transparent ml-5 outline-none"
            ></input>
            <div id="inputMenu" className="h-1/2 w-full flex justify-between ">
              <div id="left" className="flex px-3 w-56 justify-between cursor-pointer">
                <SendSVG />
                <MentionSVG />
                <AlignSVG />
                <UploadSVG />
              </div>
              <div id="right" className="flex px-3 w-28 justify-between cursor-pointer">
                <EmojiSVG />
                <ThumpsUpSVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}