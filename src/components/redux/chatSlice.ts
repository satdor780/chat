import { createSlice } from "@reduxjs/toolkit";
import IUsers from "../../types/types";
import type { RootState } from "./store"



type users = {
    data: IUsers | null,
    activeChat: number | 0
}
  
const initialState: users = {
    data: {
        id: 144,
        name: 'ooes',
        profileImage: '/assets/ava-VVbPmGVc.jpg',
        chatList: [
            {
                chatId: 0,
                interviewId: 345,
                interviewName: 'oo',
                interviewProfileImage: '/assets/ava-VVbPmGVc.jpg',
                messageList: [
                    {
                        messageId: 34,
                        content: 'ooes ?',
                        date: '12/23/24',
                        isMessageRead: true,
                        senderId: 144,
                    },
                    {
                        messageId: 1,
                        content: '++',
                        date: '12/23/24',
                        isMessageRead: true,
                        senderId: 345,
                    }
                ]
            },
            {
                chatId: 1,
                interviewId: 222,
                interviewName: 'ooes',
                interviewProfileImage: '/assets/ava-VVbPmGVc.jpg',
                messageList: [
                    {
                        messageId: 34,
                        content: 'hello !',
                        date: '12/23/24',
                        isMessageRead: true,
                        senderId: 144,
                    },
                    {
                        messageId: 1,
                        content: 'idi naxuy',
                        date: '12/23/24',
                        isMessageRead: true,
                        senderId: 345,
                    }
                ]
            }
        ]
    },
    activeChat: 0
}


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        activeChat: (state, {payload}) => {
            // console.log(payload)
            state.activeChat = payload
        }
    }
})

export const { activeChat } = chatSlice.actions

export const selectCount = (state: RootState) => state.chat.data

export default chatSlice.reducer