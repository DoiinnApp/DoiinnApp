import { FC, ReactElement, useState } from "react";
import { ChatScreen } from "../../components/chatScreen/chatScreen.component";
import { Profile } from "../../components/profile/profile.component";
import { SideBar } from "../../components/sideBar/sideBar.component";
import { Threads } from "../../components/threads/threads.component";
import './main.style.scss'

export const Main : FC = (): ReactElement =>{
    const [threadsView, SetThreadsView] = useState<boolean>(true)

    return(
        <div id="main" className="bg-black h-screen w-screen flex ">
            <Profile />
            <SideBar />
            <ChatScreen />
            {threadsView && <Threads threadsView={threadsView} SetThreadsView={SetThreadsView} />}
        </div>
    )
}