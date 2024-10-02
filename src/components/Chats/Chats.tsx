
import { useAppSelector } from '../../hooks'
import style from '../../StyleModules/Chats.module.scss'


// import IUsers from '../../types/types'

// import ava from '../../assets/images/ava.jpg'
import ProfileItem from '../ProfileItem/ProfileItem'

const Chats: React.FC = () => {

    const user = useAppSelector(state => state.chat.data?.chatList)
    // const len = user ? user.length : 0
    return(
        <>
            <div className={style.chats}>
                {user && user.map((user, index) => (
                    <ProfileItem 
                        key={index} 
                        name={user.interviewName} 
                        dec={user.messageList[0].content} 
                        img={user.interviewProfileImage}
                        date={user.messageList[0].date} 
                        id={user.chatId}
                    />
                ))}
                
            </div>
        </>
    )
}

export default Chats