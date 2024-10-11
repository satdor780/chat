import { createSlice } from "@reduxjs/toolkit";
import IUsers from "../../types/types";
import type { RootState } from "./store"

// import Message from "../../types/types";



type users = {
    data: IUsers | null,
    activeChat: number | 0
}


interface MessageType {
    messageId: number;
    content: string;
    date: string; // Можно использовать Date, если вы будете работать с объектами даты
    isMessageRead: boolean;
    senderId: number;
}
  
const initialState: users = {
    data: {
        id: 144,
        name: 'ooes',
        profileImage: '/src/assets/images/ava.jpg',
        
        chatList: [
            {
                chatId: 0,
                interviewId: 345,
                interviewName: 'oo',
                interviewProfileImage: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/14842dbf-21e2-4868-805b-ee62c879e019/1920x',
                unread: 0,
                messageList: [
                    {
                        messageId: 34,
                        content: 'ooes ?',
                        date: '9:45',
                        isMessageRead: true,
                        senderId: 144,
                    },
                    {
                        messageId: 1,
                        content: '++',
                        date: '9:45',
                        isMessageRead: true,
                        senderId: 345,
                    }
                ]
            },
            {
                chatId: 1,
                interviewId: 222,
                interviewName: 'ooes',
                interviewProfileImage: 'https://avatars.mds.yandex.net/get-afishanew/28638/51cf672256f0b591590043a5bd8c1701/orig',
                unread: 2,
                messageList: [
                    {
                        messageId: 34,
                        content: 'hello !',
                        date: '9:45',
                        isMessageRead: true,
                        senderId: 222,
                    },
                    {
                        messageId: 1,
                        content: 'hi',
                        date: '9:45',
                        isMessageRead: true,
                        senderId: 144,
                    },
                    {
                        messageId: 233232,
                        content: 'hello !',
                        date: '9:45',
                        isMessageRead: true,
                        senderId: 222,
                    },
                    {
                        messageId: 54,
                        content: 'hello !',
                        date: '9:45',
                        isMessageRead: true,
                        senderId: 222,
                    },
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
        active: (state, {payload}) => {
            // console.log(payload)
            state.activeChat = payload
        },
        sendMessage: (state, { payload }: { payload: string }) => {
            const chatId = state.activeChat;
            const chat = state.data?.chatList?.find((chat) => chat.chatId === chatId);
        
            if (chat && state.data?.id !== undefined) { // Ensure id is not undefined
                const newMessage: MessageType = {
                    messageId: Number(Date.now()),
                    content: payload,
                    date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isMessageRead: false,
                    senderId: state.data.id, // Directly use without casting to Number if it's already defined as number
                };
        
                const updatedMessages = [...chat.messageList, newMessage];
        
                // Update state immutably
                const updatedChatList = state.data.chatList.map((c) =>
                    c.chatId === chatId ? { ...c, messageList: updatedMessages } : c
                );
        
                return {
                    ...state,
                    data: {
                        ...state.data,
                        chatList: updatedChatList,
                    },
                };
            }
        
            return state; // If chat not found or id is undefined, return the current state
        },
        unreadMess: (state) => {
            const chatId = state.activeChat;
            // return {
            //     ...state,
            //     data: {
            //         ...state.data?,
            //         chatList: state.data?.chatList.map((chat) => {
            //             return chat.chatId === chatId ? { ...chat, unread: 0 } : chat
            //         }) 
            //     }
            // }
            const newChatList = state.data?.chatList.map((e) => {
                
                if(e.chatId == chatId){
                    return {...e, unread: 0}
                }else{
                    return {...e}
                }
            })

            if(newChatList && state.data){
                return {
                ...state,
                    data: {
                        ...state.data,
                            chatList: newChatList
                    }
                }
            }
        },
    }
})

export const { active, sendMessage, unreadMess } = chatSlice.actions

export const selectCount = (state: RootState) => state.chat.data

export default chatSlice.reducer