import React, { FC, FormEvent, MouseEvent, MouseEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import { scrollToBottom } from "../../common/functions";
import { Message } from "../../utils/message/message.utils";
import { AlignSVG, CancelSVG, EmojiSVG, MentionSVG, SendSVG, ThumpsUpSVG, UploadSVG } from "../../utils/svg/svg.utils";
import './threads.style.scss'

export const Threads : FC<{threadsView:boolean, SetThreadsView: (threadsView:boolean) => void}> = ({threadsView, SetThreadsView}): ReactElement =>{
    const [message, setMessage] = useState<string>("")
    const [MsgArray, setMsgArray] = useState<string[]>([])
    const chatBody = useRef<HTMLHeadingElement>(null)

    useEffect(()=>{
      scrollToBottom(chatBody)
    },[MsgArray])
    useEffect(() => {
        return () => {
            alert("hello")
        };
    }, [])

    const saveChat = (e:FormEvent)=>{
      e.preventDefault()
      if(message)setMsgArray([...MsgArray, message])
    }
    const cancelThread  = (e: MouseEvent)=>{  
        SetThreadsView(false)
    }

    return(
        <div id="Threads" className="bg-gray-900 bg-opacity-80 h-full rounded-lg ">
            <div id="header" className="h-16  border-b border-slate-800 flex justify-between items-center p-3">
                <div id="heading" className="text-lg font-semibold text-slate-300">Threads</div>
                <div id="cancelButton" className="p-1 rounded-md bg-slate-700 cursor-pointer hover:bg-slate-500" onClick={cancelThread}><CancelSVG/></div>
            </div>
            <div id="body" className="h-96 flex m-3 mb-0 flex-col overflow-scroll">
            {
            MsgArray?.map((val)=>(
              <Message val={val} />
            ))
            }
            <span ref={chatBody}></span>
            </div>
            <div id="footer" className="h-16 w-full flex justify-center items-center p-3">
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
            <div id="inputMenu" className="h-1/2 w-full flex justify-between items-end pb-3 text-slate-200">
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
    )
}