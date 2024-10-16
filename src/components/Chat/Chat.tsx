import style from '../../StyleModules/Chat.module.scss'
import Message from '../Message/Message'
import ProfileItem from '../ProfileItem/ProfileItem'

import ava from '../../assets/images/ava.jpg'
import MessageInput from '../MessageInput/MessageInput'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useEffect } from 'react'
import { unreadMess } from '../redux/chatSlice'

const Chat: React.FC = () => {

    const dispatch = useAppDispatch()
    // console.log(state)
    const currentUser = useAppSelector(state => state.chat.data?.id)

    const activeChat = useAppSelector(state => state.chat.activeChat)

    const user = useAppSelector(state => state.chat.data?.chatList[activeChat])

    const messages = useAppSelector(state => state.chat.data?.chatList)

    let activeMessages = messages?.filter((chat) => chat.chatId == activeChat)

    const currentMess = activeMessages && activeMessages[0].messageList

    useEffect(() => {
        dispatch(unreadMess())
    }, [activeChat])

    // console.log(activeMessages[0])

    // activeMessages = activeMessages ? activeMessages
    

    return(
        <>
            <div className={style.chat__container}>
                <ProfileItem 
                    author={true} 
                    name={user ? user?.interviewName : 'guest'} 
                    dec={user?.interviewId ? String(user?.interviewId) : 'error'}
                    img={user?.interviewProfileImage}
                />

                <div className={style.chat}>
                    {currentMess && currentMess.map((mess) => (
                        <Message key={mess.messageId} content={mess.content} authorImg={ava} isAuthor={mess.senderId !== currentUser}/>
                    ))}
                    {/* <Message content='lorem ipsum' authorImg={ava}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>


                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/>
                    <Message content='xuet qima' authorImg={ava} isAuthor={true}/> */}

                </div>
                <MessageInput />
            </div>
        </>
    )
}

export default Chat