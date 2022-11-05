import React, { FC, FormEvent, ReactElement, useState, useEffect, useRef } from "react";
import { scrollToBottom } from "../../common/functions";
import { Message } from "../../utils/message/message.utils";
import { AlignSVG, EmojiSVG, MentionSVG, SendSVG, ThumpsUpSVG, UploadSVG } from "../../utils/svg/svg.utils";
import './chatScreen.style.scss'

export const ChatScreen : FC = (): ReactElement =>{
    const [message, setMessage] = useState<string>("")
    const [MsgArray, setMsgArray] = useState<string[]>([])
    const chatBody = useRef<HTMLHeadingElement>(null)

    useEffect(()=>{
      scrollToBottom(chatBody)
    },[MsgArray])

    const saveChat = (e:FormEvent)=>{
      e.preventDefault()
      if(message)setMsgArray([...MsgArray, message])
    }
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
        <div id="body" ref={chatBody} className="flex h-fit m-3 mb-0 flex-col overflow-scroll">
          {
            MsgArray?.map((val)=>(
              <Message val={val} />
            ))
          }
        </div>
        <div
          id="footer"
          className="h-fit w-fullflex justify-center items-center p-3"
        >
          <div id="inputDiv" className="h-full w-full bg-slate-800 rounded-xl flex flex-col">
            <form onSubmit={saveChat} className="w-5/6 h-1/2 bg-transparent ml-5 outline-none">
            <input
              name="send Message"
              type={"text"}
              id="sendInput"
              placeholder=" Send Message"
              className="w-5/6 mt-3 bg-transparent ml-5 outline-none"
              onChange={(e)=>setMessage(e.target.value)}
            ></input>
            </form>
            <div id="inputMenu" className="h-1/2 w-full flex justify-between items-end pb-3">
              <div id="left" className="flex px-3 w-56 justify-between cursor-pointer">
                <div onClick={saveChat}><SendSVG /></div>
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