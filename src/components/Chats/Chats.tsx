
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks'
import style from '../../StyleModules/Chats.module.scss'


// import IUsers from '../../types/types'

// import ava from '../../assets/images/ava.jpg'
import ProfileItem from '../ProfileItem/ProfileItem'

const Chats: React.FC = () => {

    const users = useAppSelector(state => state.chat.data?.chatList)

    const [searchUsers, setSearchUsers] = useState(users)

    const [text, setText] = useState('')

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    useEffect(() => {
        if(users){
            const filterUsers = users.filter((user) => user.interviewName.toLowerCase().includes(text.toLowerCase()))
            
            if(filterUsers.length != 0){
                setSearchUsers(filterUsers)
            }else{
                setSearchUsers(undefined)
            }
            
        }
    }, [text, users])

    // const len = user ? user.length : 0
    return(
        <>
            <div className={style.chats}>
                <div className={style.search}>
                <input
                        type="text"
                        value={text}
                        onChange={search}
                        placeholder='search..'
                    />
                </div>
                {searchUsers ? searchUsers.map((user, index) => (
                    <ProfileItem 
                        key={index} 
                        name={user.interviewName} 
                        dec={user.messageList[user.messageList.length - 1].content}
                        img={user.interviewProfileImage}
                        date={user.messageList[user.messageList.length - 1].date}
                        id={user.chatId}
                        notf={user.unread}
                    />
                )): (
                    <span className={style.emptySearch}>Nothing is changed:{'('}</span>
                )}
                
            </div>
        </>
    )
}

export default Chats